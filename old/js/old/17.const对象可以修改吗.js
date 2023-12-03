// const 保证的并不是常量的值不能修改，而变量指向的那个内存地址不能改变
// 对于基本数据类型的数据 其值就保存在变量指向的那个内存地址，因此等同于常量
// 但对于引用类型的数据（主要是对象和数组）来说，变量指向数据的内存地址，保存的只是一个指针，const只能保证这个指针是固定不变的，至于它指向的数据结构是不是可变的，就完全不能控制了。
// const a = 1
// a = 2
// console.log(a) // Assignment to constant variable.
const obj = {
  name: "a",
  age: 44,
}
obj.name = "b"
console.log(obj)
obj = {
  name: "5",
}
console.log(obj) //Assignment to constant variable.
// const 限制了变量的指向，但不限制对象本身的内容
