# Membuat REST API dengan Express.js dan MySQL - Studi Kasus Classified Ads  

## 01 - Persiapan Project Express  
### 1.1 Menyiapkan Project  
Berikut merupakan beberapa software yang harus diinstall untuk dapat mengikuti course kali ini:
- NodeJS
- Git
- Postman
- Chrome / Firefox Developer Edition
- VSCode  

Kita akan mencoba membuild aplikasinya:
- Buat folder baru **exshop**
- initialize folder
- Install package `express cors dotenv bcryptjs jsonwebtoken multer mysql2 sequelize nodemon`  

### 1.2 Membuat Web Service Dengan Express  
Dokumentasi mengenai `cors` dapat diakses [di sini](https://expressjs.com/en/resources/middleware/cors.html).
- Buat file `.env` isi dengan
```
APP_PORT = 5000
```
- Ke file `app.js`, lakukan **Requirement** terhadap `express, dotenv, cors`, lalu lakukan **Set Up** terhadap `express, dotenv.config, express.json, express.urlencoded, whiteList, corsOptions, cors`, lalu lakukan **Routing** dan **Listening** menggunakan `process.env` untuk mengambil **PORT**  

### 1.3 Membuat File Config Database  
Dokumentasi mengenai `sequelize` dapat diakses [di sini](https://sequelize.org/).
- Jalankan server `mysql` menggukan laragon
- Ke file `.env` buat variabel untuk `DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT, DB_DIALECT`
- Buat file `config/database.js` dan lakukan **import** `sequelize`
- Lakukan **Konfigurasi** sequelize `username, password, database, host, port, dialect, pool`
- Lakukan **Instansiasi** sequelize untuk **koneksi database** `username, password, database, host, port, dialect, pool`
- Buat **object db**, bisa ditambahkan object `db.Sequelize dan db.sequelize`
- Lakukan **exports** terhadap `db`  

### 1.4 Membuat Model Dan Tabel Database  
- Buat file `models/user.model.js` lakukan `module.export` yang memiliki parameter `sequelize dan Sequelize`
- Lakukan `sequelize.define` dan buat **skema tabel dan kolom database** misal `Sequelize.STRING` dalam variable `User` lalu lakukan `return User`
- Buat file `models/index.js` untuk **membundle** pemanggilan semua model agar **tersentralisasi**
- Ke file `app.js` buat variabel `db` yang memanggil file **index di file model**
- Lakukan `db.sync({force: true})` lalu **Kondisikan** jika error dan tidak
- Sebelum dijalankan buat terlebih dahulu **Database** sesuai nama yang diberikan pada `.env`  

### 1.5 Menambahkan Model Yang Dibutuhkan  
- Buat file `models/category.model.js` lakukan `module.export` yang memiliki parameter `sequelize dan Sequelize`
- Lakukan `sequelize.define` dan buat **skema tabel dan kolom database** yang isinya `nama`
- Buat file `models/product.model.js` lakukan `module.export` yang memiliki parameter `sequelize dan Sequelize`
- Lakukan `sequelize.define` dan buat **skema tabel dan kolom database** yang isinya `user_id, category_id, title, brand, model, year, condition, price, description, address, loc_attitude, loc_longitude, sold`
- Buat file `models/image.model.js` lakukan `module.export` yang memiliki parameter `sequelize dan Sequelize`
- Lakukan `sequelize.define` dan buat **skema tabel dan kolom database** yang isinya `product_id, file`
- Lakukan **pendefinisian** di file `models/index.js`  

### 1.6 Membuat Modul Seed Untuk Import Dummy Data  
- Buat file `models/seeds/user.seeder.js` lakukan **import** terhadap `index` model dan `user.model`
- Lakukan `exports.namaSeed` dan isi dengan `User.create()`
- Buat file `models/seeds/index.js` sebagai file untuk **membundle seeds**
- Lakukan `require` terhadap `user.model.js` dan export
- Ke file `app.js` buat require file `models/seeds/index` dalam **variable seed**, lalu lakukan `seed.namaSeed()` sebelum `console` **koneksi sukses**