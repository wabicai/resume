# 装饰器模式和 AOP

## 装饰器模式的定义、优缺点

1. 定义：不改动原有函数情况下，给函数添加功能。（继承的话会影响子类）
2. 优点：
   1. 拓展性强，
   2. 分离关注点
   3. 遵循开闭原则
3. 缺点：
   1. 复杂
   2. 有性能问题

## 传统的装饰器(不具有生产意义)

```js
var plane = {
  fire: function () {
    console.log("普通子弹");
  },
};

var missleDecorator = function () {
  console.log("发射导弹");
};

var atomDecorator = function () {
  console.log("发射原子弹");
};

var fire1 = plane.fire;
plane.fire = function () {
  fire1();
  missleDecorator();
};

var fire2 = plane.fire;
plane.fire = function () {
  fire2();
  atomDecorator();
};

plane.fire();
/**
普通子弹
发射导弹
发射原子弹
 */
```

## 装饰器的具体实现：AOP

### 示例代码

```js
Function.prototype.before = function(beforeFn){
    const _self = this;
    return function()(
        beforeFn.apply(this, arguments);
        return _self.apply(this, arguments);
    )
}
Function.prototype.after = function (afterFn) {
    var _self = this;
    return function () {
        var ret = _self.apply(this, arguments);
        afterFn.apply(this, arguments);
        return ret;
    }
}

// before 和 after 函数都接收一个函数作为参数，这个函数也就是新添加的函数(里面也就是要添加的新功能逻辑)。
// 而before 和 after 函数区别在于在是原函数之前执行还是之后执行。
// 作者：南囝coding
// 链接：https://juejin.cn/post/7272869799960559679
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

### 实际用法

#### 数据上报

```JS
   Function.prototype.before = function (beforeFn) {
       var _self = this;
       return function () {
           beforeFn.apply(this, arguments);
           return _self.apply(this, arguments);
       };
   };
   Function.prototype.after = function (afterFn) {
       var _self = this;
       return function () {
           var ret = _self.apply(this, arguments);
           afterFn.apply(this, arguments);
           return ret;
       };
   };

   function handler() {
       message.value = `已点击${++count.value}`;
   }

   handler = handler.after(log);

   function log() {
       message.value = message.value + "-----> log reported";
       console.log("log report");
   }

```

#### 封装请求

```js
const message = ref("empty params");
Function.prototype.before = function (beforeFn) {
  var _self = this;
  return function () {
    beforeFn.apply(this, arguments);
    return _self.apply(this, arguments);
  };
};

Function.prototype.after = function (afterFn) {
  var _self = this;
  return function () {
    var ret = _self.apply(this, arguments);
    afterFn.apply(this, arguments);
    return ret;
  };
};

function ajax(type, url, params) {
  message.value = `${type} ----> ${url} -----> ${JSON.stringify(params)}`;
}

function getToken() {
  // do something
  return "token";
}

ajax = ajax.before(function (type, url, params) {
  params.token = getToken();
});

ajax("get", "https://www.baidu.com/userinfo", {
  name: "se",
  password: "xsdsd",
});
```
