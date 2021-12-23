import ILaptop from "./ILaptop";
import * as Keyboard from "./Keyboard";

abstract class BaseLaptop<T> implements ILaptop<T> {
  nama: string;
  type: T;
  withNumeric: boolean;
  withTouchButton: boolean;

  constructor(nama: string, type: T, numeric: boolean, touchButton: boolean) {
    this.nama = nama;
    this.type = type;
    this.withNumeric = numeric;
    this.withTouchButton = touchButton;
  }

  a(): void {
    console.log(Keyboard.a());
  }

  b():void {
    console.log(Keyboard.b());
  }
}

export default BaseLaptop;