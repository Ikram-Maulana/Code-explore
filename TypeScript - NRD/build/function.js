"use strict";
// ! Tipe data pada balikan function
function getName() {
    return "Hello, my name is Ikram Maulana";
}
console.log(getName());
function getAge() {
    return 21;
}
console.log(getAge());
// ! Kalau void tidak boleh ada return
function printName() {
    console.log("Print name");
}
printName();
/** ===================================================================== */
// ! Argumen dalam function
function multiply(val1, val2) {
    return val1 * val2;
}
const result = multiply(3, 10);
console.log(result);
const add = (val1, val2) => {
    return val1 + val2;
};
const ttl = add(20, 10);
console.log(ttl);
/** ===================================================================== */
// ! Default Parameter
const fullNames = (first, last = "Maulana") => {
    return `${first} ${last}`;
};
console.log(fullNames("Ikram"));
