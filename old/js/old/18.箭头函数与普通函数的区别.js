var id = "GLOBAL"
var obj = {
  id: "OBJ",
  a: function () {
    console.log(this.id)
  },
  b: () => {
    console.log(this.id)
  },
}
console.log(this)

obj.a() // 'OBJ'
obj.b() // 'GLOBAL'
