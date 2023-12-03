// 给定一个十进制整数字符串，判断它是否是 4 的幂。

function changeNuber(str){
  let num = Number.parseInt(str);
  if (num < 1) {
    return false;
}
while (num % 4 === 0) {
    num = num / 4;
}
return num === 1;
}
console.log(changeNuber('70368744177664'));