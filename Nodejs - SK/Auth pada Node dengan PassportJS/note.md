# Catatan Pembelajaran

## 01 - Intro dan Set Up  
- **initialize** folder
- Install `passport passport-local express express-session cookie-parser body-parser connect-flash bcrypt nodemon mongoose ejs`
- Buat folder `views, app > models & utils, public`
- Ke `app.js` lakukan `require`, `database connect` dari **utils**, `Setup Middleware`, `ViewEngine`, `Routing` dan `Run APP`  

## 02 - Warning fungsi connect di mongoose
- Dokumentasi mengenai mongoose bisa diakses [di sini](https://mongoosejs.com/).  

## 03 - Model User  
- Buat file `user.js` di folder `app/models`
- Require `mongoose, bcrypt`
- Buat `Scheme` untuk **email** dan **password**
- Buat `User Method` untuk **generateHash** dan **cekPassword**
- `Export`