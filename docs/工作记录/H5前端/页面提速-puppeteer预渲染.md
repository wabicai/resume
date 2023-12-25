<!-- https://wepie.feishu.cn/wiki/Cgzkwt03piCx9OkwEfhcKcGknHd -->

```js
async function ssr(url, screenshot) {
  const browser = await puppeteer.launch({
    headless: "old",
    args: [
      "--window-size=1624,750",
      "--no-sandbox",
      "--disable-setuid-sandbox",
    ],
    defaultViewport: {
      width: 812,
      height: 375,
      deviceScaleFactor: 2,
    },
  });
  const page = await browser.newPage();
  // await page.evaluateOnNewDocument(`window.__SSR__ = true;`);
  await page.evaluateOnNewDocument(() => {
    // eslint-disable-next-line
    // @ts-ignore
    window.__SSR__ = true;
    // 预渲染，不初始化 vConsole
    // @ts-ignore
    window.vConsole = true;
  });
  await page.goto(
    url.indexOf("?") !== -1
      ? `${url}&IS_PRELOAD=true`
      : `${url}?IS_PRELOAD=true`
  );
  // await page.waitForSelector('.container');
  await page.waitForTimeout(5000);
  if (screenshot) {
    await page.screenshot({
      path: screenshot,
      fullPage: true,
    });
  }
  const html = await page.content();
  await browser.close();
  return html;
}
```

```js
export const readAndWriteFile = async ({
  url,
  env,
  screenshot,
}: {
  url: string,
  env?: string,
  screenshot?: string,
}) => {
  env = env || PreloadEnv.TEST;
  const filename = `${env}/${getFilename(url)}`;
  // 把url预加载成html
  let html = await ssr(url, screenshot);
  // TODO html-minifier    压缩之后无优化 --- 源文件已压缩
  // html写入文件
  await writeFile(join(viewDir, filename), html.trim());

  // 测试环境不走cdn地址
  const baseUrl =
    env === PreloadEnv.PROD ? CONFIG_DOMAIN : CONFIG_NO_CACHE_DOMAIN;
  const path = `${CONFIG_BASE_PATH}/${filename}?${getParamsStr(url)}`;
  return {
    html,
    url: `${getProtocol(url)}://${baseUrl}/${path}`,
  };
};
```
