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

## 04 - Sistem routing  
- Buka `app.js`
- Untuk routing diganti menjadi `require` ke **file route terpisah** dan parsing `app dan passport`
- Buka `route.js`, buat route **Get** (`home, login, logout, signup, profile`), route **Post** (`login, signup`) gunakan `passport.authenticate()`
- Untuk routing `profile` lakukan **pengecekan** `isLoggedIn` dan buat fungsinya di luar export

## 05 - Metode sign up passportjs  
- Buka `app.js`
- Lakukan `require` ke file **passport** terpisah **Dan parsing passport**
- Buka `passport.js` lakukan require ke `passport-local.Strategy` dan file `Model User`
- buat `passport.serializeUser` dan `passport.deserializeUser`
- Buat middleware `localStrategy` untuk signup