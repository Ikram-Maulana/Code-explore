# Menjalankan File Node
cara menjalankan file js menggunakan node dengan mengetik `node namaFile` di terminal.
- Misal membuat file `index.js`, file index ini bisa menjadi file root cukup tulis `node .`
- `window` akan error di NodeJS karena tidak berjalan di browser
- Apabila kita membuat satu file misal satu.js yang memiliki fungsi cetakNama lalu kita import di HTML maka `apabila ada file js lain yang di import di HTML yang sama maka akan dapat mengakses fungsi cetakNama`
- Ada cara lain untuk menggantikan `window` di NodeJS untuk **memanggil file lain** menggunakan `require`
- Di NodeJS apabila ada function di file satu apabila kita import di file inti dengan memanggil function kepunyaan file satu **maka akan error** berbeda dengan browser karena menggunakan `system module` kecuali kita console di file satu dan require saja di file inti maka akan aman. Apabila ingin seperti kondisi awal dimana kita console di file inti maka di file satu kita tambahkan `module.exports di line terakhir` lalu requirenya tampung dalam variabel yang memiliki nama yang sama dengan fungsi yang di export.
- Perbedaan `Require` dan `import` bisa dibaca di [sini](https://www.cuapcuap.my.id/2022/01/modularisasi-javascript.html).
- `module.exports untuk NodeJS` dan `export default untuk ES6` bisa baca di [sini](https://qastack.id/programming/40294870/module-exports-vs-export-default-in-node-js-and-es6).