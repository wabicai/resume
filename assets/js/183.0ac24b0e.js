(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{482:function(s,t,a){"use strict";a.r(t);var e=a(10),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_10-位运算-、-、-、-、-、-在实际开发中的应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-位运算-、-、-、-、-、-在实际开发中的应用"}},[s._v("#")]),s._v(" 10.位运算(&、|、^、~、>>、<<)在实际开发中的应用")]),s._v(" "),t("h2",{attrs:{id:"和"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#和"}},[s._v("#")]),s._v(" & 和 |")]),s._v(" "),t("h3",{attrs:{id:"前置知识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前置知识"}},[s._v("#")]),s._v(" 前置知识")]),s._v(" "),t("ol",[t("li",[s._v("&：与运算符\n运算规则：两位同时为1，结果才为1，否则结果为0。")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("0&0=0  0&1=0  1&0=0  1&1=1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("|：或运算符\n运算规则：参加运算的两个对象只要有一个为1，其值为1。")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("0^0=0  0^1=1  1^0=1  1^1=0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[s._v("#")]),s._v(" 应用")]),s._v(" "),t("ol",[t("li",[s._v("状态管理\n如 React Reconciler 中使用二进制来表示虚拟 Dom 状态\n类似：")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" Placement "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*             */")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0b0000000000010")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" Update "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*                */")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0b0000000000100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" PlacementAndUpdate "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*    */")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0b0000000000110")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" Deletion "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*              */")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0b0000000001000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("如何理解？")]),s._v(" "),t("p",[s._v("假设我们有一个简单的组件，它有三种状态：可见性（Visible）、激活状态（Active）、和禁用状态（Disabled）。\n可见性：1(0b001)\n激活状态：10(0b010)\n禁用状态：100(0b100)")]),s._v(" "),t("p",[s._v("我们想表示这个组件既是可见的又是激活的，该怎么判断？")]),s._v(" "),t("p",[s._v("首先，用"),t("code",[s._v("或运算符")]),s._v("运算到 status 上")]),s._v(" "),t("ol",[t("li",[s._v("设置可见性：status |= 0b001 (将1按位或运算到 status 上)")]),s._v(" "),t("li",[s._v("设置激活状态：status |= 0b010 (将10按位或运算到 status 上)\n此时：，status 为 "),t("code",[s._v("0b011")]),s._v("。")])]),s._v(" "),t("p",[s._v("实际使用位运算来检查组件的状态：")]),s._v(" "),t("blockquote",[t("p",[s._v("通过与运算，判断结果是否为 0，即0b000。")])]),s._v(" "),t("p",[s._v("检查是否可见：status & 0b001，如果结果不为0，则表示组件是可见的。(结果为"),t("code",[s._v("0b001")]),s._v("，可见状态)\n检查是否激活：status & 0b010，如果结果不为0，则表示组件是激活的。(结果为"),t("code",[s._v("0b010")]),s._v("，激活状态)\n检查是否禁用：status & 0b100，如果结果不为0，则表示组件是禁用的。(结果为"),t("code",[s._v("0b000")]),s._v("，目前是非禁用的)")]),s._v(" "),t("p",[s._v("总结：")]),s._v(" "),t("ol",[t("li",[s._v("假设有三个状态，那么需要有三个位数的二进制符来表示状态，如(0b000);")]),s._v(" "),t("li",[s._v("通过目前状态(如"),t("code",[s._v("0b011")]),s._v("表示即在可见又是激活)，与期望状态(如"),t("code",[s._v("0b001")]),s._v("),进行与运算。如果结果不为 0，则表示是可见状态。")])]),s._v(" "),t("p",[s._v("将上面的状态封装为 js 代码")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" Visible "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0b001")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" Active "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0b010")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" Forbidden "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0b100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("isVisible")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("status")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" status "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" Visible "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .....")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"异或运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#异或运算符"}},[s._v("#")]),s._v(" ^：异或运算符")]),s._v(" "),t("p",[s._v("运算规则：参加运算的两个对象，如果两个相应位相同为0，相异为1。")])])}),[],!1,null,null,null);t.default=n.exports}}]);