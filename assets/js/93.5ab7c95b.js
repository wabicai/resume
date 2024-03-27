(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{389:function(e,v,t){"use strict";t.r(v);var u=t(10),s=Object(u.a)({},(function(){var e=this,v=e._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"_13-vue2-vs-vue3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_13-vue2-vs-vue3"}},[e._v("#")]),e._v(" 13.Vue2 vs Vue3")]),e._v(" "),v("h2",{attrs:{id:"关于-vue3-的-setup"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关于-vue3-的-setup"}},[e._v("#")]),e._v(" 关于 Vue3 的 setup")]),e._v(" "),v("ol",[v("li",[e._v("setup()函数接收两个参数：props、context(包含 attrs、slots、emit)。")]),e._v(" "),v("li",[e._v("setup 函数是处于生命周期 beforeCreated 和 created 俩个钩子函数之前。")]),e._v(" "),v("li",[e._v("执行 setup 时，组件实例尚未被创建（在 setup()内部，this 不会是该活跃实例得引用，即不指向 vue 实例，Vue 为了避免我们错误得使用，直接将 setup 函数中得 this 修改成了 undefined）。")]),e._v(" "),v("li",[e._v("与模板一起使用时，需要返回一个对象。")]),e._v(" "),v("li",[e._v("因为 setup 函数中，props 是响应式得，当传入新的 prop 时，它将会被更新，所以不能使用 es6 解构，因为它会消除 prop 得响应性，如需解构 prop，可以通过使用 setup 函数中得 toRefs 来完成此操作。")]),e._v(" "),v("li",[e._v("在 setup()内使用响应式数据时，需要通过 .value 获取。")]),e._v(" "),v("li",[e._v("从 setup() 中返回得对象上得 property 返回并可以在模板中被访问时，它将自动展开为内部值。不需要在模板中追加.value。")]),e._v(" "),v("li",[e._v("setup 函数只能是同步的不能是异步的。")])]),e._v(" "),v("h2",{attrs:{id:"差异"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#差异"}},[e._v("#")]),e._v(" 差异")]),e._v(" "),v("ol",[v("li",[v("p",[e._v("双向绑定原理不同\nvue2：")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("vue2 的双向数据绑定是利用 ES5 的一个 APIObject.definePropert() 对数据进行劫持，结合发布订阅模式的方式来实现的。\nvue3：")])]),e._v(" "),v("li",[v("p",[e._v("vue3 中使用了 ES6 的 Proxy API 对数据代理。相比 vue2.x，使用 proxy 的优势如下：")]),e._v(" "),v("ul",[v("li",[e._v("defineProperty 只能监听某个属性，不能对全对象监听")]),e._v(" "),v("li",[e._v("可以省去 for in，闭包等内容来提升效率(直接绑定整个对象即可)")]),e._v(" "),v("li",[e._v("可以监听数组，不用再去单独的对数组做特异性操作 vue3.x 可以检测到数组内部数据的变化。")])])])])]),e._v(" "),v("li",[v("p",[e._v("是否支持碎片\nvue2：vue2 不支持碎片。\nvue3：vue3 支持碎片（Fragments），就是说可以拥有多个根节点。")])]),e._v(" "),v("li",[v("p",[e._v("API 类型不同\nVue2:选项型 API（Options API）\nVue3:组合式 API（Composition API）")])]),e._v(" "),v("li",[v("p",[e._v("定义数据变量和方法不同\nvue2：vue2 是把数据放入 data 中，在 vue2 中定义数据变量是 data(){}，创建的方法要在 methods:{}中。\nvue3：，vue3 就需要使用一个新的 setup()方法，此方法在组件初始化构造的时候触发。使用以下三个步骤来建立反应性数据： 1. 从 vue 引入 reactive； 2. 使用 reactive() 方法来声明数据为响应性数据； 3. 使用 setup()方法来返回我们的响应性数据，从而 template 可以获取这些响应性数据。")])]),e._v(" "),v("li",[v("p",[e._v("生命周期钩子函数不同\nvue2：vue2 中的生命周期：")])])]),e._v(" "),v("p",[e._v("beforeCreate 组件创建之前\ncreated 组件创建之后\nbeforeMount 组价挂载到页面之前执行\nmounted 组件挂载到页面之后执行\nbeforeUpdate 组件更新之前\nupdated 组件更新之后")]),e._v(" "),v("p",[e._v("vue3：vue3 中的生命周期：")]),e._v(" "),v("p",[e._v("setup 开始创建组件\nonBeforeMount 组价挂载到页面之前执行\nonMounted 组件挂载到页面之后执行\nonBeforeUpdate 组件更新之前\nonUpdated 组件更新之后\n而且 vue3.x 生命周期在调用前需要先进行引入。除了这些钩子函数外，vue3.x 还增加了 onRenderTracked 和 onRenderTriggered 函数。")]),e._v(" "),v("ol",{attrs:{start:"6"}},[v("li",[v("p",[e._v("父子传参不同\nvue2：父传子，用 props,子传父用事件 Emitting Events。在 vue2 中，会调用 this$emit 然后传入事件名和对象。\nvue3：父传子，用 props,子传父用事件 Emitting Events。在 vue3 中的 setup()中的第二个参数 content 对象中就有 emit，那么我们只要在 setup()接收第二个参数中使用分解对象法取出 emit 就可以在 setup 方法中随意使用了。")])]),e._v(" "),v("li",[v("p",[e._v("指令与插槽不同\nvue2：vue2 中使用 slot 可以直接使用 slot；v-for 与 v-if 在 vue2 中优先级高的是 v-for 指令，而且不建议一起使用。\nvue3：vue3 中必须使用 v-slot 的形式；vue3 中 v-for 与 v-if,只会把当前 v-if 当做 v-for 中的一个判断语句，不会相互冲突；vue3 中移除 keyCode 作为 v-on 的修饰符，当然也不支持 config.keyCodes；vue3 中移除 v-on.native 修饰符；vue3 中移除过滤器 filter。")])]),e._v(" "),v("li",[v("p",[e._v("main.js 文件不同\nvue2：vue2 中我们可以使用 pototype(原型)的形式去进行操作，引入的是构造函数。\nvue3：vue3 中需要使用结构的形式进行操作，引入的是工厂函数；vue3 中 app 组件中可以没有根标签。")])]),e._v(" "),v("li",[v("p",[e._v("Dom diff 算法不同")])])]),e._v(" "),v("p",[e._v("Vue3:")]),e._v(" "),v("ul",[v("li",[e._v("对静态数据进行了标记，在 diff 算法时直接跳过,只会被创建一次，在渲染时直接复用。")])]),e._v(" "),v("ol",{attrs:{start:"10"}},[v("li",[e._v("tree-shaking\n对不用的代码进行删除")])])])}),[],!1,null,null,null);v.default=s.exports}}]);