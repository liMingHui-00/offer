var a = Object.prototype.toString;

console.log(a.call(2));
console.log(Object.toString(2));
console.log(a.call(true));
console.log(Object.toString(true));
console.log(a.call("str"));
console.log(a.call([]));
console.log(a.call(function () {}));
console.log("******" + Object.toString(function () {}));
console.log(a.call({}));
console.log(a.call(undefined));
console.log(a.call(null));
// 同样是检测对象obj调用toString方法，obj.toString()的结果和Object.prototype.toString.call(obj)的结果不一样，
// 这是为什么？

// 这是因为toString是Object的原型方法，而Array、function等类型作为Object的实例，都重写了toString方法。
// 不同的对象类型调用toString方法时，根据原型链的知识，
// 调用的是对应的重写之后的toString方法（function类型返回内容为函数体的字符串，Array类型返回元素组成的字符串…），
// 而不会去调用Object上原型toString方法（返回对象的具体类型），所以采用obj.toString()不能得到其对象类型，
// 只能将obj转换为字符串类型；因此，在想要得到对象的具体类型时，应该调用Object原型上的toString方法
