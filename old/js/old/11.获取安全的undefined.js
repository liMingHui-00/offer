var a = "4"
var undefined = "4"
console.log(undefined === a)
// 因为undefined是一个标识符，所以可以被当作变量来使用和赋值，但是这样会影响undefined的正常判断，表达式void 没有返回值，因此返回的结果是undefined void并不能改变表达式的结果 只是让表达式不返回值  因此可以用void 0 来代替undefined
const b = void 0
console.log(b)
