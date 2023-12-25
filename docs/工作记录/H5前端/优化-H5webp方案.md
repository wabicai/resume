# 优化-H5webp 方案

## 背景

运营活动涉及到的图片比较多，目前图片格式是 png，整体上文件 size 比较大，影响加载体验和用户流量。
目前图片格式大部分是使用 png、jpg、jpeg，文件体积较大、webp 是 google 推出的新的图片格式，具有更好的压缩算法，目前终端支持率超过 90%。

## 收益

1. 图片资源的流量会大幅度下降；
2. 图片加载更快。
   方案
   目前 webp 的兼容性并不是 100% 的兼容，大概是 90%+，可以使用降级的方案，支持 webp 终端使用 webp，不支持的降级使用 png 图片。
   Banner 活动
   Banner 活动加载方式比较特殊，客户端预先拉取 zip 到用户手机。切换 webp 的意义不大，除非能保证目前的客户端机型全部兼容，将 png 完全切换的 webp。否则需要在 zip 包中打包 2 份格式的图片（png 和 webp），得不偿失。

## H5 常规活动方案

常规活动都是走的线上，图片资源按需加载，完全可以使用 webp 兼容的方案，若终端不支持，则降级到 png。

## 涉及到的几个点：

1. 判断是否支持 webp，body 上面挂上特殊的 class， 比如 webp；
2. 工具将 png 装成 webp 格式，保留 png 的格式，发布 2 份图片格式（存储便宜，通过七牛云服务 png 转 webp）；
3. postcss 插件，将 css 中关于 background 的部分，自动修正；
   .selector {
   background: url(./img/bg.png) no-repeat;
   }
   .webp .selector {
   background: url(./img/bg.webp) no-repeat;
   }

4. 对于 url-loader 部分（图片 base 64 的），这个部分直接使用 png 的 base64；
   a. 再换成 webp 的 base64 内嵌到文件中，资源浪费；
   b. 也不能完整替换 webp 的 base64（删掉 png 的 base64），可能有兼容性的问题；
   c. postcss 插件处理 png 图片是，需要判断 url-loader 的 limit，超过 limit 的文件才处理；
   d. postcss 处理样式时，需要判断 webp 和 png 哪个格式的图片 size 更小，谁小用谁。

## 结论：

1. 超过 50 % 的图片存储格式变化后，有提升；
2. 40% + 的图片存储格式变化后，反而有微升；
3. 不能粗暴的将 png 替换 webp，可以在替换时，判断哪种格式的图片更小，用更小的格式图片；
4. 使用 3，优化后 size 114 K，降低 59%
   运维侧方案
   可选，不是必须的。
   也可以让运维小哥哥在 server 侧配置，跟进 HTTP 请求头中 accept 是否包含 image/webp，判断游览器是否支持 webp，然后返回 webp 的图片。存在的一些问题：
5. 并不是所有的 png 图片，server 上都有对应的 webp 图片；
6. 开发自己上传 webp 图片（构建处理）
7. 图片服务器自动处理；
   Origin Link: https://wepie.yuque.com/tcsdzz/wffq5k/yfrpyu
