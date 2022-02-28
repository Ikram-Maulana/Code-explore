const {tulisPertanyaan, simpanContact} = require('./contacts');

const main = async () => {
  const nama = await tulisPertanyaan('Masukkan nama anda : ');
  const email = await tulisPertanyaan('Masukkan email anda : ');
  const noHP = await tulisPertanyaan('Masukkan nomor HP anda : ');

  simpanContact(nama, email, noHP);
}

main();

// // Asking question nama and nomorHP
// rl.question('Masukkan nama anda : ', (nama) => {
//   rl.question('Masukkan nomor HP anda: ', (nomorHP) => {
//     // Writing to file
//     const data = {
//       nama,
//       nomorHP
//     };
//     const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
//     const contacts = JSON.parse(fileBuffer);
//     contacts.push(data);
//     fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
//     console.log('Terimakasih telah menambahkan data anda');
//     // Closing the readline interface
//     rl.close();
//   });
// });