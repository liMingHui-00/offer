// let a = null;
// console.log(a);
// undefined 代表的含义是未定义，null 代表的含义是空对象。一般变量声明了但还没有定义的时候会返回 undefined，
// null主要用于赋值给一些可能会返回对象的变量，作为初始化。

// a = "555";
// console.log(a);
// let b;
// console.log(b); //undefined

// undefined 在 JavaScript 中不是一个保留字，这意味着可以使用 undefined 来作为一个变量名，
// 但是这样的做法是非常危险的，它会影响对 undefined 值的判断。我们可以通过一些方法获得安全的 undefined 值，比如说 void 0。

// 重新对undefined赋值
// var undefined = 1; console.log(undefined); //undefined

// 通过void 0 来设置安全的undefined
var safeUndefined = void 0;

console.log(safeUndefined === undefined); //true
let c;
console.log(c === safeUndefined); //true
