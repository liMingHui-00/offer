// function jiecheng(num) {
//   let result = 1
//   for (let i = 2; i <= num; i++) {
//     result = result * i
//   }
//   return result
// }
// console.log(jiecheng(10))
// function digui(num) {
//    if (num === 1) {
//       return 1
      
//    }
//    return   digui(num-1)*num
// }
// const result =  digui(5)
// console.log(result);
// 斐波那契数列
// function fib(num) {
//    if (num<=2) {
//       return 1
//    }
//    return fib(num-1)+fib(num-2)
   
// }
// console.log(fib(10)); // 55 
function fib(num) {
   if (num<=2) {
      return 1
   }
   let prev = 1
   let current = 1
   for (let i = 3; i <=num; i++) {
     let next = prev+ current
     prev = current
     current = next
     
      
   }
   return  current
}
console.log(fib(10)); //