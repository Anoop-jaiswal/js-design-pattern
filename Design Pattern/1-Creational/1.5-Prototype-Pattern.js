// The Prototype Pattern is a creational design pattern that allows you
//  to create new objects by copying an existing object,
//  known as the prototype.
// This pattern is particularly useful when object creation is expensive
//  or when the exact configuration of an object is unknown until runtime.

class Animal {
  bark() {
    console.log("barking");
  }

  walk() {
    console.log("walking");
  }
}

class Dog {
  name = "husky";
  age = 10;
}

const myDog = new Dog();

Object.setPrototypeOf(myDog, Animal.prototype);

console.log(myDog.name);
myDog.bark();
