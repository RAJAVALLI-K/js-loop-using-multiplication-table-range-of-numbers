// 3-Program to print multiplication table for the given range of numbers

var table = parseInt(prompt("Enter a number:"));
let number = 20;
for (let i = 0; i <= number; i++) {
    let value = i * table;
    console.log(+ i + '*' + table + '=' + value);
}
