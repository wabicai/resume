# async、promise 输出结果

```js
async function async1() {
  console.log("async1 start");
  await new Promise((resolve) => {
    console.log("promise1");
  });
  console.log("async1 success");
  return "async1 end";
}
console.log("srcipt start");
async1().then((res) => console.log(res));
console.log("srcipt end");

// script start
// async1 start
// promise1
// script end
```

```js
const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("resolve3");
    console.log("timer1");
  }, 0);
  resolve("resovle1");
  resolve("resolve2");
})
  .then((res) => {
    console.log(res); // resolve1
    setTimeout(() => {
      console.log(p1);
    }, 1000);
  })
  .finally((res) => {
    console.log("finally", res);
  });

// resolve1
// finally  undefined
// timer1
// Promise{<resolved>: undefined}
```

```js
console.log("1");

setTimeout(function () {
  console.log("2");
  process.nextTick(function () {
    console.log("3");
  });
  new Promise(function (resolve) {
    console.log("4");
    resolve();
  }).then(function () {
    console.log("5");
  });
});
process.nextTick(function () {
  console.log("6");
});
new Promise(function (resolve) {
  console.log("7");
  resolve();
}).then(function () {
  console.log("8");
});

setTimeout(function () {
  console.log("9");
  process.nextTick(function () {
    console.log("10");
  });
  new Promise(function (resolve) {
    console.log("11");
    resolve();
  }).then(function () {
    console.log("12");
  });
});
// 1
// 7
// 6
// 8
// 2
// 4
// 3
// 5
// 9
// 11
// 10
// 12
```

```js
Promise.resolve()
  .then(() => {
    console.log("1");
    throw "Error";
  })
  .then(() => {
    console.log("2");
  })
  .catch(() => {
    console.log("3");
    throw "Error";
  })
  .then(() => {
    console.log("4");
  })
  .catch(() => {
    console.log("5");
  })
  .then(() => {
    console.log("6");
  });
// 1
// 3
// 5
// 6
```

```js
function promise1() {
  console.log("pormise1");
  try {
    promise2().catch((err) => {
      console.log(`err1： ${err}`);
      // throw new Error(err);
      throw err
    }).catch(()=>{
    console.log(`err3:${err}`);
    })
  } catch (err) {
    console.log(`err2:${err}`);
  }
}
function promise2() {
  console.log("pormise2");
  return new Promise((_, reject) => {
    reject(`promise3 error`);
  });
}
console.log("script start");
setTimeout(() => {
  console.log("setTimeout");
}, 0);
promise1();
new Promise((resolve) => {
  console.log("promise4");
  resolve();
}).then(() => {
  console.log("promise5");
});
console.log("script end");


// console.log("script start");
//   console.log("pormise1");
//   console.log("pormise2");
//   console.log("promise4");
// console.log("script end");

//     console.log(`err1： promise3 error`);
//     console.log(`err2: promise3 error`);
//   console.log("promise5");
```