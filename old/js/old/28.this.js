// function fn() {
//     console.log(this);

// }
// fn()
// const obj = {
//     name:'孙悟空'
// }
// obj.test=fn;
// obj.test()
// function name() {
//     let a= 'name---> a'; 
//      () =>  {
//         let a= '---> a'; 
//         console.log(this); 
//     }
// }
// name();

// 	var obj = {
// 		a:1,
// 		c:2,
// 		say:function(a){
//             console.log("this1: "+this);
// 			var sayA = function(a){
// 				console.log("this2: "+this);
// 				this.a = a;
// 			};
//             function sayC(){
//                 console.log("this3: "+this);
//             }
// 			sayA(a);
// 			sayC()
// 		}
// 	}
// 	obj.say(3);//  this1 object   this2 window  window.a =3  this3 window  
// 	console.log(obj.a+"  "+obj.c); //1 2 
// 	console.log(window.a+"  "+window.c); // 3 undefined


        // function Person(name,age){
            // this.name = name;
            // this.age = age;
        // }
        // var person1 = new Person("张三",18);
        // var person2 = Person("李四",12); //相当于函数执行，但是没有返回值 所以person2为undefined
        // console.log(person1);//{name: "张三",age: 18}
        // console.log(person2); //undefined
        // console.log(person1.name,person1.age);
        // console.log(window.name,window.age);//为什么window中有name和age属性可以打印？
        // 因为Person(“李四”,12)相当于window.Person(“李四”,12)，所以Person函数执行时，将name和age属性添加到window中去了
 

        // function Test(a, b) {
        //     this.a = a;
        //     this.b = b;
        //     this.say = function (a, b) {
        //         this.a = a;
        //         this.b = b;
        //         console.log(this);
        //         console.log(a, b);
        //     }
        // }
        // var obj1 = new Test(1, 1);
        // console.log(obj1.a, obj1.b);// 1 1 
        // obj1.say();//Test{a:undefined b:undefined say:f} undefined undefined
        // console.log(obj1.a, obj1.b);//undefined undefined
        // var obj2 = { a: 2, b: 2 };
        // obj1.say(4, 4) //a:4 b:4 Test{a:4 b:4 say:f}
        // console.log(obj1.a,obj1.b);
        // console.log("------------");
        // obj1.say.call(obj2, 3, 3);
        // // 通过call方法传递参数时，函数的实参直接在第一个参数后面一个个的列出来
        // obj1.say.apply(obj2,[4,4])
        // // 而apply传递参数时 函数的实参需要放在数组中
        // console.log(obj2.a + "--" + obj2.b);// 3 3
      

        // function test(){
        //     let age = "张三";
        //     console.log(this.age);
        //     console.log(this);
        // }
        // test();

// 为什么没有打印出来age 因为 test是以函数的形式调用的 这里的this是window 所以this.age相当于在全局对象上访问age 但是window上没有age属性，所以就是undefined


        // var obj = {
        //     name:"张三",
        //     sayName:function(){
        //         console.log(this);
        //         console.log(this.name);
        //         function show(){
        //             console.log(this);
        //         }
        //         show()
        //     }
        // }
        // obj.sayName()// this 是obj this.name 张三 show()this  window 
        // window.obj.sayName();//obj本来就在window中，与上面的结果一样
  

        // var obj = {
        //     name:"小明",
        //     objInner:{
        //         name:"小红",
        //         sayName:function(){
        //         console.log(this);
        //         console.log(this.name);
        //         }
        //     }
        // }
        // obj.objInner.sayName();  //{name: '小红', sayName: ƒ}  小红

//         let obj = {performance:{
//             age : 18,
//             name:'lisi' ,
//             sayHello(){
//                 console.log(this.name);
//             }
//         }}
//         obj.performance.sayHello(); //
// const obj2 = { name:'wangwu'}
// const newFn = obj.performance.sayHello.bind(obj2);
// newFn()
function fn(a,b,c) {
    console.log(this+ a + ' ,' + b + ' ,' + c);
    
}
fn(1,2,3);
const obj = { name:'lisi' };
fn.bind(obj,4,5,6)()