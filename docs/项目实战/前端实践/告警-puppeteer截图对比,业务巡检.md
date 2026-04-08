# 告警：Puppeteer 截图对比与业务巡检

## 背景

在H5营销活动快速迭代的过程中，经常会遇到以下问题：
1. 代码变更后可能影响已上线页面的显示效果
2. 第三方依赖更新可能导致页面异常
3. 人工回归测试成本高，容易遗漏
4. 线上问题发现不及时，影响用户体验和业务指标

传统的监控方案（如Sentry、日志监控）只能捕获JS错误，无法发现视觉层面的问题。我们需要一套自动化的视觉回归测试和业务巡检系统，能够：
- 自动对比页面截图，发现视觉变化
- 定期检查关键业务流程是否正常
- 发现问题后及时告警通知相关人员

## 问题分析

### 1. 现状问题

**视觉回归问题难以发现**
- 样式错乱、布局异常等问题需要人工检查
- 不同浏览器渲染差异需要逐一测试
- 某些异常只在特定场景下出现

**业务功能回归成本高**
- 每次发布需要人工点击测试各个功能
- 关键业务流程（如支付、领奖）测试耗时
- 容易遗漏边界情况

**问题发现不及时**
- 依赖用户反馈才知道出问题
- 问题影响范围难以评估
- 修复后无法快速验证

### 2. 技术选型

**为什么选择Puppeteer：**
- 基于Chrome的无头浏览器，渲染结果准确
- API简单易用，支持截图、PDF生成等
- 可以模拟用户操作（点击、输入、滚动等）
- 支持拦截网络请求，可以mock数据
- 性能较好，适合批量执行

**为什么选择pixelmatch进行图片对比：**
- 纯JavaScript实现，无需额外依赖
- 性能好，支持像素级对比
- 可以生成差异图，直观展示变化
- 可配置容差度，避免误报

## 解决方案

### 1. 基础截图工具封装

```javascript
// utils/screenshot.js
const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');

class ScreenshotTool {
  constructor(options = {}) {
    this.browser = null;
    this.options = {
      headless: true,
      defaultViewport: {
        width: 375,
        height: 667
      },
      ...options
    };
  }

  /**
   * 初始化浏览器
   */
  async init() {
    if (this.browser) return this.browser;

    this.browser = await puppeteer.launch({
      headless: this.options.headless,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu'
      ]
    });

    return this.browser;
  }

  /**
   * 截图
   * @param {string} url - 页面URL
   * @param {object} options - 配置选项
   */
  async capture(url, options = {}) {
    const {
      output = 'screenshot.png',
      fullPage = true,
      waitUntil = 'networkidle0',
      device = null,
      delay = 1000,
      selector = null,
      beforeScreenshot = null
    } = options;

    await this.init();
    const page = await this.browser.newPage();

    try {
      // 设置设备模拟
      if (device && devices[device]) {
        await page.emulate(devices[device]);
      } else if (this.options.defaultViewport) {
        await page.setViewport(this.options.defaultViewport);
      }

      // 访问页面
      console.log(`正在访问: ${url}`);
      await page.goto(url, {
        waitUntil,
        timeout: 30000
      });

      // 等待页面加载完成
      if (delay) {
        await page.waitForTimeout(delay);
      }

      // 执行自定义操作
      if (beforeScreenshot) {
        await beforeScreenshot(page);
      }

      // 截图
      const screenshotOptions = {
        path: output,
        fullPage
      };

      // 截取特定元素
      if (selector) {
        const element = await page.$(selector);
        if (element) {
          await element.screenshot(screenshotOptions);
        } else {
          throw new Error(`Element not found: ${selector}`);
        }
      } else {
        await page.screenshot(screenshotOptions);
      }

      console.log(`截图已保存: ${output}`);
      return output;

    } catch (error) {
      console.error('截图失败:', error);
      throw error;
    } finally {
      await page.close();
    }
  }

  /**
   * 批量截图
   * @param {Array} tasks - 任务列表
   */
  async captureMultiple(tasks) {
    await this.init();

    const results = [];
    for (const task of tasks) {
      try {
        const result = await this.capture(task.url, task.options);
        results.push({ success: true, url: task.url, output: result });
      } catch (error) {
        results.push({ success: false, url: task.url, error: error.message });
      }
    }

    return results;
  }

  /**
   * 关闭浏览器
   */
  async close() {
    if (this.browser) {
      await this.browser.close();
      this.browser = null;
    }
  }
}

module.exports = ScreenshotTool;
```

