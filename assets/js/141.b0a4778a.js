(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{417:function(s,a,r){"use strict";r.r(a);var t=r(14),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_3-sso-单点登录方案设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-sso-单点登录方案设计"}},[s._v("#")]),s._v(" 3.SSO 单点登录方案设计")]),s._v(" "),a("h2",{attrs:{id:"什么是-sso"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-sso"}},[s._v("#")]),s._v(" 什么是 SSO")]),s._v(" "),a("h2",{attrs:{id:"怎么实现-sso-单点登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#怎么实现-sso-单点登录"}},[s._v("#")]),s._v(" 怎么实现 SSO 单点登录？")]),s._v(" "),a("ul",[a("li",[s._v("两种方式：重定向、JSONP\n"),a("blockquote",[a("p",[s._v("以 xxx.woa.com 为例子，该例子为重定向方案")])])])]),s._v(" "),a("div",{staticClass:"language-mermaid line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-mermaid"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sequenceDiagram")]),s._v("\n前端 "),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("->>")]),s._v(" 业务服务器"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 存在token，前往xxx.woa.com\n业务服务器 "),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e>")]),s._v(" 前端"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 验证token登录态，登录成功\n前端 "),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("->>")]),s._v(" SSO服务器"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 没有登录态，携带cookie，申请登录\nSSO服务器 "),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e>")]),s._v(" 前端"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 携带token302重定向到指定页面，\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("loop")]),s._v(" 轮询\n    前端 "),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("->>")]),s._v("+ SSO服务器"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 询问是否已经登录\n    SSO服务器 "),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e>")]),s._v("- 前端"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" result"),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("===")]),s._v("1 ，已登录\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n前端 "),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("->>")]),s._v(" 业务服务器"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 通过Cookie用户信息，获取token\n业务服务器 "),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e>")]),s._v(" 前端"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" token\n前端 "),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("->>")]),s._v(" 业务服务器"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 登录\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);