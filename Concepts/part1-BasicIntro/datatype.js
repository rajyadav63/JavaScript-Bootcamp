// Variable
// var, let & const

// 1.var : functional & global scope
// var num = 22;
// console.log(num);

// function add(a, b) {
//   num = num + a + b;
//   console.log(num);
//   var c = 44;
//   console.log(c);
// }

// add(2, 3);
// console.log(c); //error cuz c is inside function

// 2.let

let a = 3;

{
  let b = 4;
  console.log(b);
  console.log(a);
}

//3.const
const g = 9.8;
console.log(g);
g = 4.4;
console.log(g);

//Datatypes
//1. String
let name = "Razz";
