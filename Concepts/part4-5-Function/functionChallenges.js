// function calculateTotal(price, quantity) {
//   let totalCost =  price * quantity;
//   return totalCost;
// }

// console.log(calculateTotal(23, 4););

const calculateTotal = (price, quantity) => {
  let totalCost = price * quantity;
  return totalCost;
};

// console.log(calculateTotal(23, 5));

//4.
function makeTea(typeOfTea) {
  return typeOfTea;
}

function processTeaOrder(func) {
  return func("early grey");
}

let tea = processTeaOrder(makeTea);
// console.log(tea);

/*
//5.write a function named `createTeaMaker` that return another fun. the returned fun should take one parameter,"teatype", and return a msg like "making green tea". store the returned fun in  a variable named 'teaMaker' and call it with 'green tea' in js
*/

function createTeaMaker() {
  return function (teatype) {
    return `Making ${teatype}`;
  };
}

let teaMaker = createTeaMaker();
// let result = teaMaker("green tea");
// console.log(result);

//Hand-on Challenge

function stringToNumber(input) {
  return Number(input);
}
let result = stringToNumber("2");
// console.log(typeof result);

function whatAmI(input) {
  return typeof `${input}`;
}
console.log(whatAmI(Number(2)));
