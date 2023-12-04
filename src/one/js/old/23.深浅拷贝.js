// const arr = [{name:'tom'},{name:'lisi'}]
// // 浅拷贝
// const arr2 = arr.slice()
// console.log(arr2 === arr);
// arr[0]='wangwu'
// console.log(arr[0]);
// console.log(arr2[0]);
// 深拷贝
// const arr3 = structuredClone(arr)//在html中不会报错
// arr[0].name='wangwu'
// console.log(arr3[0].name);

// const fxArr = ["One", "Two", "Three"]
// const fxArrs = fxArr.slice()

// console.log(fxArr ===fxArrs) 
// fxArr[1] = "love";
// console.log(fxArr);//   ["One", "love", "Three"]
// console.log(fxArrs) //["One", "Two", "Three"]


// let name1 = '1'
// let name2 = name1
// name1 = '2'
// console.log(name1,name2) //2 1 

// let arr = [1, 2, 3]
// let  arr2 = arr
// arr = 4
// console.log(arr); //4
// console.log(arr2) // [1, 2, 3]

// let arr = [1, 2, 3]
// let  arr2 = arr
// arr[0] = 4
// console.log(arr); // [4, 2, 3]
// console.log(arr2) //[4, 2, 3]
// console.log(arr === arr2) //true;



// let arr = [1, 2, {name: 'zyy'}]
// let arr1 = arr

// arr1[0] = 0
// console.log(arr) // [0 , 2, {name: 'qjw'}]

// arr1[2].name = 'qjw'
// console.log(arr) //[0, 2, {name: 'qjw'}]

let arr2 =[1,2,3]
let arr = [...arr2]
arr.push(4)
console.log(arr2,arr);