### 2. 图片对比工具

```javascript
// utils/imageCompare.js
const fs = require('fs');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');

class ImageComparator {
  /**
   * 对比两张图片
   * @param {string} img1Path - 基准图片路径
   * @param {string} img2Path - 对比图片路径
   * @param {string} diffPath - 差异图输出路径
   * @param {object} options - 配置选项
   */
  async compare(img1Path, img2Path, diffPath, options = {}) {
    const {
      threshold = 0.1,      // 差异阈值 0-1
      includeAA = false,    // 是否包含抗锯齿像素
      alpha = 0.1,          // 透明度混合
      aaColor = [255, 255, 0], // 抗锯齿颜色
      diffColor = [255, 0, 0]  // 差异颜色
    } = options;

    return new Promise((resolve, reject) => {
      const img1 = PNG.sync.read(fs.readFileSync(img1Path));
      const img2 = PNG.sync.read(fs.readFileSync(img2Path));

      const { width, height } = img1;

      // 检查尺寸是否一致
      if (img2.width !== width || img2.height !== height) {
        return reject(new Error('图片尺寸不一致'));
      }

      // 创建差异图
      const diff = new PNG({ width, height });

      // 执行对比
      const numDiffPixels = pixelmatch(
        img1.data,
        img2.data,
        diff.data,
        width,
        height,
        {
          threshold,
          includeAA,
          alpha,
          aaColor,
          diffColor
        }
      );

      // 计算差异比例
      const totalPixels = width * height;
      const diffPercentage = (numDiffPixels / totalPixels) * 100;

      // 保存差异图
      if (diffPath) {
        fs.writeFileSync(diffPath, PNG.sync.write(diff));
      }

      resolve({
        width,
        height,
        totalPixels,
        numDiffPixels,
        diffPercentage: diffPercentage.toFixed(2),
        passed: diffPercentage < 1, // 差异小于1%认为通过
        diffImagePath: diffPath
      });
    });
  }

  /**
   * 批量对比
   * @param {Array} tasks - 对比任务列表
   */
  async compareMultiple(tasks) {
    const results = [];

    for (const task of tasks) {
      try {
        const result = await this.compare(
          task.baseline,
          task.current,
          task.diff,
          task.options
        );

        results.push({
          success: true,
          name: task.name,
          ...result
        });
      } catch (error) {
        results.push({
          success: false,
          name: task.name,
          error: error.message
        });
      }
    }

    return results;
  }
}

module.exports = ImageComparator;
```

### 3. 业务巡检工具

