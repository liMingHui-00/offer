// 普通的对象用for of 遍历是会报错的 如果需要遍历的对象是类数组对象  用array.from转换成数组即可
let  obj = {
    0:'one',
    1:'two',
    length:2
}
obj= Array.from(obj)  //类数组对象也是对象 
console.log(Object.prototype.toString(obj));// object
console.log( obj instanceof(Object)); // true 

for (const iterator of obj) {
    console.log(iterator);
    
}