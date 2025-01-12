const kiit = { cse: 7 };
const roorke = {
  area: 123,
  base: 67,
  __proto__: kiit,
};
const iitk = {
  salary: "40lpa",
  __proto__: roorke,
};

// console.log(kiit);
// console.log(`iitk `, iitk.__proto__);
// console.log(`roorke `, roorke.__proto__);

let toyota = { engine: "simple" };
let tesla = {
  driver: "AI",
  price: "$37K",
};

//instead of __proto__, we can use this
Object.setPrototypeOf(toyota, tesla);

console.log(tesla, Object.setPrototypeOf(toyota, tesla));
