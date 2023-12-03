// push()  pop()  unshift() shift()  splice()
// const arr = [1, 2, 3]
// arr.push(9)
// console.log(arr);  //[1, 2, 3, 4, 5, 9]
// arr.pop()//删除最后一个
// console.log(arr); //[1, 2, 3, 4, 5]
// arr.unshift(0)//向第一个添加
// console.log(arr);
// arr.shift()//删除第一个

// splice()  可以删除  添加  插入
// arr.splice(1,2) //删除 [1]
// arr.splice(1,1,5,6,7) //替换 [1, 5, 6, 7, 3]
// arr.splice(1,0,5,6,7) //插入 [1, 5, 6, 7, 5, 6, 7, 3]

// console.log(arr);
// !  数组去重
// const arr = [1,2,2,2,2,2,1,4,6,7,3,2,3,4,5,6,7]
// for (let i = 0; i < arr.length; i++) {
//     // 获取当前元素后面的值
//     for(let j =i+1 ;j<arr.length;j++)
//     {
//         // 判断两个元素是否相等
//         if (arr[i]===arr[j]) {
//             // 删除一个
//             arr.splice(j,1)
//             j--

//         }
//     }
// }
// console.log(arr);

// const arr = [1,2,2,2,2,2,1,4,6,7,3,2,3,4,5,6,7]

// for (let i = 0; i < arr.length; i++) {
//     const index =  arr.indexOf(arr[i],i+1) ;
//    if (index !== -1) {
//     arr.splice(index,1)
//     i--
//    }
// }
// console.log(arr);
// console.log(arr.indexOf(-8));
// !数组排序
// 冒泡排序
// const arr = [5, 7, 6, 9, 2, 1, 3, 4]
// for (let j = 0; j < arr.length; j++) {
//   for (let i = 0; i < arr.length-1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       let tep = arr[i]
//       arr[i] = arr[i + 1]
//       arr[i + 1] = tep
//     }
//   }
// }

// console.log(arr)
// 选择排序
// const arr = [5, 7, 6, 9, 2, 1, 3, 4]
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i+1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             let tep = arr[i]
//             arr[i] = arr[j]
//             arr[j] =tep
            
//         }
//     }
    
// }
// console.log(arr);

//push()
// let arr = [1, 2, 3]
// // arr.push(4)
//   arr.concat(4, 5, 6)
// console.log(arr);


let numbers = [1, 2, 3];
let mapResult = numbers.map(item => item * 2);
console.log(mapResult)