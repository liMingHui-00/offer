<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>

### 8.如何获取安全的undefined

```tex
因为 undefined 是一个标识符，所以可以被当作变量来使用和赋值，但是这样会影响 undefined 的正常判断。表达式 void ___ 没有返回值，因此返回结果是 undefined。void 并不改变表达式的结果，只是让表达式不返回值。因此可以用 void 0 来获得 undefined。
```

![image-20230911140725129](C:\Users\李明辉\AppData\Roaming\Typora\typora-user-images\image-20230911140725129.png)

结果

![image-20230911140837149](C:\Users\李明辉\AppData\Roaming\Typora\typora-user-images\image-20230911140837149.png)

### 13.||与&&.js

```txt
对于||来说，
	console.log(true || false)     //true
	看两个条件  
	||  只要两个条件中 有true  || 结果就是true  那么就返回第一个操作数的值
	如果条件判断结果为true 则返回第一个操作值的结果  
	
	如果条件判断结果为false 返回第二个操作数的值
对于&&来说
	如果条件的判断结果为true 则返回第二个操作数的值
	如果               false 返回第一个操作数的值
```

```js
console.log(true || true) //true
console.log(false || true) //true
console.log(true || false) //true
console.log(false || false) // false
console.log()
if (0 || 0) {
  console.log("表达式为true")
} else {
  console.log(+0 || -0)
  console.log("表达式为false")
}
```

### 16.js的包装类型

```js
if (new Boolean(true)) {
  console.log("new Boolean(true)") //new Boolean true
}
if (new Boolean(false)) {
  console.log("new Boolean(false)") // new Boolean false
}

if (Boolean(true)) {
  console.log("Boolean true") // Boolean true
}

if (Boolean(false)) {
  console.log("Boolean false") // 无输出
}
if (new Boolean(null)) {
  console.log("new Boolean(null)") // new Boolean(null)
}
if ({}) {
  console.log("true") // true
}
if ([]) {
  console.log("true") // true
}
if (undefined) {
  console.log("true") // 无输出
}
var a = Boolean(null)
console.log(a) // false
```

Boolean 前面带有new 时 表明为对象类型，只要这个对象不等于null undefined 那么他就为真，所以下面的if语句就为真 ， 都会有输出。

不带new 就是为true或者false 

### 17.判断空对象

```js

```

