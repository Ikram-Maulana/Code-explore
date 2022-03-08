# JSON Web Token pada NodeJS  

## 01 - Apa itu Json Web Token (JWT)  
- Dokumentasi mengenai JWT dapat diakses [di sini](https://jwt.io/).
- Konsepnya **Setelah login, sistem tidak akan menyimpan data di session tapi sistem akan memberikan token untuk verifikasi**  

## 02 - Setup App JWT  
- **Initialize** folder
- Install `express body-parser mongoose jsonwebtoken cors`
- Ke `app.js` lakukan `requirement` **express, bodyparser, mongoose, jwt, cors, express.Router(), express()**, `setup` **require config, userModel, middleware bodyParser, koneksi Database, set secretKey, middleware cors**, dan `runApp listen`