// Get argument from command line
const yargs = require('yargs');
const {
  simpanContact
} = require('./contacts.js')

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
});

yargs.parse();






// const {tulisPertanyaan, simpanContact} = require('./contacts');

// const main = async () => {
//   const nama = await tulisPertanyaan('Masukkan nama anda : ');
//   const email = await tulisPertanyaan('Masukkan email anda : ');
//   const noHP = await tulisPertanyaan('Masukkan nomor HP anda : ');

//   simpanContact(nama, email, noHP);
// }

// main();