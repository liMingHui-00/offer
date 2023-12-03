let outObj = {
  inObj: {
    a: 1,
    b: 2,
  },
}
let newObj = { ...outObj }
newObj.inObj.a = 2
console.log(outObj)
