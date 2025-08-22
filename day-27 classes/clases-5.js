
class Car {
  constructor(brand, name, year) {
    this.brand = brand;
    this.name = name;
    this.year = year;
  }

  get carManufacturedYear() {
    return this.year;
  }
}

const car = new Car("BMW", "M5", 2023);

console.log(
  "car Details: " +
    "i have " +
    car.brand +
    " " +
    "and model is  " +
    car.name +
    " " +
    "which is manufactured  in " +
    car.carManufacturedYear
);