// const fs = require('fs'); // core module
// const cetakNama = require('./coba.js'); // local module
// const moment = require('moment'); // npm module
const {
  cetakNama,
  PI,
  mahasiswa,
  Orang
} = require('./coba.js'); // local module

console.log(cetakNama('Ikram Maulana'));
console.log(PI);
console.log(mahasiswa.cetakMhs());
console.log(new Orang());