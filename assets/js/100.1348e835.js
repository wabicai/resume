(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{290:function(a,e,t){"use strict";t.r(e);var s=t(10),r=function(a){a.options.__data__block__={mermaid_382ee200:"   graph LR\n      activated --\x3e 获取第一个子元素;\n      获取第一个子元素 --\x3e id{是否符合缓存条件}\n      id{是否符合缓存条件} --符合--\x3e LRU策略\n      LRU策略 --\x3e 渲染实例\n\n"}},n=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"原理篇-2-keep-alive"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原理篇-2-keep-alive"}},[a._v("#")]),a._v(" 原理篇:2.keep-alive")]),a._v(" "),e("h2",{attrs:{id:"keep-alive"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keep-alive"}},[a._v("#")]),a._v(" keep-alive")]),a._v(" "),e("blockquote",[e("p",[a._v("用处：由列表页面进入数据详情页面，再返回该列表页面，我们希望：列表页面可以保留用户的筛选（或选中）状态。总的来说，keep-alive 用于保存组件的渲染状态。\nkeep-alive 缓存机制便是根据 LRU 策略来设置缓存组件新鲜度，将很久未访问的组件从缓存中删除。")])]),a._v(" "),e("p",[a._v("作用：")]),a._v(" "),e("ol",[e("li",[a._v("组件切换过程中将状态保留在内存中，防止重复渲染 DOM。")]),a._v(" "),e("li",[a._v("避免反复渲染影响页面性能，减少接口请求")]),a._v(" "),e("li",[a._v("进行路由缓存和组件缓存")])]),a._v(" "),e("h3",{attrs:{id:"为什么-keep-alive-标签不会生成真正-dom-节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么-keep-alive-标签不会生成真正-dom-节点"}},[a._v("#")]),a._v(" 为什么 keep-alive 标签不会生成真正 Dom 节点")]),a._v(" "),e("ol",[e("li",[a._v("abstract 属性（抽象节点），根据这个属性跳过生成该实例")])]),a._v(" "),e("h3",{attrs:{id:"使用-lru-机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-lru-机制"}},[a._v("#")]),a._v(" 使用 LRU 机制")]),a._v(" "),e("h3",{attrs:{id:"activated"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#activated"}},[a._v("#")]),a._v(" Activated")]),a._v(" "),e("blockquote",[e("p",[a._v("keep-alive 的模式下多了 activated 这个生命周期函数, keep-alive 的声明周期执行:")])]),a._v(" "),e("ul",[e("li",[e("p",[a._v("页面第一次进入")]),a._v(" "),e("ul",[e("li",[a._v("created-> mounted-> activated，当再次进入（前进或者后退）时，只触发 activated。")])])]),a._v(" "),e("li",[e("p",[a._v("事件挂载的方法等，只执行一次的放在 mounted 中；组件每次进去执行的方法放在 activated 中。")])])]),a._v(" "),e("Mermaid",{attrs:{id:"mermaid_382ee200",graph:a.$dataBlock.mermaid_382ee200}}),e("h3",{attrs:{id:"基于-keep-alive-实现的缓存策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基于-keep-alive-实现的缓存策略"}},[a._v("#")]),a._v(" 基于 keep-alive 实现的缓存策略")]),a._v(" "),e("p",[e("strong",[a._v("方案一")]),a._v("：整个页面缓存")]),a._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" keep "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" alive "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("\n    router "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" view v "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"$route.meta.keepAlive"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("keep"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("alive"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("\nrouter "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" view v "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"!$route.meta.keepAlive"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br")])]),e("p",[e("strong",[a._v("方案二")]),a._v("：动态组件缓存")]),a._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" keep "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" alive"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" include "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"$store.state.keepAlive.cachedView"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("\n    cacheView "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("cacheView"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("keep"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("alive"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])])],1)}),[],!1,null,null,null);"function"==typeof r&&r(n);e.default=n.exports}}]);