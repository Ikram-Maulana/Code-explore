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
- Buat file `.env` isi dengan
```
APP_PORT = 5000
```
- Ke file `app.js`, lakukan **Requirement** terhadap `express, dotenv, cors`, lalu lakukan **Set Up** terhadap `express, dotenv.config, express.json, express.urlencoded, whiteList, corsOptions, cors`, lalu lakukan **Routing** dan **Listening** menggunakan `process.env` untuk mengambil **PORT**