class Car {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }

  start() {
    console.log("starting");
  }

  stop() {
    console.log("stopping");
  }
}

const myCar = new Car("Tesla", "latest");
myCar.start();
myCar.stop();
console.log(myCar);
