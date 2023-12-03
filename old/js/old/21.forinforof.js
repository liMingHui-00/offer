// function foo() {
//     Array.prototype.forEach.call(arguments,a => console.log(a))
// }
// foo()
// console.log(Object.prototype.toString(foo));
 const obj = {
    name: 'foo',
    age:55
 }

for (const key in obj) {
//    console.log(key, obj[key]);
}
const arr = [6,7,8,9]
 for (const iterator of arr) {
    console.log(iterator);
 }