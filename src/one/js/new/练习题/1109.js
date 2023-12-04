const obj = {
  name: '张三',
  age: 18,
  sex: '男',
  address: '北京市',
  hobby: ['吃饭', '睡觉', '打豆豆'],
  getInfo: function () {
    console.log(this.name, this.age, this.sex, this.address, this.hobby)
  }
}
 console.log(Object.entries(obj));