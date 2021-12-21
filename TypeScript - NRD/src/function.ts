// ! Tipe data pada balikan function
function getName():string {
  return "Hello, my name is ikram maulana";
}
console.log(getName());

function getAge(): number {
  return 21;
}
console.log(getAge());

// ! Kalau void tidak boleh ada return
function printName(): void {
  console.log("Print name");
}
printName();

/** ===================================================================== */

// ! Argumen dalam function
function multiply(val1: number, val2: number): number {
  return val1 * val2;
}
const result = multiply(3, 10);
console.log(result);
