// slice()
// ...
// 这是对于数组来说的  都是浅复制
// 对于对象来说
const obj = {
    name:'孙悟空'
    ,age:18
}
const obj2 = Object.assign({}, obj)
console.log(obj2);  // 目标对象   被复制的对象    把被复制的对象复制到目标对象中  {name: '孙悟空', age: 18}
console.log(obj===obj2); //false
const obj3 = {...obj2,name:'猪八戒'}//后面的属性会覆盖前面的
console.log(obj3);