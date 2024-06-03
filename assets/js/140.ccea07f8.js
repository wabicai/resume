(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{435:function(s,a,t){"use strict";t.r(a);var h=t(10),e=Object(h.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_8-webpack-hash-值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-webpack-hash-值"}},[s._v("#")]),s._v(" 8.Webpack：hash 值")]),s._v(" "),a("h2",{attrs:{id:"分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分类"}},[s._v("#")]),s._v(" 分类")]),s._v(" "),a("ol",[a("li",[s._v("fullhash")]),s._v(" "),a("li",[s._v("chunkhash")]),s._v(" "),a("li",[s._v("contenthash")])]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("fullhash")]),s._v("：所有构建产物均使用相同的 hash。这意味着修改任何一个文件，所有文件的 hash 值都将会被改变")]),s._v(" "),a("li",[a("strong",[s._v("chunkhash")]),s._v("：同一 chunk 下的文件使用相同的 hash。修改在同一个 chunk 中的文件，同属该 chunk 的所有文件 hash 值都会改变")]),s._v(" "),a("li",[a("strong",[s._v("contenthash")]),s._v("：不同的文件使用不同的 hash。每个文件都会根据自己的文件内容生成 hash 值，互不干扰。\n"),a("blockquote",[a("p",[s._v("一个 chunk 可能包含 js, js.map, css, 字体文件 等多个文件")])])])]),s._v(" "),a("h2",{attrs:{id:"注意点-moduleid-变化也会改变-chunkhash-值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意点-moduleid-变化也会改变-chunkhash-值"}},[s._v("#")]),s._v(" 注意点：moduleId 变化也会改变 chunkhash 值")]),s._v(" "),a("ol",[a("li",[s._v("在文件"),a("code",[s._v("add.js")]),s._v("前面随便添加"),a("code",[s._v("pre.js")]),s._v("文件")]),s._v(" "),a("li",[s._v("在打包过程，"),a("code",[s._v("add.js")]),s._v("的 moduleId 变化了，导致 chunkhash 值也跟着改变")])]),s._v(" "),a("h3",{attrs:{id:"解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" 解决方案")]),s._v(" "),a("ul",[a("li",[s._v("指定 chunkId")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("optimization")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("moduleIds")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deterministic'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("chunkIds")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deterministic'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"如何配合缓存策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何配合缓存策略"}},[s._v("#")]),s._v(" 如何配合缓存策略")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("contenthash")]),s._v(" 做文件级别的。按理的话，用他是最好的")])]),s._v(" "),a("h3",{attrs:{id:"问题一-index-js引入a-css-js-和-css-文件分别用什么-hash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题一-index-js引入a-css-js-和-css-文件分别用什么-hash"}},[s._v("#")]),s._v(" 问题一："),a("code",[s._v("index.js")]),s._v("引入"),a("code",[s._v("a.css")]),s._v("，js 和 css 文件分别用什么 hash")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("index.js")]),s._v("和"),a("code",[s._v("a.css")]),s._v("用同一个 chunkhash，因为 chunkhash 根据入口的依赖决定")]),s._v(" "),a("li",[s._v("这样就存在一个问题："),a("code",[s._v("index.js")]),s._v("变化，chunkhash 就会变化。如果"),a("code",[s._v("a.css")]),s._v("用 chunkhash 那就会导致缓存失效。")]),s._v(" "),a("li",[s._v("所以："),a("strong",[s._v("css 用 contenthash，js 用 chunkhash 或者 contenthash 都行")])])]),s._v(" "),a("h3",{attrs:{id:"问题二-静态资源的-hash-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题二-静态资源的-hash-是什么"}},[s._v("#")]),s._v(" 问题二：静态资源的 hash 是什么？")]),s._v(" "),a("ol",[a("li",[s._v("静态资源，如字体、图片的 hash。不是 webpack 构建的 hash。")]),s._v(" "),a("li",[s._v("是对应 file-loader，通过文件内容计算出来的。")])]),s._v(" "),a("h3",{attrs:{id:"问题三-什么资源用-chunkhash-合适"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题三-什么资源用-chunkhash-合适"}},[s._v("#")]),s._v(" 问题三：什么资源用 chunkhash 合适？")]),s._v(" "),a("ol",[a("li",[s._v("把公共依赖库和程序入口文件隔离，并单独打包配置 chunkhash。")])]),s._v(" "),a("h3",{attrs:{id:"协商缓存和强缓存的使用-并且怎么进行资源刷新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存和强缓存的使用-并且怎么进行资源刷新"}},[s._v("#")]),s._v(" 协商缓存和强缓存的使用，并且怎么进行资源刷新？")]),s._v(" "),a("h4",{attrs:{id:"强缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[s._v("#")]),s._v(" 强缓存：")]),s._v(" "),a("ol",[a("li",[s._v("静态资源")]),s._v(" "),a("li",[s._v("第三方库、框架、公共代码库等不怎么变化的资源")])]),s._v(" "),a("h4",{attrs:{id:"协商缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[s._v("#")]),s._v(" 协商缓存")]),s._v(" "),a("ol",[a("li",[s._v("HTML：可能包含动态内容，比如引入 js 文件")]),s._v(" "),a("li",[s._v("CSS 和 JS：经常变化的内容。（不过对于业务场景，目前常用的方式：入口 html 设置协商缓存，其他资源全部走强缓存）")])]),s._v(" "),a("h4",{attrs:{id:"怎么做资源刷新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#怎么做资源刷新"}},[s._v("#")]),s._v(" 怎么做资源刷新？")]),s._v(" "),a("ol",[a("li",[s._v("通过在 URL 后面添加查询参数 V=xxx （可以是时间戳）刷新。（这里需要 nginx 服务配置对应缓存策略：no-cache）")]),s._v(" "),a("li",[s._v("修改文件名（如 hash 值）")]),s._v(" "),a("li",[s._v("前端在文件内使用 build 后，生成一个 hash 值，在发送请求的时候携带过去。后端校验 header。（适用于用户正在使用页面的情况）")])])])}),[],!1,null,null,null);a.default=e.exports}}]);