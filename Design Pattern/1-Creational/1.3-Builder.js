// The Builder Pattern is a creational design pattern used to construct
//  complex objects step by step.
// It separates the construction of an object from its representation,
//  allowing the same construction process to create different representations.
//  This pattern is particularly useful when creating objects with many optional parameters
//  or when the creation process involves multiple steps.

class Car {
  constructor() {
    this.make = "";
    this.engine = "";
    this.color = "";
  }
}

class BuildCar {
  constructor() {
    this.car = new Car();
  }

  setMake(make) {
    this.car.make = make;
    return this;
  }

  setEngine(engine) {
    this.car.engine = engine;
    return this;
  }

  setColor(color) {
    this.car.color = color;
    return this;
  }
}

const builder = new BuildCar()
  .setMake("BMW")
  .setEngine("petrol")
  .setColor("red");

console.log(builder);