```javascript
// utils/healthCheck.js
const puppeteer = require('puppeteer');

class HealthChecker {
  constructor(options = {}) {
    this.browser = null;
    this.options = {
      timeout: 30000,
      ...options
    };
  }

  async init() {
    if (this.browser) return this.browser;

    this.browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    return this.browser;
  }

  /**
   * 检查页面可访问性
   */
  async checkAccessibility(url) {
    await this.init();
    const page = await this.browser.newPage();

    try {
      const startTime = Date.now();

      const response = await page.goto(url, {
        waitUntil: 'networkidle0',
        timeout: this.options.timeout
      });

      const loadTime = Date.now() - startTime;
      const status = response.status();

      await page.close();

      return {
        success: status >= 200 && status < 400,
        status,
        loadTime,
        url
      };
    } catch (error) {
      await page.close();
      return {
        success: false,
        error: error.message,
        url
      };
    }
  }

  /**
   * 检查关键元素是否存在
   */
  async checkElements(url, selectors) {
    await this.init();
    const page = await this.browser.newPage();

    try {
      await page.goto(url, {
        waitUntil: 'networkidle0',
        timeout: this.options.timeout
      });

      const results = {};

      for (const [name, selector] of Object.entries(selectors)) {
        try {
          const element = await page.$(selector);
          results[name] = {
            exists: !!element,
            selector
          };

          // 获取元素文本内容
          if (element) {
            const text = await page.evaluate(el => el.textContent, element);
            results[name].text = text.trim();
          }
        } catch (error) {
          results[name] = {
            exists: false,
            selector,
            error: error.message
          };
        }
      }

      await page.close();
      return { success: true, elements: results };

    } catch (error) {
      await page.close();
      return { success: false, error: error.message };
    }
  }

  /**
   * 检查API请求
   */
  async checkAPI(url, apiPattern) {
    await this.init();
    const page = await this.browser.newPage();

    const apiRequests = [];

    // 监听请求
    page.on('request', request => {
      if (apiPattern.test(request.url())) {
        apiRequests.push({
          url: request.url(),
          method: request.method()
        });
      }
    });

    // 监听响应
    page.on('response', async response => {
      if (apiPattern.test(response.url())) {
        const request = apiRequests.find(r => r.url === response.url());
        if (request) {
          request.status = response.status();
          request.success = response.status() >= 200 && response.status() < 400;

          try {
            const contentType = response.headers()['content-type'];
            if (contentType && contentType.includes('application/json')) {
              request.data = await response.json();
            }
          } catch (e) {
            // JSON解析失败，忽略
          }
        }
      }
    });

    try {
      await page.goto(url, {
        waitUntil: 'networkidle0',
        timeout: this.options.timeout
      });

      // 等待一段时间确保所有请求完成
      await page.waitForTimeout(2000);

      await page.close();
      return { success: true, apiRequests };

    } catch (error) {
      await page.close();
      return { success: false, error: error.message };
    }
  }

  /**
   * 模拟用户操作流程
   */
  async checkUserFlow(url, steps) {
    await this.init();
    const page = await this.browser.newPage();

    try {
      await page.goto(url, {
        waitUntil: 'networkidle0',
        timeout: this.options.timeout
      });

      const results = [];

      for (const step of steps) {
        try {
          const stepResult = await this.executeStep(page, step);
          results.push({
            step: step.name,
            success: true,
            ...stepResult
          });
        } catch (error) {
          results.push({
            step: step.name,
            success: false,
            error: error.message
          });
          break; // 某一步失败则停止
        }
      }

      await page.close();
      return { success: true, steps: results };

    } catch (error) {
      await page.close();
      return { success: false, error: error.message };
    }
  }

  /**
   * 执行单个步骤
   */
  async executeStep(page, step) {
    const { type, selector, value, waitFor } = step;

    switch (type) {
      case 'click':
        await page.click(selector);
        break;

      case 'type':
        await page.type(selector, value);
        break;

      case 'select':
        await page.select(selector, value);
        break;

      case 'wait':
        await page.waitForSelector(selector, { timeout: waitFor || 5000 });
        break;

      case 'screenshot':
        await page.screenshot({ path: value });
        break;

      default:
        throw new Error(`Unknown step type: ${type}`);
    }

    // 等待页面稳定
    await page.waitForTimeout(500);

    return { timestamp: Date.now() };
  }

  async close() {
    if (this.browser) {
      await this.browser.close();
      this.browser = null;
    }
  }
}

module.exports = HealthChecker;
```

### 4. 定时任务调度器

