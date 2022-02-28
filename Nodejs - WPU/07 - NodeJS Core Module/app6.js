// Core Modules
// Mixing between fileSystem and readline
const fs = require('fs');
const readline = require('readline');

// !Create interface object
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// !Create question and write to file json
rl.question('What is your name? ', (name) => {
  rl.question('What is your phone number? ', (number) => {
    const data = {
      name: name,
      phoneNumber: number
    };
    const fileBuffer = fs.readFileSync('data/contact.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer);
    contacts.push(data);
    fs.writeFileSync('data/contact.json', JSON.stringify(contacts));
    console.log('File written successfully');
    rl.close();
  });
});