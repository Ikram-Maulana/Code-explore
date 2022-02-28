# Membuat Contact App (Bagian 2)  
**Di sesi kali ini kita akan menambahkan fitur tambahan untuk aplikasi kontak kita, sebagai berikut:**  

### Menambahkan perintah cli setelah `node app` untuk menambahkan data  
1. Buka file `app.js`, komentar kode sebelumnya
2. menangkap argument menggunakan `process.argv` lalu `console.log` untuk melihat isinya
3. Install module npm yang mengelola argument yaitu [yargs](https://www.npmjs.com/package/yargs).
4. Menggunakan `command` untuk yargs, dokumentasinya dapat diakses [disini](https://yargs.js.org/docs/#api-reference-commandcmd-desc-builder-handler).
5. Untuk menampilkan hasil `yargs.command()` menggunakan `yargs.parse()`
6. Membuat **yargs command yang isinya object**, dokumentasinya bisa diakses [disini](https://yargs.js.org/docs/#api-reference-optionskey-opt).
7. Otomatis akan bisa memakai `--help` contohnya `node app --help` atau `node app add --help`  

### Melakukan validasi data agar tidak ada nama yang duplikat  
1. Buka file contacts.js sebelum `contacts.push(data)` lakukan validasi dahulu menggunakan `find()` jika ada return, jika tidak push data
2. **Hapus** code yang menggunakan `readline`
3. Buat `console.log() yang menandakan data duplikat` **Menjadi Berwarna** menggunakan npm modules `chalk`

### Jika Ada Email maka Lakukan Validasi  
1. Install module `Validator`
2. Lakukan kondisi, jika ada email -> gunakan validator `isEmail`

### Lakukan Validasi Nomor HP  
1. Menggunakan module `Validator`
2. lakukan kondisi menggunakan `isMobilePhone`
