(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{293:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_15-flex-进阶"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_15-flex-进阶"}},[s._v("#")]),s._v(" 15.Flex 进阶")]),s._v(" "),t("h2",{attrs:{id:"flex"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex"}},[s._v("#")]),s._v(" flex")]),s._v(" "),t("h3",{attrs:{id:"flex-的两种形态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex-的两种形态"}},[s._v("#")]),s._v(" flex 的两种形态")]),s._v(" "),t("h4",{attrs:{id:"flex-和-inline-flex"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex-和-inline-flex"}},[s._v("#")]),s._v(" flex 和 inline-flex")]),s._v(" "),t("ul",[t("li",[s._v("当 display 指定为 flex 时，FlexBox 的宽度会填充父容器，当 display 指定为 inline-flex 时，FlexBox 的宽度会包裹子 Item")])]),s._v(" "),t("h3",{attrs:{id:"flex-基本属性-特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex-基本属性-特性"}},[s._v("#")]),s._v(" flex 基本属性/特性")]),s._v(" "),t("ul",[t("li",[s._v("设为 Flex 布局以后，子元素的"),t("code",[s._v("float")]),s._v("、"),t("code",[s._v("clear")]),s._v("和"),t("code",[s._v("vertical-align")]),s._v("属性将失效。\n父项属性\n以下 6 个属性是对父元素设置的：")]),s._v(" "),t("li",[s._v("flex-direction:设置主轴的方向")]),s._v(" "),t("li",[s._v("justify-content:设置主轴上的子元素排列方式")]),s._v(" "),t("li",[s._v("flex-wrap:设置子元素是否换行")]),s._v(" "),t("li",[s._v("align-items:设置侧轴上的子元素排列方式(单行)")]),s._v(" "),t("li",[s._v("flex-flow:复合属性，相当于同时设置了 flex-direction 和 flex-wrap\n子项属性")]),s._v(" "),t("li",[s._v("order 定义项目的排列顺序。数值越小，排列越靠前，默认为 0")]),s._v(" "),t("li",[s._v("flex-grow 定义项目的放大比例，默认为"),t("code",[s._v("0")]),s._v("，即如果存在剩余空间，也不放大。")]),s._v(" "),t("li",[s._v("flex-shrink 项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。")]),s._v(" "),t("li",[s._v("flex-basis 在分配多余空间之前，占据的主轴空间（main size）.默认"),t("code",[s._v("auto")]),s._v("，本来大小。")]),s._v(" "),t("li",[s._v("flex [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]")]),s._v(" "),t("li",[s._v("auto ("),t("code",[s._v("1 1 auto")]),s._v(") 和 none ("),t("code",[s._v("0 0 auto")]),s._v(")。")]),s._v(" "),t("li",[s._v("align-self 单个项目有与其他项目不一样的对齐方式 align-items 默认 auto")])]),s._v(" "),t("h3",{attrs:{id:"flex-1-和-flex-auto-区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex-1-和-flex-auto-区别"}},[s._v("#")]),s._v(" flex:1 和 flex: auto 区别")]),s._v(" "),t("p",[s._v("flex: 1 指 flex: 1 1 0 （推荐使用\nflex: auto 指 flex: 1 1 auto\nflex: 1 会尺寸不足的时候与其他元素平分\nflex: auto 会尺寸不足时优先最大化内容尺寸，挤压其他元素空间")]),s._v(" "),t("h3",{attrs:{id:"flex-实战"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex-实战"}},[s._v("#")]),s._v(" flex 实战")]),s._v(" "),t("h4",{attrs:{id:"百分比布局"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#百分比布局"}},[s._v("#")]),s._v(" 百分比布局")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".father")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".son")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*  0表示不自动填充，1表示自动填充剩余空间 */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-grow")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 0表示不会缩小，并且可以超出父元素宽度，1表示空间不足则缩小 */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-shrink")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 占父元素宽度20%，auto表示长度将根据内容决定 */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-basis")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 20%"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h4",{attrs:{id:"圣杯布局"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#圣杯布局"}},[s._v("#")]),s._v(" 圣杯布局")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 100vh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*  竖向布局 */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-direction")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" column"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("header,\nfooter")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*  头部、尾部自动填充 */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box-body")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box-body__content")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box-body__nav,\n.box-body__ads")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 两个边栏的宽度设为12em */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0 0 12em"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 或者把nav放到第一个元素也可以 */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box-body__nav")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 导航放到最左边 */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("order")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br")])]),t("h4",{attrs:{id:"流式布局"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#流式布局"}},[s._v("#")]),s._v(" 流式布局")]),s._v(" "),t("blockquote",[t("p",[s._v("每行的项目数固定，会自动分行")])]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".parent")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 200px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 150px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-flow")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" row wrap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-content")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex-start"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".child")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0 0 25%"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 50px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h4",{attrs:{id:"斜向布局"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#斜向布局"}},[s._v("#")]),s._v(" 斜向布局")]),s._v(" "),t("blockquote",[t("p",[s._v("父：flex-direction: column;\n子：align-self")])])])}),[],!1,null,null,null);t.default=e.exports}}]);