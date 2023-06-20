(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{380:function(s,t,a){"use strict";a.r(t);var n=a(10),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_6-前端监控"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-前端监控"}},[s._v("#")]),s._v(" 6.前端监控")]),s._v(" "),t("h1",{attrs:{id:"前端可监控的类别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端可监控的类别"}},[s._v("#")]),s._v(" 前端可监控的类别")]),s._v(" "),t("h2",{attrs:{id:"性能监控-监控页面性能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#性能监控-监控页面性能"}},[s._v("#")]),s._v(" 性能监控（监控页面性能）")]),s._v(" "),t("ul",[t("li",[s._v("不同用户，不同机型和不同系统下的首屏加载时间")]),s._v(" "),t("li",[s._v("白屏时间")]),s._v(" "),t("li",[s._v("http 等请求的响应时间")]),s._v(" "),t("li",[s._v("静态资源整体下载时间")]),s._v(" "),t("li",[s._v("页面渲染时间")]),s._v(" "),t("li",[s._v("页面交互动画完成时间")])]),s._v(" "),t("h2",{attrs:{id:"用户数据监控"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户数据监控"}},[s._v("#")]),s._v(" 用户数据监控")]),s._v(" "),t("ul",[t("li",[s._v("PV/UV: PV(page view)：即页面浏览量或点击量；UV：指访问某个站点或点击某条新闻的不同 IP 地址的人数")]),s._v(" "),t("li",[s._v("用户在每一个页面的停留时间")]),s._v(" "),t("li",[s._v("用户通过什么入口来访问该网页")]),s._v(" "),t("li",[s._v("用户在相应的页面中触发的行为")])]),s._v(" "),t("h2",{attrs:{id:"异常监控"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#异常监控"}},[s._v("#")]),s._v(" 异常监控")]),s._v(" "),t("ul",[t("li",[s._v("Javascript 的异常监控")]),s._v(" "),t("li",[s._v("样式丢失的异常监控")])]),s._v(" "),t("h1",{attrs:{id:"埋点上报"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#埋点上报"}},[s._v("#")]),s._v(" 埋点上报")]),s._v(" "),t("h2",{attrs:{id:"手动埋点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手动埋点"}},[s._v("#")]),s._v(" 手动埋点")]),s._v(" "),t("ul",[t("li",[s._v("调用埋点 SDK 的函数，在需要埋点的业务逻辑功能位置调用接口，上报埋点数据")]),s._v(" "),t("li",[s._v("手动埋点的缺陷就是，项目工程量大")])]),s._v(" "),t("h2",{attrs:{id:"可视化埋点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可视化埋点"}},[s._v("#")]),s._v(" 可视化埋点")]),s._v(" "),t("ul",[t("li",[s._v("提供一个可视化交互的页面，输入为业务代码，在业务代码中自定义的增加埋点事件")]),s._v(" "),t("li",[s._v("可视化埋点的缺陷就是可以埋点的控件有限，不能手动定制。")])]),s._v(" "),t("h2",{attrs:{id:"无埋点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#无埋点"}},[s._v("#")]),s._v(" 无埋点")]),s._v(" "),t("ul",[t("li",[s._v("前端自动采集全部事件，上报埋点数据，由后端来过滤和计算出有用的数据。")]),s._v(" "),t("li",[s._v("优点是前端只要一次加载埋点脚本")]),s._v(" "),t("li",[s._v("缺点是流量和采集的数据过于庞大，服务器性能压力山大。")])]),s._v(" "),t("h1",{attrs:{id:"监听方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#监听方法"}},[s._v("#")]),s._v(" 监听方法")]),s._v(" "),t("h2",{attrs:{id:"监听某个-dom-节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#监听某个-dom-节点"}},[s._v("#")]),s._v(" 监听某个 DOM 节点")]),s._v(" "),t("div",{staticClass:"language-JS line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" exposeReportClass "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("exposeReport")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("scrollDom")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 滚动容器，建议指定一个滚动容器，不传默认为window")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("watchDom")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('".bookitem"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 监听的dom,建议使用class类，标签也支持")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("time")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 停留有效时长ms")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 提供两个上报方法")]),s._v("\nexposeReportClass"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("didReport")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 手动上报")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//callback")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nexposeReportClass"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scrollReport")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 滚动动上报")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//callback")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("h1",{attrs:{id:"为什么用-gif-埋点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么用-gif-埋点"}},[s._v("#")]),s._v(" 为什么用 gif 埋点")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("防止跨域\n一般而言，打点域名都不是当前域名，所以所有的接口请求都会构成跨域。\n而跨域请求很容易出现由于配置不当被浏览器拦截并报错，这是不能接受的。\n但图片的 src 属性并不会跨域，并且同样可以发起请求。（排除接口上报）")])]),s._v(" "),t("li",[t("p",[s._v("防止阻塞页面加载，影响用户体验")])])]),s._v(" "),t("p",[s._v("通常，创建资源节点后只有将对象注入到浏览器 DOM 树后，浏览器才会实际发送资源请求。反复操作 DOM 不仅会引发性能问题，而且载入 js/css 资源还会阻塞页面渲染，影响用户体验。")]),s._v(" "),t("p",[s._v("但是图片请求例外。构造图片打点不仅不用插入 DOM，只要在 js 中 new 出 Image 对象就能发起请求，而且还没有阻塞问题，在没有 js 的浏览器环境中也能通过 img 标签正常打点，这是其他类型的资源请求所做不到的。（排除文件方式）")]),s._v(" "),t("ul",[t("li",[s._v("相比 PNG/JPG，GIF 的体积最小\n最小的 BMP 文件需要 74 个字节，PNG 需要 67 个字节，而合法的 GIF，只需要 43 个字节。")])]),s._v(" "),t("p",[s._v("同样的响应，GIF 可以比 BMP 节约 41%的流量，比 PNG 节约 35%的流量。")])])}),[],!1,null,null,null);t.default=r.exports}}]);