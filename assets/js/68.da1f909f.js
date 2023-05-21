(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{344:function(_,v,t){"use strict";t.r(v);var l=t(14),s=Object(l.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"_5-对有状态组件和无状态组件的理解及使用场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-对有状态组件和无状态组件的理解及使用场景"}},[_._v("#")]),_._v(" 5. 对有状态组件和无状态组件的理解及使用场景")]),_._v(" "),v("h3",{attrs:{id:"_1-有状态组件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-有状态组件"}},[_._v("#")]),_._v(" （1）有状态组件")]),_._v(" "),v("p",[_._v("特点：")]),_._v(" "),v("ol",[v("li",[_._v("是类组件")]),_._v(" "),v("li",[_._v("有继承")]),_._v(" "),v("li",[_._v("可以使用 this")]),_._v(" "),v("li",[_._v("可以使用 react 的生命周期")]),_._v(" "),v("li",[_._v("使用较多，容易频繁触发生命周期钩子函数，影响性能")]),_._v(" "),v("li",[_._v("内部使用 state，维护自身状态的变化，有状态组件根据外部组件传入的 props 和自身的 state 进行渲染。")])]),_._v(" "),v("p",[_._v("使用场景：")]),_._v(" "),v("ol",[v("li",[_._v("需要使用到状态的。")]),_._v(" "),v("li",[_._v("需要使用状态操作组件的（无状态组件的也可以实现新版本 react hooks 也可实现）")])]),_._v(" "),v("p",[_._v("总结：")]),_._v(" "),v("blockquote",[v("p",[_._v("类组件可以维护自身的状态变量，即组件的 state ，类组件还有不同的生命周期方法，可以让开发者能够在组件的不同阶段（挂载、更新、卸载），对组件做更多的控制。类组件则既可以充当无状态组件，也可以充当有状态组件。当一个类组件不需要管理自身状态时，也可称为无状态组件。")])]),_._v(" "),v("h3",{attrs:{id:"_2-无状态组件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-无状态组件"}},[_._v("#")]),_._v(" （2）无状态组件")]),_._v(" "),v("p",[_._v("特点：")]),_._v(" "),v("ol",[v("li",[_._v("不依赖自身的状态 state")]),_._v(" "),v("li",[_._v("可以是类组件或者函数组件。")]),_._v(" "),v("li",[_._v("可以完全避免使用 this 关键字。（由于使用的是箭头函数事件无需绑定）")]),_._v(" "),v("li",[_._v("有更高的性能。当不需要使用生命周期钩子时，应该首先使用无状态函数组件")]),_._v(" "),v("li",[_._v("组件内部不维护 state ，只根据外部组件传入的 props 进行渲染的组件，当 props 改变时，组件重新渲染。")])]),_._v(" "),v("p",[_._v("使用场景：")]),_._v(" "),v("p",[_._v("组件不需要管理 state，纯展示")]),_._v(" "),v("p",[_._v("优点：")]),_._v(" "),v("ol",[v("li",[_._v("简化代码、专注于 render")]),_._v(" "),v("li",[_._v("组件不需要被实例化，无生命周期，提升性能。 输出（渲染）只取决于输入（属性），无副作用")]),_._v(" "),v("li",[_._v("视图和数据的解耦分离")])]),_._v(" "),v("p",[_._v("缺点：")]),_._v(" "),v("ol",[v("li",[_._v("无法使用 ref")]),_._v(" "),v("li",[_._v("无生命周期方法")]),_._v(" "),v("li",[_._v("无法控制组件的重渲染，因为无法使用 shouldComponentUpdate 方法，当组件接受到新的属性时则会重渲染")])]),_._v(" "),v("p",[_._v("总结：")]),_._v(" "),v("blockquote",[v("p",[_._v("组件内部状态且与外部无关的组件，可以考虑用状态组件，这样状态树就不会过于复杂，易于理解和管理。当一个组件不需要管理自身状态时，也就是无状态组件，应该优先设计为函数组件。比如自定义的"),v("code",[_._v("<Button/>、 <Input />")]),_._v("等组件。")])])])}),[],!1,null,null,null);v.default=s.exports}}]);