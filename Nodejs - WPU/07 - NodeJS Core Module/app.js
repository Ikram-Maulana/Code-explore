// Core Modules
// File System
const fs = require('fs');

// write string to file (synchronous) using try catch
// !fs.writeFileSync('data/test.txt', 'Hello World secara synchronous!'); tidak akan berjalan dikarenakan tidak dapat membuat folder otomatis, itu sintaksnya berbeda lagi memakai fs.mkdirSync('data'); atau fs.mkdir('data', err => {});
try {
  fs.writeFileSync('Data/test.txt', 'Hello World secara synchronous!');
  console.log('File written successfully');
} catch (err) {
  console.log(err);
}