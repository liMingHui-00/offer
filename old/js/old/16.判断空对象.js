const obj = {
  name: "name",
}
if (JSON.stringify(obj) === "{}") {
  console.log("空对象")
}
console.log(JSON.stringify(obj))
console.log(Object.keys(obj).length)
console.log(Object.keys(obj) instanceof Array)
const type = Object.keys(obj)
console.log(Object.prototype.toString.call(type))
