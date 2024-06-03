(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{384:function(t,s,a){"use strict";a.r(s);var e=a(10),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_11-vue-细节"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11-vue-细节"}},[t._v("#")]),t._v(" 11.Vue 细节")]),t._v(" "),s("h2",{attrs:{id:"key-的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#key-的使用"}},[t._v("#")]),t._v(" key 的使用")]),t._v(" "),s("h3",{attrs:{id:"两种-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#两种-key"}},[t._v("#")]),t._v(" 两种 key")]),t._v(" "),s("ol",[s("li",[t._v("使用 index\n"),s("ol",[s("li",[t._v("需要数据没有独立状态，不会进行增加/删除等影响后续元素 key 变化")]),t._v(" "),s("li",[t._v("利于 Vue 虚拟 DOM 原地复用节点")])])]),t._v(" "),s("li",[t._v("使用 id\n"),s("ol",[s("li",[t._v("适用于单选框的列表数据")]),t._v(" "),s("li",[t._v("有独立状态的数据")]),t._v(" "),s("li",[t._v("效率会比较低，但是会比较精确的 diff")])])])]),t._v(" "),s("h2",{attrs:{id:"v-for-和-v-if"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-for-和-v-if"}},[t._v("#")]),t._v(" v-for 和 v-if")]),t._v(" "),s("ul",[s("li",[t._v("Vue2 中不要把这两个放在一个节点\n"),s("ul",[s("li",[t._v("因为 v-for 优先级高，浪费性能")])])]),t._v(" "),s("li",[t._v("Vue3 会把 v-if 提前，但是还是不建议放在一起")]),t._v(" "),s("li",[t._v("解决方案\n"),s("ul",[s("li",[t._v("template")]),t._v(" "),s("li",[t._v("v-if 提前")]),t._v(" "),s("li",[t._v("使用 computed 控制显示节点")])])])]),t._v(" "),s("h2",{attrs:{id:"v-model-和-sync-修饰符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-model-和-sync-修饰符"}},[t._v("#")]),t._v(" v-model 和 .sync 修饰符")]),t._v(" "),s("blockquote",[s("p",[t._v('两者本质都是一样，并没有任何区别： “监听一个触发事件”="(val) => value = val"。')])]),t._v(" "),s("p",[t._v("细微差异：")]),t._v(" "),s("ol",[s("li",[t._v("v-model 默认对应的是 input 或者 textarea 等组件的 input 事件，如果在子组件替换这个 input 事件，其本质和.sync 修饰符一模一样。比较单一，不能有多个")]),t._v(" "),s("li",[t._v('一个组件可以多个属性用.sync 修饰符，可以同时"双向绑定多个“prop”，而并不像 v-model 那样，一个组件只能有一个。')])]),t._v(" "),s("p",[t._v("使用场景：")]),t._v(" "),s("ol",[s("li",[t._v("v-model 针对更多的是最终操作结果，是双向绑定的结果，是 value，是一种 change 操作。比如：输入框的值、多选框的 value 值列表")]),t._v(" "),s("li",[t._v("sync 针对更多的是各种各样的状态，是状态的互相传递，是 status，是一种 update 操作。比如：组件 loading 状态、")])]),t._v(" "),s("div",{staticClass:"language-jsx line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("searchText"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 等价于")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("input "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"searchText"')]),t._v(" @input"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"searchText = $event.target.value"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 组件上使用的时候")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("CustomInput\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("modelValue"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"searchText"')]),t._v("\n\t@update"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("modelValue"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"newValue => searchText = newValue"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);