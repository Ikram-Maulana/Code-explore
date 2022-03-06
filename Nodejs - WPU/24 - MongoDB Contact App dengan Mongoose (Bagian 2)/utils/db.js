// Require mongoose
const mongoose = require('mongoose');
// Connect mongoose
mongoose.connect('mongodb://127.0.0.1/wpu');

// // Add 1 data
// const contact1 = new Contact({
//   nama: 'Ikram Maulana',
//   nohp: '081234567890',
//   email: 'ikram@gmail.com'
// });

// // Save to Collection
// contact1.save((err) => {
//   if (err) {
//     console.log(err);
//   } 
//   console.log('Data berhasil disimpan');
//   mongoose.connection.close();
// });