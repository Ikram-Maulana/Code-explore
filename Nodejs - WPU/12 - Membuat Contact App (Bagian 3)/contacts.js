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

const loadContact = () => {
  const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
  const contacts = JSON.parse(fileBuffer);
  return contacts;
}

const simpanContact = (nama, email, noHP) => {
  // Writing to file
  const data = {
    nama,
    email,
    noHP
  };
  // const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
  // const contacts = JSON.parse(fileBuffer);
  const contacts = loadContact();

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

const listContact = () => {
  const contacts = loadContact();

  console.log(chalk.bold.cyan.inverse('Daftar Kontak : '));
  contacts.forEach((contact, i) => {
    console.log(`${i+1}. ${contact.nama} - ${contact.noHP}`);
  });
}

// Make detailContact from name
const detailContact = (nama) => {
  const contacts = loadContact();

  // Find contact by name using lowercase
  const contact = contacts.find(contact => contact.nama.toLowerCase() === nama.toLowerCase());

  if (!contact) {
    console.log(chalk.bgRed.black.bold(`${nama} tidak ditemukan dalam kontak!`));
    return false;
  }

  console.log(chalk.bold.cyan.inverse(`${contact.nama}`));
  console.log(`${contact.noHP}`);
  if (contact.email) {
    console.log(`${contact.email}`);
  }
}

const deleteContact = (nama) => {
  const contacts = loadContact();

  // Find contact by name using lowercase
  const contact = contacts.find(contact => contact.nama.toLowerCase() === nama.toLowerCase());

  if (!contact) {
    console.log(chalk.bgRed.black.bold(`${nama} tidak ditemukan dalam kontak!`));
    return false;
  }

  // Remove contact by name
  const newContacts = contacts.filter(contact => contact.nama.toLowerCase() !== nama.toLowerCase());

  // Write to file
  fs.writeFileSync('data/contacts.json', JSON.stringify(newContacts));
  console.log(chalk.bgGreen.black.bold(`Data contact ${nama} berhasil dihapus!`));
}

module.exports = {
  simpanContact,
  listContact,
  detailContact,
  deleteContact
};