/*
//Syntax
function callBack() {
  console.log("This is callback function");
}

function higherOder(func) {
  console.log("Higher order function");
  return func();
}

higherOder(callBack);
*/

//calculate area, diameter, cicumferences of circle without using HOF
let radius = [1, 2, 3];

// //area

// const calculateArea = function (radius) {
//   let output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// };

// //diameter
// const calculateDaimeter = function (radius) {
//   let output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * radius[i]);
//   }
//   return output;
// };

// //circumferences
// const calculateCrcm = function (radius) {
//   let output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * Math.PI * radius[i]);
//   }
//   return output;
// };

// console.log(calculateArea(radius));
// console.log(calculateDaimeter(radius));
// console.log(calculateCrcm(radius));

let c = 0;
//calculate area, diameter, cicumferences of circle using HOF

const calculateArea = function (radius) {
  return Math.PI * radius * radius;
};
const calculateDaimeter = function (radius) {
  return 2 * radius;
};
const calculateCrcm = function (radius) {
  return 2 * Math.PI * radius;
};

function mainFunction(radius, calculate) {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(calculate(radius[i]));
  }
  return output;
}

console.log(mainFunction(radius, calculateArea));
console.log(mainFunction(radius, calculateDaimeter));
console.log(mainFunction(radius, calculateCrcm));