```javascript
// scheduler/monitor.js
const schedule = require('node-schedule');
const ScreenshotTool = require('../utils/screenshot');
const ImageComparator = require('../utils/imageCompare');
const HealthChecker = require('../utils/healthCheck');
const notifier = require('../utils/notifier');

class Monitor {
  constructor(config) {
    this.config = config;
    this.screenshot = new ScreenshotTool();
    this.comparator = new ImageComparator();
    this.healthChecker = new HealthChecker();
  }

  /**
   * 启动监控
   */
  start() {
    // 每小时执行一次视觉回归测试
    schedule.scheduleJob('0 * * * *', async () => {
      await this.runVisualTest();
    });

    // 每5分钟执行一次健康检查
    schedule.scheduleJob('*/5 * * * *', async () => {
      await this.runHealthCheck();
    });

    console.log('监控任务已启动');
  }

  /**
   * 视觉回归测试
   */
  async runVisualTest() {
    console.log('开始执行视觉回归测试...');

    const results = [];

    for (const page of this.config.pages) {
      try {
        // 生成当前截图
        const currentPath = `./screenshots/current/${page.name}.png`;
        await this.screenshot.capture(page.url, {
          output: currentPath,
          ...page.screenshotOptions
        });

        // 与基准图对比
        const baselinePath = `./screenshots/baseline/${page.name}.png`;

        if (fs.existsSync(baselinePath)) {
          const diffPath = `./screenshots/diff/${page.name}.png`;

          const compareResult = await this.comparator.compare(
            baselinePath,
            currentPath,
            diffPath
          );

          results.push({
            page: page.name,
            url: page.url,
            ...compareResult
          });

          // 如果差异较大，发送告警
          if (!compareResult.passed) {
            await notifier.send({
              type: 'visual_regression',
              title: `视觉回归测试失败: ${page.name}`,
              content: `差异比例: ${compareResult.diffPercentage}%`,
              images: [diffPath],
              url: page.url
            });
          }
        } else {
          console.log(`基准图不存在，已创建: ${baselinePath}`);
          fs.copyFileSync(currentPath, baselinePath);
        }

      } catch (error) {
        console.error(`视觉测试失败 [${page.name}]:`, error);
        results.push({
          page: page.name,
          success: false,
          error: error.message
        });
      }
    }

    // 生成报告
    this.generateReport('visual', results);
  }

  /**
   * 健康检查
   */
  async runHealthCheck() {
    console.log('开始执行健康检查...');

    const results = [];

    for (const check of this.config.healthChecks) {
      try {
        let result;

        switch (check.type) {
          case 'accessibility':
            result = await this.healthChecker.checkAccessibility(check.url);
            break;

          case 'elements':
            result = await this.healthChecker.checkElements(
              check.url,
              check.selectors
            );
            break;

          case 'api':
            result = await this.healthChecker.checkAPI(
              check.url,
              new RegExp(check.apiPattern)
            );
            break;

          case 'userFlow':
            result = await this.healthChecker.checkUserFlow(
              check.url,
              check.steps
            );
            break;
        }

        results.push({
          name: check.name,
          type: check.type,
          ...result
        });

        // 检查失败，发送告警
        if (!result.success) {
          await notifier.send({
            type: 'health_check',
            title: `健康检查失败: ${check.name}`,
            content: result.error || '检查失败',
            url: check.url
          });
        }

      } catch (error) {
        console.error(`健康检查失败 [${check.name}]:`, error);
        results.push({
          name: check.name,
          success: false,
          error: error.message
        });
      }
    }

    // 生成报告
    this.generateReport('health', results);
  }

  /**
   * 生成报告
   */
  generateReport(type, results) {
    const timestamp = new Date().toISOString();
    const reportPath = `./reports/${type}_${timestamp}.json`;

    fs.writeFileSync(reportPath, JSON.stringify({
      type,
      timestamp,
      results,
      summary: {
        total: results.length,
        success: results.filter(r => r.success !== false).length,
        failed: results.filter(r => r.success === false).length
      }
    }, null, 2));

    console.log(`报告已生成: ${reportPath}`);
  }

  /**
   * 停止监控
   */
  async stop() {
    await this.screenshot.close();
    await this.healthChecker.close();
    console.log('监控任务已停止');
  }
}

module.exports = Monitor;
```

### 5. 告警通知工具

```javascript
// utils/notifier.js
const axios = require('axios');

class Notifier {
  constructor(config = {}) {
    this.config = {
      webhook: process.env.WEBHOOK_URL,
      email: process.env.EMAIL_RECIPIENTS,
      ...config
    };
  }

  /**
   * 发送通知
   */
  async send(alert) {
    const { type, title, content, images, url } = alert;

    // 发送企业微信通知
    if (this.config.webhook) {
      await this.sendWebhook(title, content, url, images);
    }

    // 发送邮件通知
    if (this.config.email) {
      await this.sendEmail(title, content, url, images);
    }
  }

  /**
   * 企业微信webhook通知
   */
  async sendWebhook(title, content, url, images) {
    try {
      const message = {
        msgtype: 'markdown',
        markdown: {
          content: `### ${title}\n\n${content}\n\n[查看详情](${url})`
        }
      };

      await axios.post(this.config.webhook, message);
      console.log('Webhook通知已发送');
    } catch (error) {
      console.error('Webhook通知发送失败:', error);
    }
  }

  /**
   * 邮件通知
   */
  async sendEmail(title, content, url, images) {
    // 这里使用nodemailer或其他邮件服务
    console.log('邮件通知:', { title, content, url });
  }
}

