//1. 数据转换
// 将对象中的某个属性提取出来形成一个新的数组
// const students = [
//   { name: "tom", age: 21 },
//   { name: "bob", age: 18 },
//   { name: "fred", age: 24 },
// ]
// const names = students.map((students) => students.name)
// console.log(names)
//将日期字符串数组转换成实际的日期对象数组
// const dateString = ['2020-02-10']
// const date = dateString.map((date) => new Date(dateString))
// console.log(date);
// 从学生对象数组中筛选出成绩优秀的学生
// const students = [
//   { name: "Alice", grade: 85 },
//   { name: "Bob", grade: 92 },
//   { name: "Charlie", grade: 78 },
// ]

// 筛选出成绩大于90
// const goodStudent = students.filter(student=>student.grade>=90)
// console.log(goodStudent);
// const student = goodStudent.map(stu=>stu.name)
// console.log(student);
// 将时间戳数组转换为可读的日期格式数组
// const timestamps = [1631932800000, 1632019200000, 1632105600000];
// const formattedDates = timestamps.map((timestamp) => new Date(timestamp).toLocaleDateString());
// console.log(formattedDates); // 输出: ['9/18/2021', '9/19/2021', '9/20/2021']

// 将数值数组格式化为货币形式
// const prices = [10, 20, 30];
// const formattedPrices = prices.map((price) => `$${price.toFixed(2)}`);
// console.log(formattedPrices); // 输出: ['$10.00', '$20.00', '$30.00']
// 从 API 响应数据中提取出特定属性形成新的数组
// const response = {
    // success: true,
    // data: [
    //   { id: 1, name: 'Apple' },
    //   { id: 2, name: 'Banana' },
    //   { id: 3, name: 'Orange' }
    // ]
//   };
    //提取到data中的name  形成一个新的数组
    // const dataName = response.data.map(name => name.name) 
    // console.log(dataName);
// 对字符串数组进行分割、合并和替换操作
// const strings = ['Hello,World', 'JavaScript,is,awesome'];

// const splitStrings = strings.map((str) => str.split(','));
// console.log(splitStrings); // 输出: [['Hello', 'World'], ['JavaScript', 'is', 'awesome']]

// const mergedStrings = strings.map((str) => str.replace(',', ' '));
// console.log(mergedStrings); // 输出: ['Hello World', 'JavaScript is awesome']

// 对数值数组进行计算和累加操作
const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map((num) => num * 2);
// console.log(doubledNumbers); // 输出: [2, 4, 6, 8, 10]

const sum = numbers.reduce((acc, num) =>  acc + num, 0);
console.log(sum); // 输出: 15

