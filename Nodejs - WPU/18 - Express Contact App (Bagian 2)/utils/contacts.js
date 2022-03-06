// Core modules
// Mixing filesystem and readline
const fs = require('fs');

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

const loadContacts = () => {
  const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
  const contacts = JSON.parse(fileBuffer);
  return contacts;
}

// Find Contact by name
const findContact = (nama) => {
  const contacts = loadContacts();
  const contact = contacts.find(contact => contact.nama.toLowerCase() === nama.toLowerCase());
  return contact;
}

// Rewrite JSON contacts.json with new data
const saveContacts = (contacts) => {
  const fileBuffer = JSON.stringify(contacts);
  fs.writeFileSync('data/contacts.json', fileBuffer, 'utf-8');
}

// Add new Contact data
const addContact = (contact) => {
  const contacts = loadContacts();
  contacts.push(contact);
  saveContacts(contacts);
}

// Check duplicate nama
const cekDuplikat = (nama) => {
  const contacts = loadContacts();
  const contact = contacts.find(contact => contact.nama.toLowerCase() === nama.toLowerCase());
  return contact;
}

module.exports = {
  loadContacts,
  findContact,
  addContact,
  cekDuplikat
};