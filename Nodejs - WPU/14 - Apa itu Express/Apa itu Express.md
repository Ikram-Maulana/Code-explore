# Apa itu ExpressJS?  
Dokumentasinya bisa diakses [di sini](https://expressjs.com/).      
> "Fast, unopionated, minimalist web framework for NodeJS"  

## ExpressJS  
- Web App Framework yang dibuat di atas NodeJS
- Menyediakan antarmuka yang minimal untuk kakas yang diperlukan dalam membuat sebuah aplikasi web
- Membantu pengelolaan aliran data dari server ke aplikasi
- MERN, MEAN, MEVN Stack (MongoDB, ExpressJS, React|Angular|Vue, NodeJS)
- Diciptakan oleh TJ Holowaychuck, pada tanggal 22 Mei 2010

## Fitur ExpressJS
- Menangani request dengan berbagai metode HTTP dengan mudah (Routes)
- MVC (Model-View-Controller)
- Terintegrasi dengan "view" *rendering engine*, untuk mengelola *template*
- *Middleware*

## Unopinionated  
- Tidak ada aturan baku untuk membuat sesuatu
- Flexibel
- Menentukan sendiri struktur aplikasi
- Bongkar pasang middleware

## Templating Engine  
- Pug, Haml.js, EJS, HBS, dll. Dokumentasinya bisa diakses [di sini](https://expressjs.com/en/resources/template-engines.html).

## Database  
- MongoDB, MySQL, dll. Dokumentasinya bisa diakses [di sini](https://expressjs.com/en/guide/database-integration.html).  

## Menggunakan NodeJS
![Menggunakan ExpressJS](images/Screenshot%20(309).png)


## Application
Dokumentasi **app** express bisa diakses [di sini](https://expressjs.com/en/4x/api.html#app).
- Install ExpressJS, menggunakan `app.get(), app.listen(), app.use()`
- `app.use()` untuk menjalankan sebuah middleware. Tulis `app.use()` dibawah sesudah routing jangan di awal.

## Response
Dokumentasi **response** express bisa diakses [disini](https://expressjs.com/en/4x/api.html#res)
- Cara mengirimkan status **404, 403, 200, dll** bisa menggunakan `res.status()`
- `res.json()` untuk mengembalikan data json dari **express ke user**
- Untuk mengembalikan file **HTML** bisa menggunakan `res.sendFile()`  

## Request
Dokumentasi **request** express bisa diakses [di sini](https://expressjs.com/en/4x/api.html#req).
- Mencoba `:id -> req.params.id atau :idCat -> req.params.idCat`
- Mencoba **Query String** misalkan urlnya `localhost:3000/produk/30?kategori=sepatu` 