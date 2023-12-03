let arr = [1,5,6,3,4,1,5,3,1]
console.log(arr.filter((item,index,arr)=>{
  console.log(index);
    return arr.indexOf(item)===index
}));
