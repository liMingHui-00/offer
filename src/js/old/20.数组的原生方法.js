// // const str = 'hello world';
// // console.log(str.to);
// const arr = [1,2,3,4,5,6,7,8,9]
// // console.log(  arr.toLocaleString());//hello world,world
// const initialValue =0
// const sum =  arr.reduce((previous,current)=>previous+current)


// console.log(sum);
// 将二维数组转换成一维数组
let arr = [[0,1],[2,3],[4,5],[6,7]]
let newArr = arr.reduce((previous,current)=>previous+current)
console.log(newArr);