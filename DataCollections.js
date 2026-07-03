/*const users = [
    { id:1, name: "Alice", active: true },
    { id:2, name: "Bob", active: false},
];

const activeNames = users
    .filter((user) => user.active)
    .map((user) => console.log(user.name));

const numbers = [1,2,3,4,5];
const printNumbers = numbers.map((i) => console.log(i));*/

const students = [
    {id: 1, name: "Steve", age:14, marks: 80, grade: "pass"},
    {id: 1, name: "Paul", age:14, marks: 72, grade: "pass"},
    {id: 1, name: "Josh", age:14, marks: 50, grade: "pass"},
    {id: 1, name: "Alice", age:14, marks: 34, grade: "fail"},
    {id: 1, name: "Ben", age:14, marks: 64, grade: "pass"},
];

const activeNames = students
    .filter((student) => student.grade == "pass")
    .map((student) => console.log(student.name));