(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{396:function(t,e,s){"use strict";s.r(e);var a=s(10),v=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_8-vue2-中的缺陷"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-vue2-中的缺陷"}},[t._v("#")]),t._v(" 8.Vue2 中的缺陷")]),t._v(" "),e("p",[t._v("https://blog.csdn.net/m0_46212240/article/details/104954510")]),t._v(" "),e("h2",{attrs:{id:"实例化-vue-对象-增加新属性-是否双向绑定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实例化-vue-对象-增加新属性-是否双向绑定"}},[t._v("#")]),t._v(" 实例化 vue 对象，增加新属性，是否双向绑定？")]),t._v(" "),e("ul",[e("li",[t._v("虽然我们通过 Object.defineProperty 方法实现了对 object 数据的可观测，但是这个方法仅仅只能观测到 object 数据的取值及设置值")]),t._v(" "),e("li",[t._v("当我们向 object 数据里添加一对新的 key/value 或删除一对已有的 key/value 时，它是无法观测到的")]),t._v(" "),e("li",[t._v("导致当我们对 object 数据添加或删除值时，无法通知依赖，无法驱动视图进行响应式更新。")]),t._v(" "),e("li")]),t._v(" "),e("h3",{attrs:{id:"数组触发视图更新-哪些不可以-解决办法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数组触发视图更新-哪些不可以-解决办法"}},[t._v("#")]),t._v(" 数组触发视图更新，哪些不可以，解决办法？")]),t._v(" "),e("h4",{attrs:{id:"以下两种方法不可以触发视图更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#以下两种方法不可以触发视图更新"}},[t._v("#")]),t._v(" 以下两种方法不可以触发视图更新")]),t._v(" "),e("p",[e("strong",[t._v("利用索引直接设置一个数组项")]),t._v("，例： "),e("code",[t._v("this.array[index]=newValue")])]),t._v(" "),e("p",[e("strong",[t._v("直接修改数组的长度")]),t._v("，例： "),e("code",[t._v("this.array.length=newLength")])]),t._v(" "),e("h4",{attrs:{id:"解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),e("p",[e("code",[t._v("push()、pop()、shift()、unshift()、splice()、sort()、reverse()")]),t._v(" "),e("strong",[t._v("这些方法会改变被操作的数组")]),t._v("；\n"),e("code",[t._v("filter()、concat()、slice()")]),t._v(" "),e("strong",[t._v("这些方法不会改变被操作的数组，返回一个新的数组")]),t._v("。"),e("strong",[t._v("以上方法都可以触发视图更新。")])]),t._v(" "),e("p",[t._v("可以用 "),e("code",[t._v("this.$set(this.array,index,newValue)")]),t._v(" 或 "),e("code",[t._v("this.array.splice(index,1,newValue)")])]),t._v(" "),e("p",[t._v("可以用 "),e("code",[t._v("this.array.splice(newLength)")])])])}),[],!1,null,null,null);e.default=v.exports}}]);