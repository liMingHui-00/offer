// isNaN()会先把参数转换成数值类型 然后在判断是否是NaN
// console.log(isNaN({})) // true   非数字值传入也会返回true 会影响判断
// console.log(isNaN("55")) //false
// console.log(isNaN("a")) //true
//后者是先判断你是不是数值类型再判断你是不是NaN
//Number.isNaN() 方法用于判断传递的值是否为 NaN，并且检查其类型是否为 Number，如果值为 NaN 且类型为 Number，则返回 true，否则返回 false。
console.log(Number.isNaN({}))
console.log(Number.isNaN("55"))
console.log(Number.isNaN(0 / 0))
