
class Car {
  constructor(brand) {
    this.brand = brand;
  }

  static carColor() {
    return "car color is black";
  }
}

const carDetail = new Car("scropio");

console.log("car Color :", Car.carColor());



console.log("my car color is (err) :", carDetail.carColor());



class Person {
  constructor(name) {
    this.name = name;
  }

  static greeting(name) {
    return "Hello, " + name;
  }
}

const person1 = new Person("krushnal");