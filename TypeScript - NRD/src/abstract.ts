// ! Abstract class adalah sebuah class yang tidak bisa diinstansiasi langsung dari luar kelas itu sendiri melainkan harus mengextend sebuah class childnya

abstract class Vehicle {
  abstract wheels: number;

  startEngine(): void {
    console.log("Mesin Menyala");
  }
}

class Car extends Vehicle {
  wheels:number = 4;
}

class Motorcycle extends Vehicle {
  wheels: number = 2;
}

let car = new Car();
console.log(car.wheels);
car.startEngine();

let motorcycle = new Motorcycle();
console.log(motorcycle.wheels);
motorcycle.startEngine();