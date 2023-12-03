const form = {
    name:'lisi'
    ,age:20
    ,gender:'男'
}
form.__proto__ ={
    phone:'155125'
}
const cloneForm =structuredClone(form)
console.log(form,cloneForm);