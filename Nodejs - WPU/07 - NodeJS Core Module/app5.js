// Core Modules
// Readline
const readline = require('readline');

// !Create interface object
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// !Create question
// rl.question('What is your name? ', (answer) => {
//   console.log(`Hello ${answer}`);
//   rl.close();
// });

// !Create 2 question asking name and phone number
rl.question('What is your name? ', (name) => {
  rl.question('What is your phone number? ', (number) => {
    console.log(`Terimakasih ${name} sudah menginputkan ${number} sebagai nomor hp anda`);
    rl.close();
  });
});