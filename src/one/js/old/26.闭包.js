// 闭包：能够访问到外部函数作用域中变量的函数
// function out() {
//     let num = 0;
//     return () => {
//         num = num + 1;
//         console.log(num);
//     }
// }
// let result = out();

// result();
// result();
// for (var i = 1; i <= 5; i++) {
//     ;(function(j) {
//       setTimeout(function timer() {
//         console.log(j)
//       }, j * 1000)
//     })(i)
//   }

// let name = 'lisi'
// function f1() {
//   let name = 'wang'
//   function f2() {
//     console.log(name);
//     // var name = "洪" // undefined
//     let name = "洪" //报错 Cannot access 'name' before initialization
//   }
//   f2();
// }
// f1();

// function out() {
//   let a = 111
//   let b = 222
//   return function inter() {
//     return a
//   }
// }
// console.dir(out());

// let a = 10
// function foo(){
//     console.log(a)
// }
// function bar() {
//   let a = 20
//     foo()
// }
// bar()  10

// (function(a) {
//   return (function(b) {
//     console.log(a);
//   })(1);
// })(0);  //0


// let i = 0
// function increase(){
//   i++
//   console.log(`courrent counter is ${i}`)
//   return i
// }
// increase() //1
// increase() //2
// increase() //3

// function out() {
//   const i = 0;
//   return function inter() {
//    console.log(i);
//   }
// }
// out()();


let count = 0;
 
 
// (function() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count);
//   }
//   console.log(count);
// })();

