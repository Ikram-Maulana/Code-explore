const {
  MongoClient
} = require('mongodb');
// Require object id
const ObjectID = require('mongodb').ObjectId;

const uri = 'mongodb://127.0.0.1:27017';
const dbName = 'wpu';

// Instantiate MongoClient
const client = new MongoClient(uri);

client.connect((err, client) => {
  if (err) {
    return console.log('Koneksi gagal');
  }

  // Select Database
  const db = client.db(dbName);

  // Insert a single document to collection mahasiswa
  // const collection = db.collection('mahasiswa');
  // collection.insertOne({
  //   nama: 'Sandhika',
  //   email: 'sandhika@gmail.com'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Gagal menambahkan data!');
  //   }
  //   console.log(result);
  //   client.close();
  // });

  // Insert many documents to collection mahasiswa
  // const collection = db.collection('mahasiswa');
  // collection.insertMany([{
  //     nama: 'Galih',
  //     email: 'galih@gmail.com'
  //   },
  //   {
  //     nama: 'WPU',
  //     email: 'wpu@gmail.com'
  //   }
  // ], (err, result) => {
  //   if (err) {
  //     return console.log('Gagal menambahkan data!');
  //   }
  //   console.log(result);
  //   client.close();
  // });

  // Read data from collection mahasiswa
  // const collection = db.collection('mahasiswa');
  // collection.find().toArray((err, result) => {
  //   if (err) {
  //     return console.log('Gagal membaca data!');
  //   }
  //   console.log(result);
  //   client.close();
  // });

  // Read data from collection mahasiswa by criteria
  // const collection = db.collection('mahasiswa');
  // collection.find({
  //   nama: 'Ikram Maulana'
  // }).toArray((err, result) => {
  //   if (err) {
  //     return console.log('Gagal membaca data!');
  //   }
  //   console.log(result);
  //   client.close();
  // });

  // Update data in collection mahasiswa by id
  // const collection = db.collection('mahasiswa');
  // collection.updateOne({
  //   _id: ObjectID('62233169581eb9d545ceac22'),
  // }, {
  //   $set: {
  //     nama: 'Amalia'
  //   }
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Gagal mengupdate data!');
  //   }
  //   console.log(result);
  //   client.close();
  // });

  // Update many data in collection mahasiswa by criteria
  // const collection = db.collection('mahasiswa');
  // collection.updateMany({
  //   nama: 'Galih'
  // }, {
  //   $set: {
  //     nama: 'Galih Maulana'
  //   }
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Gagal mengupdate data!');
  //   }
  //   console.log(result);
  //   client.close();
  // });

  // Delete single data in collection mahasiswa
  // const collection = db.collection('mahasiswa');
  // collection.deleteOne({
  //   _id: ObjectID('62235db7f9bfde960454d65a'),
  // }, (err, result) => {
  //   if(err) {
  //     return console.log("Gagal menghapus data!");
  //   }
  //   console.log(result);
  //   client.close();
  // });

  // Delete Many data in collection Mahasiswa
  const collection = db.collection('mahasiswa');
  collection.deleteMany({
    nama: 'Galih Maulana'
  }, (err, result) => {
    if (err) {
      return console.log('Gagal menghapus data!');
    }
    console.log(result);
    client.close();
  });

});