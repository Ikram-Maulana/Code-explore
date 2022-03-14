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
- Buat file `models/seeds/user.seeder.js` lakukan **import** terhadap `index` model dan `db.user`
- Lakukan `exports.namaSeed` dan isi dengan `User.create()`
- Buat file `models/seeds/index.js` sebagai file untuk **membundle seeds**
- Lakukan `require` terhadap `user.model.js` dan `export`
- Ke file `app.js` buat require file `models/seeds/index` dalam **variable seed**, lalu lakukan `seed.namaSeed()` sebelum `console` **koneksi sukses**  

### 1.7 Membuat Data Seeder Lainnya  
Dokumentasi mengenai **bulkCreate** dapat diakses [di sini](https://sequelize.org/v5/manual/instances.html#working-in-bulk--creating--updating-and-destroying-multiple-rows-at-once-).
- Buat file `models/seeds/category.seeder.js` lakukan **import** terhadap `index` model dan `db.category`
- Lakukan `exports.namaSeed` dan isi dengan `Category.create()`
- Ke file `models/seeds/index` Lakukan `require` terhadap `category.model.js` dan `export`
- Ke file `app.js` lakukan `seed.namaSeed()` sebelum `console` **koneksi sukses**  

## 02 - Authentication  
### 2.1 Membuat Fungsi Register Di Controller  
- Ke file `app.js` komentari bagian `seed` dan `sync({force:true})` **ganti** menjadi `sync`
- Buat file `config/auth.js` lakukan `export.module` **secret key** yang diambil dari file `.env`
- Ke file `.env` buat `APP_KEY = secret-key`
- Buat file `controller/auth.controller.js` lakukan **import** terhadap `/model/index, db.user, bcrypt, config`
- Lakukan `exports.register` dan isi dengan `User.create()` terhadap `name, phone, email` dan `password` yang memakai fungsi `bcrypt.hasSync()`  

### 2.2 Membuat Route Untuk Auth Register  
- Buat file `/routes/auth.routes.js` Lakukan `require` terhadap `/controller/auth.controller.js`
- Lakukan `module.exports` dan buat routes untuk **pengecekan** dengan middleware yang memeriksa **res.header()**
- Buat `routes` **POST** `/api/auth/register` yang parameternya mengarah ke `controller.register`
- Ke file `app.js` lakukan `require` file **Routes** dengan parameter `app`  

### 2.3 Membuat Middleware Untuk Validasi Email Unik  
- Buat file `/middleware/register.js` lakukan `require` terhadap `db, db.user`
- Buat function `isUserExist` menggunakan `User.findOne({email: req.body.email})` untuk mengecek **duplikasi email** kemudian lakukan `exports`
- Buat file `/middleware/index.js` untuk **membundle** semua middleware yang akan dibuat, lalu lakukan `import` dan `exports`
- Ke file `/routes/auth.routes.js` lakukan `require` terhadap file `/middleware/index` dan simpan sebagai **parameter kedua** dalam **Route POST**  

### 2.4 Membuat Fungsi Login Di Controller  
- Ke file `/controller/auth.controller.js` lalu buat `exports.login`, kemudian isi dengan `User.findOne`
- Lakukan **Pengecekan** apakah emailnya ada, passwordnya benar dengan `bcrypt.compareSync()`, kemudian **jika benar** kita assign `accessToken` menggunakan `jwt.sign()`
- Jangan lupa lakukan `require` terhadap `jwt`
- Ke file `/routes/auth.routes.js`, kemudian buat **routes baru** untuk **POST** `/api/auth/login`  

### 2.5 Mendapatkan Data Token Dari Login  
- Buat file `/middleware/authJwt.js`, kemudian lakukan `require` terhadap `jwt` dan `config auth`
- Buat **Function** `verifyToken()`, lalu buat **variabel token** yang isinya `req.headers['authorization']`
- Lakukan **Pengkondisian** jika tidak ada token
- Jika **ada** token gunakan `jwt.verify()` dan lakukan **Pengkondisian** apakah token valid atau tidak
- Ke file `/middleware/index.js` lakukan `require` terhadap `/middleware/authJwt`  

### 2.6 Mendapatkan Data User Berdasarkan Token  
- Buat file `/controller/profile.controller.js`, Lakukan `require` terhadap `db dan db.user` 
- Buat `exports.profile` kemudian isi dengan `User.findByPk(req.userId)` dan lakukan **pengkondisian**
- Buat file `routes/profile.routes.js` lakukan `require` terhadap `controller dan middleware`
- Buat `module.exports` kemudian isi dengan **routing** ke `/api/profile` dengan parameter `middleware.verifyToken` dan `controller.profile`  

## 03 - CRUD Product  
### 3.1 Membuat Api Endpoint Create Product  
- Buat file `/controllers/product.controller.js`, Lakukan require terhadap `db` dan `db.rpoduct`
- Buat `exports.create`, isi dengan **pengkondisian** jika `!req.body.title`, buat variabel yang menampung `req.userId, ...req.body`, kemudian lakukan `Product.create()`
- Buat file `/routes/product.routes.js`, lakukan require terhadap `middleware` dan `controller`
- Buat `module.exports` berisi routes **POST** `/api/product` dengan parameter `middleware.verifyToken dan controller.create`
- Buka `app.js` lakukan **import** terhadap file `/routes/product.routes.js`  

### 3.2 Membuat Api Endpoint Show All Product
- Buat `exports.index` yang menggunakan `Product.findAll()` dalam file `/controller/product.controller.js`
- Buat Routes **GET** `/api/product` dengan parameter `middleware.verifyToken` dan `controller.index`  

### 3.3 Membuat Api Endpoint Single Product  
- Ke file `/controller/product.controller.js`, buat `exports.show`
- Isi dengan membuat `const id = req.params.id`, kemudian lakukan `Product.findByPk()`
- Lakukan **pengecekan** terlebih dahulu apakah `result.user_id !== req.userId` baru **Tampilkan Data**
- Ke file `routes/product.routes.js`, buat routes **GET** `/api/product/:id` dengan parameter `middleware.verifyToken` dan `controller.show`  

### 3.4 Membuat Api Endpoint Update Product
- Ke file `/controller/product.controller.js`, **duplikasi** method **show** lalu rubah sedikit
- Setelah **pengecekan** `userId`, buat `Product.update()`
- Ke file `/routes/product.routes.js` buat routing **PATCH** `/api/product/:id` dengan parameter `middleware.verifyToken` dan `controller.update`  

### 3.5 Membuat Api Endpoint Delete Product  
- Ke file `/controller/product.controller.js`, **duplikasi** method **update** lalu rubah sedikit
- Setelah **pengecekan** `userId`, buat `Product.destroy()`
- Ke file `/routes/product.routes.js` buat routing **DELETE** `/api/product/:id` dengan parameter `middleware.verifyToken` dan `controller.update`  

## 04 - Upload Image Product  
### 4.1 Membuat Service Upload File Dengan Multer  
- Buat folder `/storage/upload` di folder `root`
- Buat file `/services/upload.js`, lakukan `require` terhadap `multer, util, path dan __basedir`
- Lakukan **setup** pengkondisian `imageFilter` menggunakan `image.mimetype.startsWith()`
- Lakukan **setup** `storage` menggunakan `multer.diskStorage()`, isinya `destination` dan `filename`
- Lakukan **Upload Image Setup** menggunakan `multer()`, isinya `storage` dan `fileFilter`
- Lakukan `util.promisify()` dalam variabel `uploadFile` terhadap **uploadImage**
- Lakukan `exports.module` terhadap `uploadFile dan __basedir` 

### 4.2 Membuat Controller Upload File By Product  
- Buat file `/controllers/upload.controller.js`, kemudian lakukan `require` terhadap `fs, {uploadFile, __basedir}, db, db.image`
- Buat `exports.upload` secara `async`
- Buat **variable id** yang menampung `req.params.id`
- Lakukan `try and catch`
- Isi dalam `try` lakukan `await uploadFile(req, res)`, **kondisi** jika `req.file === undefined`, buat **variabel images** yang melakukan `req.files.map()` yang berisi object image, lakukan `await Image.bulkCreate()` dan kondisi `then and catch`
- Buat file `/routes/upload.routes.js` buat routing **POST** `/api/product/:id/upload` dengan parameter `middleware.verifyToken` dan `controller.upload`
- Buka `app.js` lakukan **import** terhadap file `/routes/upload.routes.js`  

### 4.3 Membuat Controller Remove File By Id  
- Buka file `/controllers/upload.controller.js`, kemudian buat `exports.remove`
- Buat **variable id** yang menampung `req.params.id`
- Buat `Image.findByPk(id)`, kemudian lakukan `then and catch`
- Dalam fungsi `then` lakukan `fs.unlink()` terhadap **direktori file** dan `Image.destroy()` menggunakan `where:{ id:id }`, kemudian lakukan `then and catch`
- Ke file `/routes/upload.routes.js` buat routing **DELETE** `/api/image/:id` dengan parameter `middleware.verifyToken` dan `controller.upload`  

## 05 - Relasi Antar Model  
### 5.1 Membuat Relasi Antar Model  
Dokumentasi lengkap mengenai **Relasi** dapat diakses [di sini](https://sequelize.org/v7/manual/assocs.html).
- Ke file `/models/index`, lakukan relasi menggunakan `hasMany()`, **User memiliki banyak Produk, Produk memiliki banyak Image, Category memiliki banyak Produk** menggunakan `foreignKey` masing-masing
- Ke file `/controllers/product.controller.js`, lakukan require terhadap `db.image`
- Tambahkan `include: Image` di **parameter** fungsi `index` setelah `where: { id:id }` dan `show`  

## 06 - Menampilkan Iklan Produk  
### 6.1 Membuat Api Endpoint Menampilkan Ads Random  
- Buat file `/controllers/ads.controller.js`, Lakukan `require` terhadap `db, db.product, db.image`
- Buat `exports.random` yang isinya sama dengan `exports.index` di `product.controller.js`
- Ubah `where id` menjadi `where sold`, tambahkan `limit` dan juga `order: db.sequelize.literal()` agar menampilkan ads secara random
- Buat file `/routes/ads.routes.js`, lakukan `require` terhadap `/controllers/ads.controller.js`
- Buat routes **GET** `/api/ads/random` yang memiliki parameter `controller.random`
- Jangan lupa lakukan `import routes` di file `app.js`  

### 4.2 Menampilkan Detail Data Produk Dengan Relasi Image Dan User  
- Buka file `/models/index`, kemudian buat `db.product.belongsTo(db.user)`
- Buka file `/controllers/ads.controller.js`, kemudian buat `exports.detail` yang isinya sama dengan `exports.show` di `product.controller.js` 
- Lakukan `require` terhadap `db.user`
- Hapus pengecekan `userId`, ubah `include: Image` menjadi  
```
include: [
  {
    model: Image,
    as: 'images'
  },
  {
    model: User,
    as: 'user',
    attributes: {
      exclude: ['password', 'createdAt', 'updatedAt']
    }
  }
]
```
- Ke file `/routes/ads.routes.js` buat routes **GET** `/api/ads/:id/detail` dengan parameter `controller.detail`  

### 4.3 Menampilkan Data Produk Berdasarkan Pencarian Judul Dan Lokasi  
- Ke file `/controllers/ads.controller.js`, lakukan `require` terhadap `db.Sequelize.Op`
- Buat `export.search`, yang berisi **Variabel** lat = `parseFloat(req.query.lat)`, lng = `parseFloat(req.query.lng)`, title = `req.query`
- Buat **KONDISI** apakah ada title  
```
let condition = title ? {
    title: {
      [Op.like]: `%${title}%`
    }
  } : null;
``` 
- Lakukan `Product.findAll()` yang memiliki parameter  
```
{
      attributes: {
        include: [
          [
            db.sequelize.literal(
              `6371 *
              acos(cos(radians(${lat})) * cos(radians(loc_latitude)) *
              cos(radians(${lng}) - radians(loc_longitude)) +
              sin(radians(${lat})) * sin(radians(loc_latitude)))`
            ),
            'distance',
          ],
        ],
      },
      where: {
        sold: false,
        ...condition,
      },
      having: db.sequelize.where(db.sequelize.col('distance'), '<', 25),
      order: db.sequelize.col('distance'),
      limit: 10,
      include: Image,
}
```
- Ke file `/routes/ads.routes.js` dan buat routes **GET** `/api/ads/search`