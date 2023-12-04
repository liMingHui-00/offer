// forEach 遍历数组中的元素，为每一个元素执行回调 无返回值
const arr = [1, 2, 3, 4, 5]; 
const ret = arr.forEach((arrItem) => {
console.log(arrItem);
})
console.log(arr);
// map 遍历数组中的元素，为每一个元素执行回调，并返回一个新的数组，新数组的元素是回调函数的返回值
const arr2 = [1, 2, 3, 4, 5]; 
const ret2= arr.map((arrItem) => {
return arrItem 
})
console.log(ret2 ===arr2)
// 两者都能遍历数组中的元素，并为每个元素执行回调，但forEach没有返回值，map有返回值