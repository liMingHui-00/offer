console.log(function name(params) {} instanceof Function); //true
console.log([2] instanceof Array); //true
console.log({} instanceof Object); //true
console.log(2 instanceof Number); //false
console.log("2" instanceof String); //false
console.log(true instanceof Boolean); //false
// instance of 只能正确判断引用数据类型，而不能判断基本数据类型。
