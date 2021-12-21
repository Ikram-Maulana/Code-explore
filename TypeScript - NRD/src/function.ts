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