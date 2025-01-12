const Person = {
  name: "Raju",
  age: 23,
  degree: "HA",
};

let DOB = function getDOB(age) {
  new Date().getFullYear() - age;
};
console.log(DOB);
