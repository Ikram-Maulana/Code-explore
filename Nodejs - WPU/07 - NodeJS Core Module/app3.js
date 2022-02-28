// Core Modules
// File System
const fs = require('fs');

// Read file (synchronous)
const data = fs.readFileSync('data/test.txt', 'utf-8');
console.log(data);