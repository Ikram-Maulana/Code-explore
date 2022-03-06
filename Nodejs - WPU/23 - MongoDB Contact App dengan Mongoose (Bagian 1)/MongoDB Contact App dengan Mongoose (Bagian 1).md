# MongoDB Contact App dengan Mongoose (Bagian 1) 

## Implementasi Part 1
- Buat terlebih dahulu **folder baru**
- buat **app.js** dan lakukan **initialisasi**
- Install `express, express-ejs-layouts, ejs, nodemon` dan lakukan require
- Copy **get('/')** dari project sebelumnya
- Copy **public dan views** dari project sebelumnya
- Lakukan **setup** EJS
- Copy **get('/about')** dari project sebelumnya
- Copy **get('/contact')** dari project sebelumnya, **tapi tidak akan berjalan karena kita tidak mempunyai file json dan harus konek dulu ke MongoDB**

## Mongoose  
Dokumentasi mengenai mongoose bisa diakses [di sini](https://www.npmjs.com/package/mongoose) atau [di sini](https://mongoosejs.com/). **Mongoose** itu **ODM (Object Document Model)**  
- Buat folder utils, buat nama `db.js`
- `Install` mongoose
- `require` dan `connect` mongoose
- Membuat Schema dengan `mongoose.model()`
- Menambahkan 1 data dengan `new variabelSchema`
- Save data ke collection dengan `varAddData.save()`
- pindahkan **schema model** ke file terpisah `model/contact.js` lalu export
- ke **app.js** lakukan require ke 2 file tadi **kalau koneksi tidak usah dimasukkan dalam variabel**  

## Implementasi Part 2  
- copy **get('/contact')** dari project sebelumnya
- lakukan `async await`
- Install `express-session, cookie-parser, connect-flash` dan lakukan **Require dan Konfigurasi**
- copy **get('/contact/:nama')** dari project sebelumnya dan lakukan **perubahan data contact** dan gunakan `async await`