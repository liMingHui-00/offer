class Person {
    name='lisi'
    sayhello(){
        console.log(this.name);
    }
}
console.log( typeof Person);//function
const p = new Person()
console.log(p);
console.log(p.sayhello());
console.log(
p.__proto__ ===Person.prototype

);