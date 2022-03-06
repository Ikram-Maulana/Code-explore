# Node REPL (Read - Eval - Print - Loop)
Buka terminal / Git Bash.
- Ketik `node` maka akan masuk ke mode **REPL**
- Setelah itu kita bisa mengetik syntax javascript di cli
- `1 + 1` -> Eval, `2` -> Print, `masuk ke cli kembali` -> Loop
- Cara menulis multi line code misalkan `const sayHello = (nama, umur) => {` ketika enter **REPL** akan otomatis muncul titik 3 yang menandakan kode belum selesai dan bisa dilanjutkan.
- Dapat menggunakan Variable global dengan mengetikkan `global + enter` atau `global. + tab` atau `.help + enter`
- `.load` untuk **mengambil isi** dari file javascript
- Kita bisa menyimpan semua script yang sudah kita ketik di **Node REPL dalam 1 Sesi** menggunakan `.save namaFile.js` 
- Break dan Clear digunakan apabila **kita mau keluar di tegah-tengah pengeditan multi line** menggunakan `.break atau .clear`
- Multiple line seperti editor menggunakan `.editor`