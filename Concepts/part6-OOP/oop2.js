class Person {
  constructor(name, degree) {
    this.name = name;
    this.degree = degree;
  }

  study() {
    return `${this.name} study in ${this.degree} branch`;
  }
}

const person1 = new Person("Elon", "SpaceX");
// console.log(person1.study());

//Encapsulation
class BankAccount {
  #balance = 0; //this is encapsulated so can't accessed outside
  name = "Razz"; //this can be access from outside bc it not encapsulated

  netWorth() {
    return `$${this.#balance} in account`;
  }
}

let b1 = new BankAccount();
console.log(b1.netWorth());
console.log(b1.name);
console.log((b1.name = "Raju"));
