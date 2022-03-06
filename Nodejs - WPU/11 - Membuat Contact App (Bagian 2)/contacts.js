// Core modules
// Mixing filesystem and readline
const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');

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

const simpanContact = (nama, email, noHP) => {
  // Writing to file
  const data = {
    nama,
    email,
    noHP
  };
  const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
  const contacts = JSON.parse(fileBuffer);

  // Duplicate Checker
  const duplicate = contacts.find(contact => contact.nama === nama);
  if (duplicate) {
    console.log(chalk.bgRed.black.bold('Kontak sudah terdaftar, gunakan nama lain!'));
    return false;
  }

  // check email
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.bgRed.black.bold('Email tidak valid!'));
      return false;
    }
  }

  // check noHP
  if (!validator.isMobilePhone(noHP, 'id-ID')) {
    console.log(chalk.bgRed.black.bold('No HP tidak valid!'));
    return false;
  } 

  contacts.push(data);

  fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
  console.log(chalk.bgGreen.black.bold('Terimakasih telah menambahkan data anda'));
};

module.exports = {
  simpanContact
};