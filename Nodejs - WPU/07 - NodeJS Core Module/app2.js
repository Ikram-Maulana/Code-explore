// Core Modules
// File System
const fs = require('fs');

// write string to file (asynchronous)
fs.writeFile('data/test.txt', 'Hello World secara asynchronous!', err => {
  if (err) {
    console.log(err);
  } else {
    console.log('File written successfully');
  }
});