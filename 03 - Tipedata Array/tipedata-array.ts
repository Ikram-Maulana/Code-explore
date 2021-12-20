export {};

// ! Array
// Tipe array pertama
let name: string[] = ["Ikram", "Maulana"];
// Tipe array kedua
let numbers: Array<number> =  [1, 2, 3, 4, 5];
console.log(name[1]);
console.log(numbers[4]);

// ! Error
// ! console.log(numbers[100]);

// ! Tipe data Tuple
// using | undefined or ?: can fixed error "The operand of a 'delete' operator must be optional" in typescript 4
type Student = [string | undefined, string | undefined, number | undefined]
let student: Student = ["1001", "Ikram", 10000000];
let product: [string, number] = ["Handphone", 10000000];
console.log(student[1]);
console.log(product[1]);

// ! Error
// ! console.log(students[100]); pengecekan akan lebih bagus

// ! Mengubah data array dan tuple
name[1] = "Rudi"; 
console.log(name[1]);

// ! Tuple error
// ! product[1] = "Samsung"; because product[1] is number
product[1] = 5000000;
console.log(product[1]);

// ! Kondisi awal jika array kosong using push
// ! Array itu dynamic, Tuple itu Fixed
let names: Array<string> = [];
names.push("Ikram");
names.push("Maulana");
console.log(names);

names.push("Rudi");
console.log(names);

// ! Menghapus data Array dan Tuple
delete names[0];
console.log(names);

console.log(student);
delete student[0];
console.log(student);