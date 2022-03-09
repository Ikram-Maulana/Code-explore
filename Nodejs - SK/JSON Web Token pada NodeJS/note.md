# JSON Web Token pada NodeJS  

## 01 - Apa itu Json Web Token (JWT)  
- Dokumentasi mengenai JWT dapat diakses [di sini](https://jwt.io/).
- Konsepnya **Setelah login, sistem tidak akan menyimpan data di session tapi sistem akan memberikan token untuk verifikasi**  

## 02 - Setup App JWT  
- **Initialize** folder
- Install `express body-parser mongoose jsonwebtoken cors`
- Ke `app.js` lakukan `requirement` **express, bodyparser, mongoose, jwt, cors, express.Router(), express()**, `setup` **require config, userModel, middleware bodyParser, koneksi Database, set secretKey, middleware cors**, dan `runApp listen`

## 03 - Warning fungsi connect di mongoose
- Dokumentasi mengenai **mongoose** bisa diakses [di sini](https://mongoosejs.com/).  

## 04 - Menyiapkan database dan route  
- Buat database dengan nama `jwtusers` dan collections `users` buat **2 users** untuk percobaan
- Ke `app/models/user` lakukan `require` **mongoose dan Schema** lalu `exports`
- Ke `app.js` lakukan routing dengan `router` ke halaman **'/' dan '/users'**
- Tambahkan prefix `api`  

## 05 - Login dan generate token  
- Ke `app.js` buat `routes POST` ke login
- Gunakan `User.findOne()` dan lakukan **Pengkondisian**
- Buat token dengan `jwt.sign()` dalam variable `token`  

## 06 - Verifikasi token  
- Ke `app.js` buat `middleware` cek token
- Ambil **token** dari `req.headers()`
- Lakukan **Pengecekan** terhadap **token**, jika ada maka verifikasi menggunakan `jwt.verify()` dan `decoded`  

## 07 - Data yang sedang login  
- Ke `app.js`
- di `middleware` **cek token** tambahkan pengecekan apakah token sudah expired atau belum menggunakan `decode.exp`
- Buat **Route GET** ke `/profile` yang menampilkan `res.json(req.decode)`