// Core Modules
// File System
const fs = require('fs');

// Read file (asynchronous)
fs.readFile('data/test.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});