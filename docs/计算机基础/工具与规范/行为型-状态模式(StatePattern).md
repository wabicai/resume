# 行为型-状态模式(State Pattern)

## 适用情况：

1. 条件分支很多
2. 有指定几个状态
3. 如：抽奖、括号匹配、HTML 解析器、状态机的实现

## 抽奖问题

有一个需求：我需要进行抽奖。

1. 点击抽奖按钮进行前置判断 1：拥有的代币 A 是否足够一次抽奖
2. 前置判断 2: 如果足够，直接跳转到抽奖逻辑。如果不够，跳转前置判断 3: 判断拥有的代币 B 是否能兑换足够的代币 A。
3. 前置判断 3：如果代币 B 足够，弹窗询问用户是否要通过代币 B 兑换 A 并且抽奖，即步骤 4。如果代币 B 不够，则直接弹出商店购买页面。
4. 通过代币 B 兑换代币 A：有两个接口： buyCoin 和 lottery。需要先 buyCoin，再 lottery。这里需要做防抖处理。
5. 如果代币足够则直接抽奖。

```vue
<template>
  <div>
    <button @click="handleLottery">抽奖</button>
  </div>
</template>
<script>
class LotteryStateMachine {
  constructor() {
    this.state = this.checkTokenAState;
  }

  checkTokenAState() {
    const tokenA = 10; // 假设代币A数量为10
    if (tokenA >= 1) {
      this.lotteryState();
    } else {
      this.checkTokenBState();
    }
  }

  checkTokenBState() {
    const tokenB = 20; // 假设代币B数量为20
    if (tokenB >= 10) {
      const confirmExchange = confirm("是否通过代币B兑换代币A并抽奖？");
      if (confirmExchange) {
        this.exchangeTokensState();
      } else {
        this.openStoreState();
      }
    } else {
      this.openStoreState();
    }
  }

  exchangeTokensState() {
    // 调用接口 buyCoin 和 lottery，需要防抖处理
    console.log("兑换代币A并抽奖");
    this.lotteryState();
  }

  openStoreState() {
    console.log("打开商店购买页面");
  }

  lotteryState() {
    console.log("进行抽奖");
  }

  handleLottery() {
    this.checkTokenAState();
  }
}

export default {
  methods: {
    handleLottery() {
      let lotteryMachine = new LotteryStateMachine();
      lotteryMachine.handleLottery();
    },
  },
};
</script>
```

## 从括号匹配聊到 HTML 解析器和状态机

> tips: 本文默认读者已经掌握基本数据结构知识。
> 基于 TypeScript 解法

## 括号匹配

> 原题：[有效的括号](https://leetcode.cn/problems/valid-parentheses/description/)

### 问题描述

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

1. 左括号必须用相同类型的右括号闭合。
2. 左括号必须以正确的顺序闭合。
3. 每个右括号都有一个对应的相同类型的左括号。

示例 1：

> 输入：s = "()"
> 输出：true

示例 2：

> 输入：s = "()[]{}"
> 输出：true

示例 3：

> 输入：s = "(]"
> 输出：false

### 括号匹配：哈希表+栈

最常见解法，时间复杂度 O(n),空间复杂度 O(n)

```ts
function isVaild(str) {
  const map = new Map();
  map.set(")", "(");
  map.set("]", "[");
  map.set("}", "{");

  const stack = [];
  for (let i of s) {
    if (map.has(i)) {
      const current = stack.pop();
      if (current !== map.get(i)) return false;
    } else {
      stack.push(i);
    }
  }
  return stack.length === 0;
}
```

> 面试官：现实情况肯定很复杂，比如`HTML解析器`。要求匹配`<div></div>`,这种情况该怎么解决

## HTML 解析器

- tips:从本质上来讲，括号匹配和标签匹配是同种类型，都是要验证括号/标签是否符合规则。

## 问题描述

> 给定一个 HTML 字符串，输出解析后的 DOM 树,
>
> 1. 字符串只考虑普通标签，不考虑自闭合标签 如: `<img>`
> 2. 只考虑普通标签，如 p,span,div
> 3. 字符串一定符合 HTML 规范
>    示例：
>    输入：`<div><p>这是p</p><h1>这是h1</h1></div>`
>    输出：
>
> ```js
>    {
>       tag: 'div',
>       content: '',
>        children: [
>            {
>                tag: 'p',
>                content: '这是p',
>                children: []
>            },
>            {
>                tag: 'h1',
>                content: '这是h1',
>                children: []
>            }
>        ]
>    }
> ```

### HTML 解析器(简单版本): 正则表达式+栈

思路：

1. 通过正则表达式 exec 函数，匹配出`标签名`和`标签所在index`。
2. 遇到开标签入栈，闭标签出栈。
3. 标签内容通过 index 截取。
4.

```ts
function parseHTML(html) {
  function createNode(tag, content, children) {
    return {
      tag,
      content,
      children,
    };
  }
  let match = null;
  let root = createNode("root", "", []);
}
const html = "<div><p>这是p</p><h1>这是h1</h1></div>";
console.log(parseHTML(html));
```

![alt text](image.png)

### HTML 解析器（参考自 htmlparser2 库）：状态机

> htmlparser2 源码：[htmlparser2](https://github.com/fb55/htmlparser2)

```ts
class HTMLNode {
  constructor(type, content = "") {
    this.type = type;
    this.content = content;
    this.children = [];
  }
}

class HTMLDocumentParser {
  constructor(htmlString) {
    this.htmlString = htmlString;
    this.documentRoot = new HTMLNode("document");
    this.nodeStack = [this.documentRoot];
    this.parserState = this.dataState;
  }

  parseHTML() {
    for (let char of this.htmlString) {
      this.parserState = this.parserState(char);
    }
    return this.documentRoot;
  }

  dataState(char) {
    if (char === "<") {
      return this.openTagState;
    } else {
      this.emitNode("text", char);
      return this.dataState;
    }
  }

  openTagState(char) {
    if (char === "/") {
      return this.openEndTagState;
    } else {
      this.emitNode("startTag", char);
      return this.tagNameState;
    }
  }

  tagNameState(char) {
    if (char === ">") {
      this.emitNode();
      return this.dataState;
    } else {
      this.currentNode.content += char;
      return this.tagNameState;
    }
  }

  openEndTagState(char) {
    this.emitNode("endTag", char);
    return this.endTagNameState;
  }

  endTagNameState(char) {
    if (char === ">") {
      this.emitNode();
      return this.dataState;
    } else {
      this.currentNode.content += char;
      return this.endTagNameState;
    }
  }

  emitNode(type = "", content = "") {
    if (type) {
      this.currentNode = new HTMLNode(type, content);
    } else {
      let topNode = this.nodeStack[0];
      if (this.currentNode.type === "startTag") {
        this.nodeStack.unshift(this.currentNode);
        topNode.children.push(this.currentNode);
      } else if (this.currentNode.type === "endTag") {
        if (topNode.content !== this.currentNode.content) {
          throw new Error("Tag start end doesn't match!");
        } else {
          this.nodeStack.shift();
        }
      } else {
        if (this.currentNode.content.trim() !== "") {
          topNode.children.push(this.currentNode);
        }
      }
    }
  }
}

let htmlString = `<div>
  <h1>这是h1</h1>
  <p>这是p</p>
  <div>
    这是div
    <h2>h2</h2>
  </div>
</div>`;

let documentParser = new HTMLDocumentParser(htmlString);
let documentRoot = documentParser.parseHTML();
console.error("documentParser", documentParser);
console.log(JSON.stringify(documentRoot, null, 2));
```
