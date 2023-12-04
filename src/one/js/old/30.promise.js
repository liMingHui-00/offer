// // Promise  承诺 诺言
// let flag = false
// let giveCar = new Promise((resolve, reject) => {
//   //成功的话
//   if (flag) {
//     let car = {
//       color: "green",
//       price: "1000",
//     }
//     resolve(car)
//   } else {
//     let err = new Error("对不起，有点忙，忘记了")
//     reject(err)
//   }
// })
// let  testfn = function(){
//     giveCar.then((value) => {
//         console.log(value);
//     }).catch((err) => {
//         console.log(err.message);
//     });
// }
// testfn();

// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve('6')
//     console.log(2);

// }).then((res) => {
//     console.log(3);
//     console.log(res);
// });
// console.log(4);
// setTimeout(() => {
//     console.log(5);
// }, 0);

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log(1);
//         resolve('2')

//     }, 1000);
// })
// promise.then((res) => {
//     console.log(res);
// })
// promise.then((res) => {
//     console.log(res);
// });
// // 1 2 2 构造函数只执行一次，但then方法可以执行多次
// 手写promise
// 1.基本架构   pending, fulfilled,  rejected.

const myPromise = function (excutor) {
  let self = this
  self.status = "pending" //初始值
  self.value = null //成功时的值
  self.reason = null // 失败时的值
  //   7.添加两个容器 记录状态还没有改变时的回调函数
  self.onFulfilledCallback = []
  self.onRejectedCallback = []

  //    成功时调用的方法
  function resolve(value) {
    // 4.状态的变更
    if (self.status === "pending") {
      self.status = "fulfilled"
      self.value = value
      // 发布
      self.onFulfilledCallback.forEach((item) => item(value))
    }
  }
  //   失败时候调用的方法
  function reject(reason) {
    self.status = "rejected"
    self.reason = reason
    self.onRejectedCallback.forEach((item) => item(reason))
  }
  //   3.构造函数先执行一边
  try {
    excutor(resolve, reject)
  } catch (err) {
    reject(err)
  }
}
// 2.在原型上面添加then方法
myPromise.prototype.then = function (onFulfilled, onRejected) {
  // 5.状态发生改变调用then方法
  onFulfilled =
    typeof onFulfilled === "function"
      ? onFulfilled
      : function (data) {
          resolve(data)
        }
  onRejected =
    typeof onRejected === "function"
      ? onRejected
      : function (err) {
          throw err
        }

  // 6.订阅
  if (this.status === "pending") {
    this.onFulfilledCallback.push(onFulfilled)
    this.onRejectedCallback.push(onRejected)
  }
}
let demo = new myPromise((resolve, reject) => {
  console.log("手写promise")
  setTimeout(() => {
    resolve("lmh")
  }, 1000)
})
demo.then((res) => {
  console.log(res)
})
