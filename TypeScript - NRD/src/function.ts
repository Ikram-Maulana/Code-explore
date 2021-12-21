// ! Tipe data pada balikan function
function getName():string {
  return "Hello, my name is Ikram Maulana";
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

/** ===================================================================== */

// ! Function as type
// type Name = (value: type) => returnType
type Tambah = (val1: number, val2: number) => number;
const add = (val1: number, val2: number): number => {
  return val1 + val2;
}
const ttl = add(20, 10);
console.log(ttl);

/** ===================================================================== */

// ! Default Parameter
const fullNames = (first: string, last: string = "Maulana") => {
  return `${first} ${last}`;
}

console.log(fullNames("Ikram"));