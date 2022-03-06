# NodeJS Web Server  
NodeJs bisa digunakan untuk membuat aplikasi web, kita membutuhkan **Web Server**.  
Kita akan menggunakan **Core Module NodeJS** untuk membuat Web Server
1. Module `http`, dokumentasinya bisa diakses [disini](https://nodejs.org/dist/latest-v16.x/docs/api/http.html). Mencoba `createServer` isinya **write dan end**, `writeHead` untuk menentukan **content type** taruh sebelum **res.write()**, `listen` lakukan **chaining atau pisah menggunakan variable**
2. Cara membuat routing sendiri yaitu, buat **variabel url yang isinya req.url** sesudah `writeHead` dan lakukan kondisi `if url` atau `switch case`
3. Bagaimana apabila kita ingin menampilkan halaman HTML yang kita buat sendiri di file terpisah? **maka read filenya menggunakan** `fs`
4. Abstraksi fungsi readFilenya