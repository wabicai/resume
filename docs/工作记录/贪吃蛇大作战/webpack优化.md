1. splitChunks： dll（通用包）、
2. 使用 webp，webp-loader
3. file-loader、url-loader，小图片使用 base64 减少 http 请求
4. npm run build 的时候，不进行全量打包，只打包指定文件
5. 自动根据分支选择打包、运行的环境
