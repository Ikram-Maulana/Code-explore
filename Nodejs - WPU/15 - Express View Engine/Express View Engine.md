# Express View Engine  
- Memungkinkan kita membuat file template statis untuk aplikasi kita
-  Engine tersebut mengganti *variable* pada template kita dengan nilai sebenarnya, lalu menampilkannya dalam bentuk HTML
-  Mempermudah pembuatan halaman HTML
> Banyak Sekali templating engine yang bisa dipakai, dokumentasinya bisa diakses [di sini](https://expressjs.com/en/resources/template-engines.html). yang akan dipakai kali ini adalah [**EJS**](https://ejs.co/).

## EJS (Embedded JavaScript Template)  
- Simple Syntax
- Simple Setup
- Speedy Execution
- Easy Debugging
- Active Development
- Awalnya dibuat oleh pembuat Express

## EJS Code
- lakukan installasi ejs `npm i ejs`
- Lakukan setting di app.js `app.set('view engine', 'ejs');`
- Simpan semua tampilan views ke dalam folder terpisah **/views**
- Untuk memanggil file tidak perlu dibaca dengan `res.sendFile()`, tetapi cukup dengan `res.render()`
- Ubah Semua file HTML menjadi **ejs**

## Fitur Ejs
Dokumentasi fitur dari ejs bisa diakses [di sini](https://ejs.co/#features).
- Mencoba mencetak nama dari variabel di HTML menggunakan `<% const nama = 'nama' %>` dan cetak dengan `<%= nama %>`
- Mencoba mendapatkan variabelnya dari **app.js**, ditampung dalam variabel data seperti di php 
- Melakukan `foreach` menggunakan **ejs**
- Melakukan `kondisi if` menggunakan **ejs**

## Layouting Menggunakan EJS
- Dibagi 4 menjadi header, navbar, content, footer simpan dalam folder **partials**
- Sesudah dipisah, kita include semuanya dalam file inti ejs menggunakan **ejs include** `<%- include('path') %>` menggunakan `<%- %>` karena untuk mencetak HTML

## Membuat Layout Utama sehingga tidak perlu include header dan footernya
- Install package **express-ejs-layouts**
- lakukan `require` dan `app.use()` pada expressLayouts di **app.js**
- buat file **main-layout.ejs** yang isinya sudah ada header dan footer, tinggal include nav (**yang kemungkinan berbeda tiap halaman**) dan untuk konten buat `<%- body %>`
- Untuk mendeteksi body, di **app.js** buat parameter baru yang bernama `layout` yang mengarah ke relative path **main-layout.ejs**