# 告警-puppeteer 截图对比、业务巡检

TODO: https://wepie.feishu.cn/wiki/JIqjwUckZiyPcvkk9OicKQ9tnte

# 目的

1. 通过页面截图功能，将第一次生成的页面截图和第二次生成的页面截图进行【像素】对比，如果差异大于某个自定义的【阈值】就告警
2. 定期有规律性的将线上的业务全部自动化 check 一遍，发送错误或异常信息。

# 原理

1. 基于 puppeteer 的截图功能
2. 基于 pixelmatch 的像素对比功能
3. 自定义指令 v-validate，对比正常情况下有多少个节点。

# 关键代码

## 在第一次生成页面的时候截图，作为基准

##

```js
import puppeteer from "puppeteer";
import * as fs from "fs-extra";
import { basename, dirname, join } from "path";
import { getSid } from "./clientApi";
import { isProductionEnv } from "@/constant";
const validate = require("./evaluate/validate");
const extract = require("./evaluate/extract");
const PNG = require("pngjs").PNG;
const pixelmatch = require("pixelmatch");
const WAIT_TIMEOUT = 5000;
const addParams = (url, params) => {
  const [main, hash] = url.split("#");
  let hasQuery = false;
  return Object.keys(params).reduce((ret, key) => {
    const value = params[key];
    hasQuery = hasQuery || (hash || main).indexOf("?") !== -1;
    return ret + (hasQuery ? "&" : "?") + `${key}=${encodeURIComponent(value)}`;
  }, url);
};
const styleTag = `
  @font-face {
    font-family: 'PingFang-SC-Regular';
    src: url(http://dev-snake.tcsdzz.com/banner/public/font/PingFang-SC-Regular.ttf) format('truetype');
  }
  body {
    font-family: 'PingFang-SC-Regular' !important;
  }
`;

// url 转化器
const urlParser: {
  [x: string]: (url: string) => string,
} = {
  env: (url: string): string => {
    // 这里只处理130环境和正式服环境
    if (isProductionEnv) {
      return addParams(url, { dev: 4 });
    } else if (url.indexOf("dev=3") === -1) {
      return addParams(url, { dev: 3 });
    }
    return url;
  },
  market: (url: string): string => {
    return addParams(url, { market: "office" });
  },
};

const getDiffPercent = (
  diff: number,
  { width, height }: { width: number, height: number }
) => {
  const totalPixel = width * height;
  return totalPixel ? Math.ceil((diff / totalPixel) * 100) : 0;
};

export const makeScreenshot = async ({
  url,
  path,
  uid,
  reset = false,
}: {
  url: string,
  path: string,
  uid: string,
  reset?: boolean,
}) => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--window-size=812,375", "--no-sandbox", "--disable-setuid-sandbox"],
    defaultViewport: {
      width: 812,
      height: 375,
      deviceScaleFactor: 2,
    },
  });
  const page = await browser.newPage();
  await page.addStyleTag({
    content: styleTag,
  });
  await page.evaluateOnNewDocument(() => {
    // eslint-disable-next-line
    // @ts-ignore
    window.__SSR__ = true;
    // 预渲染，不初始化 vConsole
    // // @ts-ignore
    // window.vConsole = true;
    // var style = document.createElement('style');
    // style.type = 'text/css';
    // style.innerHTML = `@font-face {
    //   font-family: 'PingFang-SC-Regular';
    //   src: url(http://dev-snake.tcsdzz.com/banner/public/font/PingFang-SC-Regular.ttf) format('truetype');
    // }
    // body {
    //   font-family: 'PingFang-SC-Regular' !important;
    // }`; // the css content goes here
    // document.getElementsByTagName('head')[0].appendChild(style);

    const head = document.head || document.getElementsByTagName("head")[0];
    const style = document.createElement("style");
    head.appendChild(style);
    style.textContent = `@font-face {
      font-family: 'PingFang-SC-Regular';
      src: url(http://dev-snake.tcsdzz.com/banner/public/font/PingFang-SC-Regular.ttf) format('truetype');
    }
    body {
      font-family: 'PingFang-SC-Regular' !important;
    }`;
  });

  let parsedUrl = Object.values(urlParser).reduce((ret, fn) => {
    return fn(ret);
  }, url);

  parsedUrl = addParams(parsedUrl, { uid });
  const sid = await getSid(uid);
  sid && (parsedUrl = addParams(parsedUrl, { sid }));
  await page.goto(parsedUrl);
  await page.waitForTimeout(WAIT_TIMEOUT);
  const dir = dirname(path);
  const [, id, random] = basename(path).match(/([\d_]*)_(\d{13})\.png/) || [];
  const validateRulePath = join(dir, `${id}.json`);

  await page.screenshot({
    path: path,
    fullPage: true,
  });

  if (!id) {
    return {
      path,
    };
  }

  if (!fs.existsSync(validateRulePath) || reset) {
    const result = await page.evaluate(extract);
    fs.writeFileSync(validateRulePath, JSON.stringify(result));
  }
  await page.exposeFunction("getValidateRules", () => {
    return JSON.parse(fs.readFileSync(validateRulePath, "utf-8"));
  });
  const validateResult = await page.evaluate(validate);

  let rules = [];
  try {
    rules = JSON.parse(fs.readFileSync(validateRulePath, "utf-8"));
  } catch (e) {
    rules = [];
  }
  const basePath = join(dir, `${id}.png`);
  let diffPixels = 0;
  let width = 1624;
  let height = 750;
  let diffPath = `${id}_diff_${random}.png`;
  if (!fs.existsSync(basePath) || reset) {
    fs.copySync(path, basePath);
    diffPath = "";
  } else {
    const img1 = PNG.sync.read(fs.readFileSync(basePath));
    const img2 = PNG.sync.read(fs.readFileSync(path));
    width = img1.width;
    height = img1.height;
    const diff = new PNG({ width, height });
    diffPixels = pixelmatch(img1.data, img2.data, diff.data, width, height, {
      threshold: 0.1,
    });
    // 有差别才写入diff图
    if (diffPixels) {
      fs.writeFileSync(join(dir, diffPath), PNG.sync.write(diff));
    }
  }

  await page.close();
  await browser.close();

  return {
    validate: validateResult,
    rules,
    diff_percent: getDiffPercent(diffPixels, { width, height }),
    diff_path: diffPath,
  };
};
```
