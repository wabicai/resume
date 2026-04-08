# Vue-AST 抽象语法树

## 什么是 AST

AST 是抽象语法树，作用是把模板字符串转换成一棵结构化对象树，方便编译器继续做静态标记、依赖分析和渲染函数生成。

## Vue 编译阶段里的位置

Vue 模板编译大致分三步：

1. `parse`：把模板解析成 AST。
2. `optimize`：标记静态节点和静态根。
3. `generate`：把 AST 转成 render 函数字符串。

## 常见节点类型

- 元素节点：标签名、属性、子节点。
- 文本节点：普通文本内容。
- 表达式节点：如 `{{ msg }}` 这类动态绑定。

## 一个简化示例

```html
<div id="app">{{ msg }}</div>
```

会被抽象成类似：

```js
{
  type: 'element',
  tag: 'div',
  attrsList: [{ name: 'id', value: 'app' }],
  children: [
    { type: 'expression', text: '{{ msg }}', expression: '_s(msg)' },
  ],
}
```

## AST 有什么价值

- 编译期可以提前发现模板结构问题。
- 能识别静态节点，减少运行时 patch 成本。
- 便于做指令转换、事件处理和代码生成。

## 实践理解

看 Vue 编译源码时，不要一开始就盯着 render 函数；先看 AST 怎么构建，再看优化和生成，理解会清晰很多。
