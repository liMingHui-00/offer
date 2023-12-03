// constructor 有两个作用，一是判断数据的类型，
console.log((2).constructor == Number);
console.log("2".constructor == String);
console.log([2].constructor == Array);
console.log(function name(params) {}.constructor == Function);
console.log({}.constructor == Object);
console.log(true.constructor == Boolean);
// 二是对象实例通过 constructor 对象访问它的构造函数。
// 需要注意，如果创建一个对象来改变它的原型，constructor就不能用来判断数据类型了：
function fn() {}
fn.prototype = new Array();
const f = new fn();

console.log(f.constructor == Array); //true
console.log(f.constructor == Function); //false
console.log(f instanceof Array); //true
console.log(f instanceof Function); //false);
