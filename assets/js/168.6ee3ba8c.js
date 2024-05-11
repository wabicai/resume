(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{460:function(t,_,v){"use strict";v.r(_);var e=v(10),a=Object(e.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"_1-渲染进程中的渲染机制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-渲染进程中的渲染机制"}},[t._v("#")]),t._v(" 1.渲染进程中的渲染机制")]),t._v(" "),_("p",[t._v("选自：\n"),_("a",{attrs:{href:"https://www.jianshu.com/p/05eb1b17b298",target:"_blank",rel:"noopener noreferrer"}},[t._v("简述浏览器渲染机制"),_("OutboundLink")],1),t._v(" "),_("a",{attrs:{href:"https://github.com/FrankKai/FrankKai.github.io/issues/195",target:"_blank",rel:"noopener noreferrer"}},[t._v("渲染性能优化之渲染的 5 个阶段"),_("OutboundLink")],1)]),t._v(" "),_("p",[t._v("@[TOC]")]),t._v(" "),_("h2",{attrs:{id:"渲染流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#渲染流程"}},[t._v("#")]),t._v(" 渲染流程：")]),t._v(" "),_("ol",[_("li",[t._v("构建 DOM：主线程根据 HTML 解析构建 DOM（HTML Standard）,请求二级资源：主线程按序逐个请求图像、CSS、JS 等外部资源，资源请求交由网络进程处理")]),t._v(" "),_("li",[t._v("计算样式（Render Tree）：主线程解析 CSS 获取每一个节点的最终计算样式，可以在 DevTools 的 computed 中看到。")]),t._v(" "),_("li",[t._v("布局（Layout Tree）：主线程根据 DOM 和计算样式构建布局树，布局树中包含每个可见节点的坐标信息和盒子大小")]),t._v(" "),_("li",[t._v("绘制（Paint）：Painting 指的是用像素去填充的阶段,元素上的每个可视部分都在这个阶段完成。绘制一般需要在多个界面进行，一般叫做 layer")]),t._v(" "),_("li",[t._v("合成(光栅化,Compositing)：多个 layer 按照层级合成在一起")])]),t._v(" "),_("h3",{attrs:{id:"合成的过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#合成的过程"}},[t._v("#")]),t._v(" 合成的过程：")]),t._v(" "),_("ol",[_("li",[t._v("分层：主线程遍历布局树创建图层树（Layer Tree），这一过程是把节点拆分到不同图层上，如果页面的某些部分应该独立为一个图层但没有被拆分，可以使用 will-change 属性来提示浏览器。")]),t._v(" "),_("li",[t._v("分块：主线程将图层树和绘制顺序交给合成器线程，合成器线程将每一个图层分块之后交给光栅线程")]),t._v(" "),_("li",[t._v("光栅化：光栅线程光栅化每个小块后会将它们存储在显存中。合成器线程收集块的信息（图块在内存中的位置，以及合成时绘制图块在页面中的位置），块的信息称为“绘制四边形”****")]),t._v(" "),_("li",[t._v("创建合成帧：合成器线程将需要显示的绘制四边形集合为合成帧，合成帧通过 IPC 提交给浏览器进程，合成器帧被发送到 GPU 然后在屏幕上显示。")])]),t._v(" "),_("h3",{attrs:{id:"浏览器三种处理改变的方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器三种处理改变的方式"}},[t._v("#")]),t._v(" 浏览器三种处理改变的方式")]),t._v(" "),_("ol",[_("li",[t._v("reflow: 重排, 如改变元素的 width.")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-images.githubusercontent.com/19262750/76677158-0d779880-6606-11ea-92bd-3dae24e29f3e.png",alt:"重排"}})]),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[t._v("repaint: 重绘, 如改变元素颜色")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-images.githubusercontent.com/19262750/76677378-8bd53a00-6608-11ea-9e92-b1c1a1811714.png",alt:"重绘"}})]),t._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[t._v("最理想状态: 直接合成, 如 animation, transform 或 scrolling")])]),t._v(" "),_("ul",[_("li",[t._v("怎么避免过多的重绘重排\n"),_("ul",[_("li",[t._v("dom 离线（使用 documentFragment、display:none）")]),t._v(" "),_("li",[t._v("多条 css 读写合并")]),t._v(" "),_("li",[t._v("避免 dom 节点位置移动")]),t._v(" "),_("li",[t._v("使用 requestAnimationFrame")]),t._v(" "),_("li",[t._v("使用 GPU 加速-will-change")]),t._v(" "),_("li",[t._v("使用 transform")]),t._v(" "),_("li",[t._v("使用 absolute 或者 fixed 脱离文档流")])])])]),t._v(" "),_("h2",{attrs:{id:"图层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#图层"}},[t._v("#")]),t._v(" 图层")]),t._v(" "),_("ol",[_("li",[t._v("渲染步骤中就提到了"),_("code",[t._v("composite")]),t._v("概念。")]),t._v(" "),_("li",[t._v("浏览器渲染的图层一般包含两大类："),_("code",[t._v("普通图层")]),t._v("以及"),_("code",[t._v("复合图层")])]),t._v(" "),_("li",[t._v("普通文档流内为一个复合图层，即使 absolute 脱离文档流，但是仍然属于同一个复合层")]),t._v(" "),_("li",[t._v("可以通过"),_("code",[t._v("硬件加速")]),t._v("的方式，声明一个"),_("code",[t._v("新的复合图层")]),t._v("，它会单独分配资源，不管这个复合图层中怎么变化，也不会影响"),_("code",[t._v("默认复合层")]),t._v("里的回流重绘）\n"),_("blockquote",[_("p",[_("strong",[t._v("GPU 中，各个复合图层是单独绘制的，所以互不影响")])])])])]),t._v(" "),_("h3",{attrs:{id:"如何变成复合图层-硬件加速"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如何变成复合图层-硬件加速"}},[t._v("#")]),t._v(" 如何变成复合图层（硬件加速）")]),t._v(" "),_("ol",[_("li",[_("code",[t._v("translate3d")]),t._v("、"),_("code",[t._v("translateZ")]),t._v("、"),_("code",[t._v("animation")])]),t._v(" "),_("li",[_("code",[t._v("opacity")]),t._v("属性/过渡动画（需要动画执行的过程中才会创建合成层，动画没有开始或结束后元素还会回到之前的状态）")]),t._v(" "),_("li",[_("code",[t._v("will-chang")]),t._v("属性（这个比较偏僻），一般配合 opacity 与 translate 使用（而且经测试，除了上述可以引发硬件加速的属性外，其它属性并不会变成复合层），作用是提前告诉浏览器要变化，这样浏览器会开始做一些优化工作（这个最好用完后就释放）")]),t._v(" "),_("li",[_("code",[t._v("<video><iframe><canvas><webgl>")]),t._v("等元素")])]),t._v(" "),_("p",[_("strong",[t._v("硬件加速时请使用 index")])]),t._v(" "),_("p",[t._v("使用硬件加速时，尽可能的使用 index，防止浏览器默认给后续的元素创建复合层渲染")]),t._v(" "),_("p",[t._v("具体的原理时这样的：")]),t._v(" "),_("ul",[_("li",[t._v("webkit CSS3 中，如果这个元素添加了硬件加速，并且 index 层级比较低，"),_("br"),t._v("\n那么在这个元素的后面其它元素（层级比这个元素高的，或者相同的，并且 releative 或 absolute 属性相同的），"),_("br"),t._v("\n会默认变为复合层渲染，如果处理不当会极大的影响性能")])]),t._v(" "),_("p",[t._v("简单点理解，其实可以认为是一个隐式合成的概念："),_("strong",[t._v("如果 a 是一个复合图层，而且 b 在 a 上面，那么 b 也会被隐式转为一个复合图层")]),t._v("，这点需要特别注意")]),t._v(" "),_("h2",{attrs:{id:"浏览器的加载、解析时间线"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的加载、解析时间线"}},[t._v("#")]),t._v(" 浏览器的加载、解析时间线")]),t._v(" "),_("p",[t._v("js 时间线步骤（创建 document 对象==>文档解析完==>文档解析完加载完执行完）")]),t._v(" "),_("ol",[_("li",[_("p",[_("code",[t._v("创建 Document 对象")]),t._v(" ，开始解析 web 页面。解析 HTML 元素和他们的文本内容")]),t._v(" "),_("p",[t._v("后添加 Element 对象和 Text 节点到文档中。这个阶段 "),_("code",[t._v("document.readyState = 'loading'。")])]),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[t._v("遇到 link 外部 css，创建线程，进行异步加载，并继续解析文档。")]),t._v(" "),_("li",[_("strong",[t._v("遇到 script 外部 js，并且没有设置 async、defer，浏览器同步加载，并阻塞，等待 js 加载完成并执行该脚本，然后继续解析文档")]),t._v("。\n4、遇到 script 外部 js，并且"),_("strong",[t._v("设置有 async、defer")]),t._v("，浏览器创建线程"),_("strong",[t._v("异步加载")]),t._v("，并"),_("strong",[t._v("继续解析文档")]),t._v("。"),_("strong",[t._v("对于 async 属性的脚本，脚本加载完成后立即执行")]),t._v("。 "),_("code",[t._v("（异步禁止使用 document.write()")]),t._v(" ，因为当你整个文档解析到差不多，再调用 document.write()，会把之前所有的文档流都清空，用它里面的文档代替）")])])])]),t._v(" "),_("p",[t._v("5、遇到 img 等（带有 src），先正常解析 dom 结构，然后浏览器异步加载 src，并继续解析文档。 看到标签直接生产 dom 树，不用等着 img 加载完 src。")]),t._v(" "),_("p",[t._v("6、当文档解析完成（domTree 建立完毕，不是加载完毕）， "),_("code",[t._v("document.readyState = 'interactive'")]),t._v(" 。\n7、文档解析完成后，所有设置有 "),_("code",[t._v("defer 的脚本会按照顺序执行")]),t._v(" 。（"),_("strong",[t._v("注意与 async 的不同, 但同样禁止使用 document.write()")]),t._v("）;\n8、document 对象触发 DOMContentLoaded 事件，这也标志着"),_("strong",[t._v("程序执行从同步脚本执行阶段，转化为事件驱动阶段")]),t._v("。")]),t._v(" "),_("p",[t._v("9、当所有 async 的脚本加载完成并执行后、img 等加载完成后（页面所有的都执行加载完之后）， "),_("code",[t._v("document.readyState = 'complete'")]),t._v(" ，"),_("strong",[t._v("window 对象触发 load 事件")]),t._v("。")]),t._v(" "),_("p",[t._v("10、"),_("strong",[t._v("从此，以异步响应方式处理用户输入、网络事件等")]),t._v("。")]),t._v(" "),_("blockquote",[_("p",[t._v("通用写法是把 JS 的 script 写在最下面")])]),t._v(" "),_("h4",{attrs:{id:"_1-dom-树-和-渲染树-的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-dom-树-和-渲染树-的区别"}},[t._v("#")]),t._v(" 1. DOM 树 和 渲染树 的区别：")]),t._v(" "),_("ul",[_("li",[t._v("DOM 树与 HTML 标签一一对应，包括 head 和隐藏元素")])]),t._v(" "),_("p",[_("strong",[t._v("渲染树不包括 head 和隐藏元素")]),t._v("，大段文本的每一个行都是独立节点，每一个节点都有对应的 css 属性")]),t._v(" "),_("h4",{attrs:{id:"_2-css-会阻塞-dom-解析吗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-css-会阻塞-dom-解析吗"}},[t._v("#")]),t._v(" 2. CSS 会阻塞 DOM 解析吗？")]),t._v(" "),_("p",[t._v("对于一个 HTML 文档来说，不管是内联还是外链的 css，"),_("strong",[t._v("都会阻碍后续的 dom 渲染，但是不会阻碍后续 dom 的解析")]),t._v("。")])])}),[],!1,null,null,null);_.default=a.exports}}]);