// 生成介于最小值和最大值之间的随机数：
// function getRandomNumber(min, max) {
// //  0          5    2       3.541
// console.log(Math.floor( Math.random()*(max-min)+min))  ;
// }
// getRandomNumber(1,2)

// // 04  展开 嵌套数组的数组
// function flatten(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       result = result.concat(flatten(arr[i]));
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// const arr = flatten([[1,2,3],[4,5,[6,7]]])
// console.log(arr);// [1, 2, 3, 4, 5, 6, 7]

// function flattenArray(array) {
//   return array.flat();
// }
// const arr2 = flattenArray([[1,2,3],[4,5,[6,7]]])
// console.log(arr2);  //[1, 2, 3, 4, 5, Array(2)]

// 将字符串转换为字符数组
// function stringToArray(str) {
//   return str.split('');
// }
// console.log(stringToArray('123')); //  ['1', '2', '3']

function stringToArray(str) {
  return Array.from(str);
}
console.log(stringToArray('zxcv'));