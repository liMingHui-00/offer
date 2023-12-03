function person() {
    console.log( "name:"+this.name );
}
let obj = {
    name:'lisi'
}
/******************************************/
let obj2 ={
    name:'lisi'
    ,person(){
        console.log( "name:"+this.name );
    }
}
// person.call(obj)
// obj2.person()
Function.prototype.newCall=function(obj){
    obj.p= this
    obj.p()
    delete obj.p
    console.log(this);
}
person.newCall(obj)