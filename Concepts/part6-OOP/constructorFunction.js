//constructor function is created

function Student(name, dp) {
  this.name = name;
  this.dp = dp;
  this.branch = function () {
    return `${this.name} is in ${this.dp} branch`;
  };
}

let st1 = new Student("Razz", "CSE");
console.log(st1.branch());

function Animal(species) {
  this.species = species;
  //this refers to obj being created here
}

//Adding a Method to the Prototype
Animal.prototype.eat = function () {
  return `${this.species} eat food`;
};

//creating object of Animal with species
const dog = new Animal("Dog");
console.log(dog.eat());

const cat = new Animal("cat");
console.log(cat.eat());

console.log(cat);
