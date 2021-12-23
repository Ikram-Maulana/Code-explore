"use strict";
// ! Abstract class adalah sebuah class yang tidak bisa diinstansiasi langsung dari luar kelas itu sendiri melainkan harus mengextend sebuah class childnya
class Vehicle {
    startEngine() {
        console.log("Mesin Menyala");
    }
}
class Car extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 4;
    }
}
class Motorcycle extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 2;
    }
}
let car = new Car();
console.log(car.wheels);
car.startEngine();
let motorcycle = new Motorcycle();
console.log(motorcycle.wheels);
motorcycle.startEngine();
