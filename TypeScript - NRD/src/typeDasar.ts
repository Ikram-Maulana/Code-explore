// ! String
let firstName: string = "Ikram";
let lastName: string = "Maulana"

let fullName: string = `Hello ${firstName} ${lastName}`;
console.log(fullName);

// ! Number
let umur: number = 21;
console.log(umur);

// ! Boolean
let isMarried: boolean = false;
console.log(isMarried);

// ! Any
let heroes: any = "Iron Man";
console.log(heroes);
heroes = 3000;
console.log(heroes);

// ! Union Type
// 6285156
// 085156 -> nilai 0 pasti akan auto terhapus makanya pake union
let phone: number | string;
phone = 6285156;
console.log(phone);
phone = "0851565";
console.log(phone); 
