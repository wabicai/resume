const fs = require('fs');
const path = require('path');

// 需要填充的空文档列表
const emptyDocs = [
  '/Users/caikaisheng/Documents/Own/interest-arbitrage/resume/docs/后端/数据库/3.mysql的性能优化.md',
  '/Users/caikaisheng/Documents/Own/interest-arbitrage/resume/docs/计算机基础/工具与规范/创建型-建造者(bulider)模式.md',
  '/Users/caikaisheng/Documents/Own/interest-arbitrage/resume/docs/项目实战/前端实践/优化-H5webp方案.md',
  '/Users/caikaisheng/Documents/Own/interest-arbitrage/resume/docs/项目实战/前端实践/优化-使用IndexDB解决Svga重复加载问题.md',
  '/Users/caikaisheng/Documents/Own/interest-arbitrage/resume/docs/项目实战/前端实践/告警-puppeteer截图对比,业务巡检.md',
  '/Users/caikaisheng/Documents/Own/interest-arbitrage/resume/docs/项目实战/前端实践/开发-https兼容.md',
  '/Users/caikaisheng/Documents/Own/interest-arbitrage/resume/docs/项目实战/前端实践/开发-低代码平台中的属性值处理函数.md',
  '/Users/caikaisheng/Documents/Own/interest-arbitrage/resume/docs/项目实战/前端实践/开发-使用vue.directive指令实现功能简化.md',
  '/Users/caikaisheng/Documents/Own/interest-arbitrage/resume/docs/项目实战/前端实践/开发-移动端机型适配方案.md',
  '/Users/caikaisheng/Documents/Own/interest-arbitrage/resume/docs/项目实战/前端实践/开发-通过HOC封装重复代码逻辑.md',
  '/Users/caikaisheng/Documents/Own/interest-arbitrage/resume/docs/项目实战/前端实践/页面提速-puppeteer预渲染.md',
];

// 从文件名提取标题
function getTitleFromFilename(filePath) {
  const filename = path.basename(filePath, '.md');
  // 移除数字前缀
  return filename.replace(/^\d+[\.\-]?/, '');
}

// 为空文档填充基本内容
emptyDocs.forEach(filePath => {
  const title = getTitleFromFilename(filePath);

  const content = `# ${title}

## 背景

TODO：待补充...

## 问题分析

TODO：待补充...

## 解决方案

TODO：待补充...

## 总结

TODO：待补充...
`;

  try {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`✅ 已填充: ${path.basename(filePath)}`);
  } catch (err) {
    console.error(`❌ 填充失败: ${path.basename(filePath)}`, err.message);
  }
});

console.log('\n✨ 全部完成！');
