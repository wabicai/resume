(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{375:function(l,i,e){"use strict";e.r(i);var n=e(10),a=Object(n.a)({},(function(){var l=this,i=l._self._c;return i("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[i("h1",{attrs:{id:"_10-怎么提高-webpack-编译速度"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_10-怎么提高-webpack-编译速度"}},[l._v("#")]),l._v(" 10.怎么提高 Webpack 编译速度")]),l._v(" "),i("p",[l._v("https://juejin.cn/post/6844904094281236487#heading-9")]),l._v(" "),i("ol",[i("li",[l._v("多进程/多实例构建：HappyPack(不维护了)、thread-loader")]),l._v(" "),i("li",[l._v("压缩代码\n"),i("ol",[i("li",[l._v("多进程并行压缩\n"),i("ul",[i("li",[l._v("webpack-paralle-uglify-plugin")]),l._v(" "),i("li",[l._v("uglifyjs-webpack-plugin 开启 parallel 参数 (不支持 ES6)")]),l._v(" "),i("li",[l._v("terser-webpack-plugin 开启 parallel 参数")])])]),l._v(" "),i("li",[l._v("通过 mini-css-extract-plugin 提取 Chunk 中的 CSS 代码到单独文件，通过 css-loader 的 minimize 选项开启 cssnano 压缩 CSS。")])])]),l._v(" "),i("li",[l._v("图片压缩\n"),i("ol",[i("li",[l._v("image-webpack-loader")])])]),l._v(" "),i("li",[l._v("Tree shaking\n"),i("ol",[i("li",[l._v("树摇，检测没有用到的代码")]),l._v(" "),i("li",[l._v("使用 PurifyCSS(不在维护) 或者 uncss 去除无用 CSS 代码")]),l._v(" "),i("li",[l._v("purgecss-webpack-plugin 和 mini-css-extract-plugin 配合使用(建议)")])])]),l._v(" "),i("li",[l._v("充分利用缓存提升二次构建速度：\n"),i("ol",[i("li",[l._v("babel-loader 开启缓存")]),l._v(" "),i("li",[l._v("terser-webpack-plugin 开启缓存")])])]),l._v(" "),i("li",[l._v("DLL\n"),i("ol",[i("li",[l._v("使用 DllPlugin 进行分包，使用 DllReferencePlugin(索引链接) 对 manifest.json 引用，让一些基本不会改动的代码先打包成静态资源，避免反复编译浪费时")]),l._v(" "),i("li",[l._v("HashedModuleIdsPlugin 可以解决模块数字 id 问题")])])]),l._v(" "),i("li",[l._v("Scope hoisting: 将代码放在一个函数作用域，减低开阔函数作用域带来的内存消耗")]),l._v(" "),i("li")])])}),[],!1,null,null,null);i.default=a.exports}}]);