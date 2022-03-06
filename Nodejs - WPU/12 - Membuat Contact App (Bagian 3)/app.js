// Get argument from command line
const yargs = require('yargs');
const {
  simpanContact,
  listContact,
  detailContact,
  deleteContact
} = require('./contacts.js');

// yargs.command object
yargs.command({
  command: 'add',
  describe: 'Menambahkan kontak baru',
  builder: {
    nama: {
      describe: 'Nama Lengkap',
      demandOption: true,
      type: 'string'
    },
    email: {
      describe: 'Email',
      demandOption: false,
      type: 'string'
    },
    noHP: {
      describe: 'No Handphone',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    simpanContact(argv.nama, argv.email, argv.noHP);
  }
}).demandCommand();

// Add feature list contacts
yargs.command({
  command: 'list',
  describe: 'Menampilkan semua nama & no HP kontak',
  handler() {
    listContact();
  }
});

// Add feature detail contacts
yargs.command({
  command: 'detail',
  describe: 'Menampilkan detail sebuah kontak berdasarkan nama',
  builder: {
    nama: {
      describe: 'Nama Lengkap',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    detailContact(argv.nama);
  }
});

// Add feature delete contact
yargs.command({
  command: 'delete',
  describe: 'Menghapus sebuah kontak berdasarkan nama',
  builder: {
    nama: {
      describe: 'Nama Lengkap',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    deleteContact(argv.nama);
  }
});

yargs.parse();