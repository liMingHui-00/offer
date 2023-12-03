// setTimeout(() => {

//   console.log(123);
//   setTimeout(() => {
//     console.log(789);
//   });
// });
// console.log(456);
// start c4  c7 c2 c5  c3 c6

console.log("start");

var f1 = setTimeout(() => {
  console.log("children2"); //宏任务
  Promise.resolve().then(() => {
    console.log("children3"); //宏任务 微任务
  });
}, 0);

var f2 = new Promise(function (resolve, reject) {
  console.log("children4"); //同步任务
  setTimeout(function () {
    console.log("children5"); //宏任务
    resolve("children6");
  }, 0);
}).then((res) => {
  // flag
  console.log("children7"); //微任务
  setTimeout(() => {
    console.log(res); // c6 宏任务 微任务
  }, 0);
});

// async function async1() {
//   //41352
//   console.log("1");
//   await async2();
//   console.log(2);
// }
// async function async2() {
//   console.log(3);
// }
// console.log(4);
// async1();
// console.log(5);
