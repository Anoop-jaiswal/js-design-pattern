class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.fullName = function () {
      return this.firstName + " " + this.lastName;
    };
  }
}

const person = new Person("Anoop", "Jaiswal");
console.log(person.fullName());

//The Constructor Pattern is a design pattern in JavaScript that involves
// defining a constructor function which can be used to create objects
// with similar properties and methods.
// The constructor function acts as a blueprint or template for
// creating new objects of the same type.