module.exports = new Notifier();
```

### 6. 配置文件示例

```javascript
// config/monitor.config.js
module.exports = {
  // 视觉回归测试页面列表
  pages: [
    {
      name: 'home',
      url: 'https://example.com/home',
      screenshotOptions: {
        fullPage: true,
        delay: 2000
      }
    },
    {
      name: 'activity',
      url: 'https://example.com/activity/123',
      screenshotOptions: {
        fullPage: true,
        delay: 3000,
        beforeScreenshot: async (page) => {
          // 等待动画完成
          await page.waitForSelector('.animation-done');
        }
      }
    }
  ],

  // 健康检查配置
  healthChecks: [
    {
      name: '首页可访问性',
      type: 'accessibility',
      url: 'https://example.com/home'
    },
    {
      name: '首页关键元素',
      type: 'elements',
      url: 'https://example.com/home',
      selectors: {
        title: '.page-title',
        button: '.action-button',
        list: '.item-list'
      }
    },
    {
      name: '用户信息API',
      type: 'api',
      url: 'https://example.com/home',
      apiPattern: '/api/user/info'
    },
    {
      name: '登录流程',
      type: 'userFlow',
      url: 'https://example.com/login',
      steps: [
        { name: '输入用户名', type: 'type', selector: '#username', value: 'testuser' },
        { name: '输入密码', type: 'type', selector: '#password', value: 'testpass' },
        { name: '点击登录', type: 'click', selector: '.login-button' },
        { name: '等待跳转', type: 'wait', selector: '.user-info', waitFor: 5000 }
      ]
    }
  ]
};
```

### 7. 启动脚本

```javascript
// index.js
const Monitor = require('./scheduler/monitor');
const config = require('./config/monitor.config');

const monitor = new Monitor(config);

// 启动监控
monitor.start();

// 优雅退出
process.on('SIGINT', async () => {
  console.log('\n正在停止监控...');
  await monitor.stop();
  process.exit(0);
});
```

## 效果与总结

### 优化效果

**问题发现能力**
- 视觉问题发现率：从20%提升到95%
- 问题发现时间：从用户反馈（数小时）缩短到5分钟内
- 减少线上事故：从每月3-5次降低到每月0-1次

**测试效率**
- 回归测试时间：从2小时降低到10分钟
- 测试覆盖率：从30%提升到80%
- 人工测试工作量：减少70%

**业务价值**
- 用户投诉减少60%
- 业务指标异常及时发现
- 团队信心提升，发布更加从容

### 经验总结

1. **合理设置阈值**
   - 图片对比阈值不能太严格，避免误报
   - 不同页面可以设置不同的容差
   - 动态内容区域可以排除对比

2. **截图时机很重要**
   - 等待所有资源加载完成
   - 等待动画执行完成
   - 考虑异步渲染的内容

3. **告警策略要合理**
   - 避免告警风暴
   - 相同问题不重复告警
   - 区分严重程度

4. **性能优化**
   - 使用无头模式提高性能
   - 合理设置并发数量
   - 复用浏览器实例

5. **持续维护**
   - 定期更新基准图
   - 及时处理误报
   - 优化检查规则

### 注意事项

1. **资源消耗**
   - Puppeteer比较占用内存
   - 需要足够的服务器资源
   - 考虑使用Docker容器隔离

2. **网络依赖**
   - 测试环境需要稳定的网络
   - 考虑使用VPN或代理
   - 设置合理的超时时间

3. **环境一致性**
   - 保持测试环境和生产环境一致
   - 字体、系统设置可能影响渲染
   - 使用Docker保证环境一致

4. **安全性**
   - 不要在截图中包含敏感信息
   - webhook URL需要保密
   - 定期清理历史截图

### 未来优化方向

1. 引入AI识别异常（如OCR识别文字错误）
2. 支持移动端真机测试
3. 集成到CI/CD流程
4. 提供可视化的监控面板
5. 支持自动修复基准图（在人工确认后）
