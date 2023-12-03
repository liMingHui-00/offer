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
