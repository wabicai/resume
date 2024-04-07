(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{279:function(e,a,v){e.exports=v.p+"assets/img/webpack.636af25f.png"},280:function(e,a,v){e.exports=v.p+"assets/img/vite.05db33a8.png"},305:function(e,a,v){"use strict";v.r(a);var t=v(10),_=function(e){e.options.__data__block__={mermaid_382ee145:"  sequenceDiagram\n  modules ->> webpack: 将所有模块打包\n  webpack ->> bundle: 生成bundle\n  bundle ->> devServer: 直接请求\n  devServer --\x3e> webpack: 直接返回结果\n",mermaid_382ee14d:"sequenceDiagram\nvite ->> devServer: 直接启动服务器\n页面 ->> devServer: 请求模块\ndevServer ->> module: 根据需要的模块，按需向module发送请求\nmodule --\x3e> 页面: 模块编译，返回结果\n"}},i=Object(t.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_1-webpack-和-vite-原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-webpack-和-vite-原理"}},[e._v("#")]),e._v(" 1.Webpack 和 vite 原理")]),e._v(" "),a("ul",[a("li",[e._v("wepack\n"),a("img",{attrs:{src:v(279),alt:""}})])]),e._v(" "),a("Mermaid",{attrs:{id:"mermaid_382ee145",graph:e.$dataBlock.mermaid_382ee145}}),a("ul",[a("li",[e._v("vite\n"),a("img",{attrs:{src:v(280),alt:""}})])]),e._v(" "),a("Mermaid",{attrs:{id:"mermaid_382ee14d",graph:e.$dataBlock.mermaid_382ee14d}}),a("h2",{attrs:{id:"打包原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包原理"}},[e._v("#")]),e._v(" 打包原理")]),e._v(" "),a("h3",{attrs:{id:"vite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vite"}},[e._v("#")]),e._v(" vite:")]),e._v(" "),a("ol",[a("li",[e._v("基于浏览器器原生 ES Module")]),e._v(" "),a("li",[e._v("所有的内容都要转成 ESM")]),e._v(" "),a("li",[e._v("利用了浏览器器静态解析 import，服务器端按需编译返回。")]),e._v(" "),a("li",[e._v("打包基于 rollup + esbuild ，由 go 语言编写，比 js 写的 webpack 快 100 倍")]),e._v(" "),a("li",[e._v("不用编译，解析过程交给浏览器执行。(即浏览器通过 ESM 请求.vue文件，然后 vite 服务器在 response 返回 js 代码)")]),e._v(" "),a("li",[e._v("在预编译阶段，会把模块下载到"),a("code",[e._v("/node_modules/.vite/")]),e._v("文件夹，然后通过相关路径引用")])]),e._v(" "),a("h3",{attrs:{id:"webpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack"}},[e._v("#")]),e._v(" webpack")]),e._v(" "),a("ol",[a("li",[e._v("要把所有的模块都打成 bundle")]),e._v(" "),a("li",[e._v("所有文件要转成 AMD 的 requireJS")]),e._v(" "),a("li",[e._v("会引入没用到的文件")])]),e._v(" "),a("h2",{attrs:{id:"优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优缺点"}},[e._v("#")]),e._v(" 优缺点")]),e._v(" "),a("p",[e._v("vite")]),e._v(" "),a("ul",[a("li",[e._v("优点\n"),a("ol",[a("li",[e._v("开发环境，无需打包，快速冷启动")]),e._v(" "),a("li",[e._v("无需分析模块依赖，编译代码。")]),e._v(" "),a("li",[e._v("按需加载，不用等整个程序启动")]),e._v(" "),a("li",[e._v("vite 基于 go 语言，纳秒级别速度")]),e._v(" "),a("li",[e._v("轻量快速的热重载（HMR），模块改变只需要重新请求该模块即可。而不是像 webpack 一样重新编译该模块的所有依赖")]),e._v(" "),a("li",[e._v("会有预编译阶段，类似 lodash 400 多个模块，如果不走预编译，那网页会特别卡。预编译之后，就只有一个模块了。")])])]),e._v(" "),a("li",[e._v("缺点\n"),a("ol",[a("li",[e._v("非现代浏览器不能运行，即浏览器要支持 ES Module 语法")]),e._v(" "),a("li",[e._v("不能识别 CommonJS 语法")]),e._v(" "),a("li",[e._v("生产环境 esbuild 构建对于 css 和代码分割不够友好")]),e._v(" "),a("li",[e._v("生态、插件没有 webpack 丰富")]),e._v(" "),a("li",[e._v("直接扔给浏览器，引入的时候，首次加载比较慢")])])])]),e._v(" "),a("h2",{attrs:{id:"webpack-构建流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-构建流程"}},[e._v("#")]),e._v(" Webpack 构建流程")]),e._v(" "),a("ol",[a("li",[e._v("初始化：启动构建，读取与合并配置参数，加载 Plugin，实例化 Compiler")]),e._v(" "),a("li",[e._v("编译：从 Entry 出发，针对每个 Module 串行调用对应的 Loader 去翻译文件的内容，再找到该 Module 依赖的 Module，递归地进行编译处理")]),e._v(" "),a("li",[e._v("输出：将编译后的 Module 组合成 Chunk，将 Chunk 转换成文件，输出到文件系统中")])]),e._v(" "),a("h2",{attrs:{id:"热更新的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#热更新的区别"}},[e._v("#")]),e._v(" 热更新的区别")]),e._v(" "),a("h3",{attrs:{id:"webpack-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-2"}},[e._v("#")]),e._v(" webpack")]),e._v(" "),a("ol",[a("li",[e._v("先编译，在启动服务")]),e._v(" "),a("li",[e._v("通过 webpack-dev-server 插件实现")]),e._v(" "),a("li",[e._v("通过 socket 长链接服务，监听树形结构的依赖表。表示每个文件的依赖项。通过 文件的哈希值的变化，主动向网页推送请求。")])]),e._v(" "),a("h3",{attrs:{id:"vite-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vite-2"}},[e._v("#")]),e._v(" vite")]),e._v(" "),a("ol",[a("li",[e._v("先启动服务，通过网页请求的时候，才去编译")]),e._v(" "),a("li",[e._v("热更新的时候，让浏览器重新去发起请求。（即他是被动的）")])])],1)}),[],!1,null,null,null);"function"==typeof _&&_(i);a.default=i.exports}}]);