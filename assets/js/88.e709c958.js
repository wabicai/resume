(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{364:function(a,s,e){"use strict";e.r(s);var t=e(14),r=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"原理篇-2-keep-alive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原理篇-2-keep-alive"}},[a._v("#")]),a._v(" 原理篇:2.keep-alive")]),a._v(" "),s("h2",{attrs:{id:"keep-alive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keep-alive"}},[a._v("#")]),a._v(" keep-alive")]),a._v(" "),s("blockquote",[s("p",[a._v("用处：由列表页面进入数据详情页面，再返回该列表页面，我们希望：列表页面可以保留用户的筛选（或选中）状态。总的来说，keep-alive 用于保存组件的渲染状态。\nkeep-alive 缓存机制便是根据 LRU 策略来设置缓存组件新鲜度，将很久未访问的组件从缓存中删除。")])]),a._v(" "),s("p",[a._v("作用：")]),a._v(" "),s("ol",[s("li",[a._v("组件切换过程中将状态保留在内存中，防止重复渲染 DOM。")]),a._v(" "),s("li",[a._v("避免反复渲染影响页面性能，减少接口请求")]),a._v(" "),s("li",[a._v("进行路由缓存和组件缓存")])]),a._v(" "),s("h3",{attrs:{id:"为什么-keep-alive-标签不会生成真正-dom-节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么-keep-alive-标签不会生成真正-dom-节点"}},[a._v("#")]),a._v(" 为什么 keep-alive 标签不会生成真正 Dom 节点")]),a._v(" "),s("ol",[s("li",[a._v("abstract 属性（抽象节点），根据这个属性跳过生成该实例")])]),a._v(" "),s("h3",{attrs:{id:"使用-lru-机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-lru-机制"}},[a._v("#")]),a._v(" 使用 LRU 机制")]),a._v(" "),s("h3",{attrs:{id:"activated"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#activated"}},[a._v("#")]),a._v(" Activated")]),a._v(" "),s("blockquote",[s("p",[a._v("keep-alive 的模式下多了 activated 这个生命周期函数, keep-alive 的声明周期执行:")])]),a._v(" "),s("ul",[s("li",[s("p",[a._v("页面第一次进入")]),a._v(" "),s("ul",[s("li",[a._v("created-> mounted-> activated，当再次进入（前进或者后退）时，只触发 activated。")])])]),a._v(" "),s("li",[s("p",[a._v("事件挂载的方法等，只执行一次的放在 mounted 中；组件每次进去执行的方法放在 activated 中。")])])]),a._v(" "),s("div",{staticClass:"language-mermaid line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-mermaid"}},[s("code",[a._v("   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("graph")]),a._v(" LR\n      activated "),s("span",{pre:!0,attrs:{class:"token arrow operator"}},[a._v("--\x3e")]),a._v(" 获取第一个子元素"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n      获取第一个子元素 "),s("span",{pre:!0,attrs:{class:"token arrow operator"}},[a._v("--\x3e")]),a._v(" id"),s("span",{pre:!0,attrs:{class:"token text string"}},[a._v("{是否符合缓存条件}")]),a._v("\n      id"),s("span",{pre:!0,attrs:{class:"token text string"}},[a._v("{是否符合缓存条件}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token inter-arrow-label"}},[s("span",{pre:!0,attrs:{class:"token arrow-head arrow operator"}},[a._v("--")]),s("span",{pre:!0,attrs:{class:"token label property"}},[a._v("符合")]),s("span",{pre:!0,attrs:{class:"token arrow operator"}},[a._v("--\x3e")])]),a._v(" LRU策略\n      LRU策略 "),s("span",{pre:!0,attrs:{class:"token arrow operator"}},[a._v("--\x3e")]),a._v(" 渲染实例\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("h3",{attrs:{id:"基于-keep-alive-实现的缓存策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于-keep-alive-实现的缓存策略"}},[a._v("#")]),a._v(" 基于 keep-alive 实现的缓存策略")]),a._v(" "),s("p",[s("strong",[a._v("方案一")]),a._v("：整个页面缓存")]),a._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" keep "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" alive "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("\n    router "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" view v "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"$route.meta.keepAlive"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("keep"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("alive"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("\nrouter "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" view v "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"!$route.meta.keepAlive"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("p",[s("strong",[a._v("方案二")]),a._v("：动态组件缓存")]),a._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" keep "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" alive"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" include "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"$store.state.keepAlive.cachedView"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("\n    cacheView "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("cacheView"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("keep"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("alive"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);