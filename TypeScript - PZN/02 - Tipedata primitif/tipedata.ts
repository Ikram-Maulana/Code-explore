// ! Using ts-node for development mode, but you should already installed typescript
export {};

// Boolean
let isMarried: boolean = false;
console.log(isMarried);

// ! Error
// ! isMarried = "Ikram";

// Number
// Decimal, Hexa, Binary, Octal
let Age: number = 21;
console.log(Age);

// ! Error
// ! age = true;

// String
let firstName: string = "Ikram";
let lastName: string = 'Maulana';
let fullName: string = firstName + " " + lastName;

// ! Error
// ! lastName = false;

let sayHello: string = `Hello ${fullName}, Selamat Pagi`;
console.log(sayHello);