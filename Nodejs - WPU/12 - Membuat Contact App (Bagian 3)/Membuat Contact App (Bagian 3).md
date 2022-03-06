# Membuat Contact App (Bagian 3)  
Menambahkan fitur baru yaitu list, remove, dll  

### Menambah pesan di cli ketika mengetikkan `node app` saja
1. ke `app.js` menambahkan chaining di akhir argument command tambahkan `demandCommand()`
2. `demandCommand()` hanya dilakukan sekali di awal.

### Menampilkan daftar kontak
1. Ke `app.js`
2. Tambahkan command `list`
3. Buat fungsi `listContact` di `contacts.js` 
4. Abstracksi `const fileBuffer dan contacts` dalam satu fungsi di luar karena akan digunakan berulang
5. `forEach` contacts lalu `console.log`, jika ingin merubah warna gunakan `chalk` 

### Menampilkan detail kontak  
1. Ke file `app.js` buat command baru
2. buat command `detail`
3. Buat fungsi `detailContact() di contacts.js` yang menampung argument `argv.nama`
4. lakukan `find` nama sesuai argument
5. lakukan pengkondisian jika **ditemukan** dan **tidak ditemukan**

### Menghapus kontak berdasarkan nama  
1. Ke file `app.js` buat command baru
2. Buat command `delete`
3. Buat fungsi `deleteContact() di contacts.js` yang menampung argument `argv.nama`
4. Lakukan `find` nama dan buat kondisi
5. Apabila **nama** ditemukan dalam kontak maka buat variabel baru yang menampung `filter() agar array tidak berisi nama yang ditemukan` 
6. `writeFileSync()` hasil array baru tadi dan lakukan `console.log() berhasil`