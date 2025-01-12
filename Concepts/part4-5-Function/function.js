//Syntax
// function fun_name(){}

// eg
function sum(a, b) {
  return a + b;
}
let res = sum(2, 3);
console.log(res);

//function Expression
let ans = function (a, b) {
  return a * b;
};
console.log(ans(2, 4));

//arrow function
let ans2 = (a, b) => {
  return a * b;
};
console.log(ans2(4, 5));

// function orderTea(teaType) {
//   function confirmOrder() {
//     return "Order confirmed";
//   }
//   return confirmOrder();
//   //   let order = confirmOrder();
//   //   console.log(order);
// }

// let tea = orderTea("Milk tea");
// console.log(tea);
