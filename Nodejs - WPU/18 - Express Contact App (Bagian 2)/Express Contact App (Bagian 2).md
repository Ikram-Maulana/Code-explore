# Express Contact App (Bagian 2)  
Kita akan mencoba melanjutnya projek dari video sebelumnya.  

## Menambahkan Data 

### Add Contact Data
- Buka file `contact.ejs` tambahkan **button tambah kontak** yang routingnya ke `/contact/add`
- Buka `app.js`, tambahkan routes add **diatas routes yang menerima param :nama**
- Buka `add-contact.ejs` tambahkan form yang **method post dan action ke contact**
- Buka `app.js` buat route **POST** didapatkan dari `req.body`
- tambah **middleware** `urlencoded`, **extended true**
- Buat fungsi `addContact(req.body)`, jika berhasil lakukan `res.redirect ke halaman /contact`
- Buka `contacts.js` buat fungsi `menimpa file contacts.json dan addContact`, export dan import `addContact()`

### Membuat Validasi  
- Install module `express-validator`, dokumentasinya bisa diakses [di sini](https://express-validator.github.io/docs/).
- `require validator` dalam variabel **{body, validationResult}**
- Ke routes **post**, jalankan middleware `body` untuk **cek email dan nohp**, bungkus pakai **array**
- Tangkap error menggunakan `validationResult()`
- Kita **custom pesan errornya**, dokumentasinya bisa diakses [di sini](https://express-validator.github.io/docs/custom-error-messages.html). menggunakan `check()` sebagai pengganti `body()`
- Buat **custom validator** untuk cek apabila ada nama duplikat, dokumentasinya bisa diakses [di sini](https://express-validator.github.io/docs/custom-validators-sanitizers.html). menggunakan `body + custom`
- buat fungsi `cekDuplikat` export dan require di app.js untuk dipakai di **custom validator**

### Membuat Alert Jika Error
- Ke `app.js` ubah **return error** menjadi `res.render` error ke halaman `add-contact.ejs`
- Ke `add-contact.ejs`, buat **pengecekan type(errors)nya bukan undefined** untuk menampilkan alert
- ke `app.js` lakukan kondisi jika sukses

### Membuat Flash Message
- Install beberapa module (`express-session, cookie-parser, connect-flash`)
- Require 3 module tadi
- Lakukan **Konfigurasi Flash** dengan `use` middlewarenya
- Sekarang kita **gunakan** flash, ke bagian **post** tulis sebelum **redirect**
- Tangkap flash di middleware `get('/contact')`
- Cek dan simpan di `contact.ejs`, **lakukan pengkondisian**