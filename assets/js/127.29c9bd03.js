(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{423:function(s,a,t){"use strict";t.r(a);var n=t(10),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_2-webpack-loader-和-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-webpack-loader-和-plugin"}},[s._v("#")]),s._v(" 2.Webpack：loader 和 plugin")]),s._v(" "),a("h2",{attrs:{id:"什么是-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-loader"}},[s._v("#")]),s._v(" 什么是 loader")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("loader")]),s._v(" 用于对模块的源代码进行转换，在 "),a("code",[s._v("import")]),s._v(' 或"加载"模块时预处理文件')]),s._v(" "),a("li",[s._v("因为 webpack 只认识 js，所以需要 loader 对其他文件进行预处理")]),s._v(" "),a("li",[s._v("比如将 css 文件中的")])]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v(".a font-size 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("转为")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"style"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("innerHTML "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('".a { font-size: 20px }"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"什么是-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-plugin"}},[s._v("#")]),s._v(" 什么是 plugin")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("plugin")]),s._v("赋予 webpack 各种灵活的功能，例如打包优化、资源管理、环境变量注入等，它们会运行在 "),a("code",[s._v("webpack")]),s._v(" 的不同阶段（钩子 / 生命周期），贯穿了"),a("code",[s._v("webpack")]),s._v("整个编译周期")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/gH31uF9VIibQfxicUfGuYySiax3Sziar4T44GWBj3RTd8grYvITric8r1E87ib7Heojz1rDkJaViaJ72oBTRKamo6oNNw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),s._v(" "),a("h2",{attrs:{id:"常见的-loader-和-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见的-loader-和-plugin"}},[s._v("#")]),s._v(" 常见的 loader 和 plugin")]),s._v(" "),a("p",[s._v("在页面开发过程中，我们经常性加载除了"),a("code",[s._v("js")]),s._v("文件以外的内容，这时候我们就需要配置响应的"),a("code",[s._v("loader")]),s._v("进行加载")]),s._v(" "),a("p",[s._v("常见的"),a("code",[s._v("loader")]),s._v("如下：")]),s._v(" "),a("ul",[a("li",[s._v("style-loader: 将 css 添加到 DOM 的内联样式标签 style 里")]),s._v(" "),a("li",[s._v("css-loader :允许将 css 文件通过 require 的方式引入，并返回 css 代码")]),s._v(" "),a("li",[s._v("less-loader: 处理 less")]),s._v(" "),a("li",[s._v("postcss-loader: 用 postcss 来处理 CSS，处理 CSS3 属性前缀，")]),s._v(" "),a("li",[s._v("file-loader: 分发文件到 output 目录并返回相对路径")]),s._v(" "),a("li",[s._v("url-loader: 和 file-loader 类似，但是当文件小于设定的 limit 时可以返回一个 Data Url")]),s._v(" "),a("li",[s._v("html-minify-loader: 压缩 HTML")]),s._v(" "),a("li",[s._v("babel-loader :用 babel 来转换 ES6 文件到 ES")]),s._v(" "),a("li",[s._v("i18n-loader: 国际化")]),s._v(" "),a("li",[s._v("cache-loader: 可以在一些性能开销较大的 Loader 之前添加，目的是将结果缓存到磁盘里")])]),s._v(" "),a("p",[s._v("常见的 plugin：")]),s._v(" "),a("ul",[a("li",[s._v("define-plugin：定义环境变量")]),s._v(" "),a("li",[s._v("webpack-bundle-analyzer: 可视化 Webpack 输出文件的体积 (业务组件、依赖第三方模块)")]),s._v(" "),a("li",[s._v("mini-css-extract-plugin: 分离样式文件，CSS 提取为独立文件，支持按需加载 (替代 extract-text-webpack-plugin)")]),s._v(" "),a("li",[s._v("webpack-dashboard：可以更友好的展示相关打包信息。")]),s._v(" "),a("li",[s._v("webpack-merge：提取公共配置，减少重复配置代码")]),s._v(" "),a("li",[s._v("speed-measure-webpack-plugin：简称 SMP，分析出 Webpack 打包过程中 Loader 和 Plugin 的耗时，有助于找到构建过程中的性能瓶颈。")]),s._v(" "),a("li",[s._v("size-plugin：监控资源体积变化，尽早发现问题")]),s._v(" "),a("li",[s._v("HotModuleReplacementPlugin：模块热替换")]),s._v(" "),a("li",[s._v("目的在于解决"),a("code",[s._v("loader")]),s._v(" 无法实现的其他事")])]),s._v(" "),a("h2",{attrs:{id:"loader-和-plugin-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loader-和-plugin-的区别"}},[s._v("#")]),s._v(" Loader 和 Plugin 的区别")]),s._v(" "),a("ul",[a("li",[s._v("Loader 本质就是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果。 因为 Webpack 只认识 JavaScript，所以 Loader 就成了翻译官。\n"),a("ul",[a("li",[s._v("对于"),a("code",[s._v("loader")]),s._v("，实质是一个转换器，将 A 文件进行编译形成 B 文件，操作的是文件，比如将"),a("code",[s._v("A.scss")]),s._v("或"),a("code",[s._v("A.less")]),s._v("转变为"),a("code",[s._v("B.css")]),s._v("，单纯的文件转换过程")])])]),s._v(" "),a("li",[s._v("在"),a("code",[s._v("Webpack")]),s._v(" 运行的生命周期中会广播出许多事件，"),a("code",[s._v("Plugin")]),s._v(" 可以监听这些事件，在合适的时机通过"),a("code",[s._v("Webpack")]),s._v("提供的 "),a("code",[s._v("API")]),s._v("改变输出结果")])]),s._v(" "),a("h2",{attrs:{id:"自定义-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义-loader"}},[s._v("#")]),s._v(" 自定义 loader")]),s._v(" "),a("h3",{attrs:{id:"同步-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同步-loader"}},[s._v("#")]),s._v(" 同步 loader")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sourceMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" meta")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1.")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// return content")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2.error, content, SourceMap, 是否是AST语法树")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// this.callback(null,content,sourceMap,abstractSyntaxTree)")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// return")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"异步-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步-loader"}},[s._v("#")]),s._v(" 异步 loader")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("exports")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("source")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 调用 this.async() API，告诉 webpack本次转换是异步的，loader 会在 callback 中返回结果")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" callback "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("async")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用 setTimeout 模拟异步过程")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" content "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"哈哈"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 通过 callback 返回执行异步后的结果")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"实战自定义-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实战自定义-loader"}},[s._v("#")]),s._v(" 实战自定义 loader")]),s._v(" "),a("ol",[a("li",[s._v("mini 版 style-loader")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("exports")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("source")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("const styleTag = document.createElement('style');\n        styleTag.innerHTML = ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("source"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v(";\n        document.head.appendChild(styleTag);\n    ")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("mini 版 css-loader")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("exports")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("source")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"自定义-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义-plugin"}},[s._v("#")]),s._v(" 自定义 plugin")]),s._v(" "),a("h2",{attrs:{id:"plugin-能做-loader-不能做的事情"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin-能做-loader-不能做的事情"}},[s._v("#")]),s._v(" plugin 能做，loader 不能做的事情")]),s._v(" "),a("ol",[a("li",[s._v("代码压缩、文件拆分、Tree Shaking、清理旧文件、生成统计报告、")])]),s._v(" "),a("h2",{attrs:{id:"loader-能做-plugin-不能做的事情"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loader-能做-plugin-不能做的事情"}},[s._v("#")]),s._v(" loader 能做，plugin 不能做的事情")]),s._v(" "),a("h3",{attrs:{id:"babel-loader-es6-转-es5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel-loader-es6-转-es5"}},[s._v("#")]),s._v(" babel-loader：ES6 转 ES5")]),s._v(" "),a("p",[s._v("这是一个文件级别的操作，需要在每个.js 文件被加载时进行。Plugin 在这种情况下无法工作，因为它们操作的是整个编译过程，而不是单个文件。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("module")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("rules")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.js$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("exclude")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("node_modules")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("loader")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"babel-loader"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("options")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("presets")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@babel/preset-env"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h2",{attrs:{id:"plugin-和-loader-都能做的事情"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin-和-loader-都能做的事情"}},[s._v("#")]),s._v(" plugin 和 loader 都能做的事情")]),s._v(" "),a("h2",{attrs:{id:"执行顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行顺序"}},[s._v("#")]),s._v(" 执行顺序")]),s._v(" "),a("ul",[a("li",[s._v("loader：从右到左，从下到上，先于 plugin 执行")]),s._v(" "),a("li",[s._v("plugin：在 loader 之后，并且是事件驱动的")])])])}),[],!1,null,null,null);a.default=e.exports}}]);