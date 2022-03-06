// Core modules
// Mixing filesystem and readline
const fs = require('fs');
const readline = require('readline');

// Creating a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Condition if directory doesn't exist using fs.existsSync
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// Condition if file contacts.json doesn't exist using fs.existsSync
const filePath = './data/contacts.json';
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, '[]', 'utf-8');
}

// Abstraction pertanyaan1 and pertanyaan2 into 1 function
const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (jawaban) => {
      resolve(jawaban);
    });
  });
}

const simpanContact = (nama, email, noHP) => {
  // Writing to file
  const data = {
    nama,
    email,
    noHP
  };
  const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
  const contacts = JSON.parse(fileBuffer);
  contacts.push(data);
  fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
  console.log('Terimakasih telah menambahkan data anda');
  // Closing the readline interface
  rl.close();
};

module.exports = {tulisPertanyaan, simpanContact};

// rl.question asking question nama and nomorHp using async await concept
// const pertanyaan1 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question('Masukkan nama anda : ', (nama) => {
//       resolve(nama);
//     });
//   });
// };

// const pertanyaan2 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question('Masukkan email anda : ', (email) => {
//       resolve(email);
//     });
//   });
// };