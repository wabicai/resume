const fs = require('fs');
const path = require('path');

// 递归查找所有 markdown 文件
function findMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      if (!file.startsWith('.')) {
        findMarkdownFiles(filePath, fileList);
      }
    } else if (file.endsWith('.md')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// 检查文档
function checkDocument(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  // 检查是否为空或只有 TODO
  if (!content.trim() || content.trim() === 'TODO' || content.trim() === '# TODO') {
    return { type: 'empty', filePath };
  }

  // 跳过前置 frontmatter
  let startIndex = 0;
  if (lines[0] === '---') {
    for (let i = 1; i < lines.length; i++) {
      if (lines[i] === '---') {
        startIndex = i + 1;
        break;
      }
    }
  }

  // 找到第一个非空行
  let firstContentLine = '';
  for (let i = startIndex; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line) {
      firstContentLine = line;
      break;
    }
  }

  // 检查第一行是否是一级标题
  if (firstContentLine && !firstContentLine.startsWith('# ')) {
    return { type: 'wrong-heading', filePath, firstLine: firstContentLine };
  }

  return null;
}

// 主函数
const docsDir = path.join(__dirname, 'docs');
const mdFiles = findMarkdownFiles(docsDir);

const emptyDocs = [];
const wrongHeadingDocs = [];

mdFiles.forEach(file => {
  const result = checkDocument(file);
  if (result) {
    if (result.type === 'empty') {
      emptyDocs.push(result.filePath);
    } else if (result.type === 'wrong-heading') {
      wrongHeadingDocs.push(result);
    }
  }
});

console.log('=== 空文档或TODO文档 ===');
console.log(`共 ${emptyDocs.length} 个文件\n`);
emptyDocs.forEach(file => console.log(file));

console.log('\n\n=== 第一个标题不是 # 的文档 ===');
console.log(`共 ${wrongHeadingDocs.length} 个文件\n`);
wrongHeadingDocs.forEach(doc => {
  console.log(`${doc.filePath}`);
  console.log(`  首行: ${doc.firstLine}`);
});
