const fs = require('fs');
const path = require('path');

// 递归处理当前目录下的所有文件和文件夹
function traverseFolder(folder) {
    fs.readdir(folder, (err, files) => {
        if (err) {
            throw err;
        }
        files.forEach((file) => {
            const fullPath = path.join(folder, file);
            fs.stat(fullPath, (err, stats) => {
                if (err) {
                    throw err;
                }
                if (stats.isDirectory()) {
                    // 如果是文件夹，则递归处理
                    traverseFolder(fullPath);
                } else if (stats.isFile()) {
                    // 如果是文件，且文件名匹配 pattern，则修改文件名
                    const pattern = /^(\d+)、/;
                    if (pattern.test(file)) {
                        const oldPath = fullPath;
                        const newPath = path.join(folder, file.replace(pattern, '$1.'));
                        fs.rename(oldPath, newPath, (err) => {
                            if (err) {
                                throw err;
                            }
                            console.log(`${oldPath} -> ${newPath}`);
                        });
                    }
                }
            });
        });
    });
}

// 开始递归处理当前目录
traverseFolder('.');
