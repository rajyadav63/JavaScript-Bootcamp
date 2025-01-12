let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};

// console.log(car.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let p1 = new Person("Razz", 24);
let p2 = new Person("Raju", 23);
// console.log(p1);

//Protypel chain

function Student(name, roll) {
  this.name = name;
  this.roll = roll;
}

Student.prototype.study = function () {
  return `${this.name} roll no is ${this.roll}`;
};

const s1 = new Student("Razz", 22);
// console.log(s1.study());

//Class & Object

class Tech {
  constructor(name, stack) {
    this.name = name;
    this.stack = stack;
  }
  // function
  founder() {
    return `${this.name} has created ${this.stack}`;
  }
}

let t1 = new Tech("Arvind", "PixelAI");
// console.log(t1.founder());

//Inheritance
class Tesla extends Tech {
  driver() {
    return `Tesla is created by ${this.name} which is ${this.stack} car`;
  }
}

const model1 = new Tesla("Elon", "AI"); //Object created form Tesla

console.log(model1.driver());
console.log(model1.founder());
