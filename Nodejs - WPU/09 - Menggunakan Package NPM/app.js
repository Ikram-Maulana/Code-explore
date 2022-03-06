// import validator
const validator = require('validator');
// import chalk
const chalk = require('chalk');

// Validator email
console.log(validator.isEmail('ikram075@ummi.ac.id'));
// validator mobile phone
console.log(validator.isMobilePhone('081234567890', 'id-ID'));
// validator numeric
console.log(validator.isNumeric('12345a'));

// Chalk
console.log(chalk.black.italic.bgBlue('Hello World!'));
const nama = 'Ikram Maulana';
const pesan = chalk`Lorem, ipsum dolor {bgRed.black.bold sit amet} consectetur {bgGreen.italic.black adipisicing} elit. Ab, rem. Nama saya : ${nama}`;
console.log(pesan);