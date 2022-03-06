# MongoDB Contact App dengan Mongoose (Bagian 2)  
Kita akan menambahkan beberapa fitur yang belum diterapkan di video sebelumnya yaitu fitur tambah, hapus dan edit  

## Fitur tambah Data  
- Ke **app.js** buat routes `app.get('/contact/add');` dengan copy dari file sebelumnya
- buat routes `proses data` dengan copy dari file sebelumnya
- Sebelum itu install dahulu `validator` untuk validasi dan lakukan `require`
- Edit `cekDuplikat()` lewat **mongoDB** menggunakan `findOne()` dan gunakan `async await`
- Edit `addContact()` lewat **mongoDB** menggunakan `insertMany()`

## Fitur Hapus Data
- buat routes `proses hapus` dengan copy dari file sebelumnya
- Gunakan `async await`
- ubah `get` menjadi `delete` menggunakan **modul** `method-override`
- Install modul lakukan `require dan use`
- Ubah **Tombol delete dan Actions yang mengarah ke** `/contact?_method=DELETE`di form
- Buat **input hidden** yang valuenya `nama`
- ke `app.js` buat routes `delete` jalankan `deleteOne`

## Fitur Ubah Data  
- buat routes `halaman edit` dengan copy dari file sebelumnya dan **Lakukan perubahan** jangan lupa `async await`
- buat routes `proses edit` dengan copy dari file sebelumnya
- kita ubah `get` menjadi `put`
- Ubah **Tombol submit edit dan Actions yang mengarah ke** `/contact?_method=PUT`di form
- Tambah **Input Hidden** untuk `_id`
- Ubah `cekDuplikat` jangan lupa `async await`
- Ubah `updateContacts` menjadi `Contact.updateOne`