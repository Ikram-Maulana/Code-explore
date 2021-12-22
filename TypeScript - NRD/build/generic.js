"use strict";
// ! Generic adalah tipe data yang dinamis
function getData(value) {
    return value;
}
console.log("==========");
console.log(getData("Ikram").length);
console.log(getData(30).length); // Lengthnya tidak error maka solusinya pakai generic
console.log("==========");
// ! Generic -> kita kasih tau typenya apa biar lebih aman ga kaya yang diatas
function myData(value) {
    return value;
}
console.log(myData("Ikram").length);
console.log(myData(30));
console.log("==========");
// ! Generic using arrow function
// Kalau jsx Tnya harus extend unknown atau {} atau <T, >
const arrowFunc = (value) => {
    return value;
};
console.log(arrowFunc("Ikram Maulana").length);
console.log(arrowFunc(30));
console.log("==========");
