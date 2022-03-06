# Membuat Contact App (Bagian 1)
Menggunakan project yang ada pada belajar **CoreModules**. Kita harus perbaiki dahulu project sebelumnya karena masih terdapat kekurangan.  

## Kekurangan
1. Apabila tidak memiliki folder data dan file contacts.js  
**lakukan pengecekkan menggunakan `fs.existsSync`, dokumentasinya dapat diakses [disini](https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fsexistssyncpath)**
2. Cara membuat folder menggunakan `fs.mkdirSync`  
**Dokumentasinya dapat diakses [disini](https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fsmkdirsyncpath-options)**
3. Menggunakan `rl.question` yang menggunakan callback itu tidak baik karena akan menimbulkan `callback hell` maka menggunakan metode **async await**
4. Di abstraksi menjadi 2 pertanyaan terpisah menggunakan promise.
5. Di abstraksi lagi menjadi satu pertanyaan yang mempunyai parameter isi pertanyaannya.
6. Kita pisahkan fungsinya ke file terpisah, pertama buat dahulu `contacts.js`, pindahkan kode sebelum fungsi main ke `contacts.js`
7. Pindahkan code sesudah const pertanyaan di fungsi main ke file `contacts.js` di dalam fungsi `simpanContact` lalu panggil fungsi `simpanContact` di fungsi `main di app.js`
8. Export dan Import dengan destructuring object