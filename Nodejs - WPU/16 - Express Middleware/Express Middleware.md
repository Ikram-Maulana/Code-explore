# Express Middleware  
**Middleware** merupakan "Sebuah software yang menghubungkan software atau aplikasi lain."  
> Pada Asalnya istilah middleware adalah "Sebuah software yang berada diantara Sistem Operasi dan Aplikasi." 

## Middleware
Saat ini istilah middleware ada di berbagai bidang:
- Database
- Web Server
- Game Engine
- **Web Application**  
Dijalankan setelah **request** dan sebelum mendapatkan **response**. Ilustrasi:  
![](Images/Screenshot%20(311).png)
![](Images/Screenshot%20(312).png)
![](Images/Screenshot%20(313).png)
![](Images/Screenshot%20(314).png)
![](Images/Screenshot%20(315).png)  

## Express Middleware  
"Aplikasi Express itu sebenarnya berisi serangkaian pemanggilan fungsi middleware."

## Fungsi Middleware
"Sebuah fungsi yang memiliki akses ke object request **(req)**, object response **(res)**, dan fungsi middleware berikutnya **(next)**."

## Lebih lengkap mengenai express middleware
1. User-defined Middleware
   - Application-level middleware
   - Router-level middleware
   - Error-handling middleware
2. Built-in Middleware
3. Thir-Party Middleware

## Mencoba Middleware  
Dokumentasi mengenai middleware dapat diakses [di sini](https://expressjs.com/en/guide/using-middleware.html).  

### Application-level middleware
```
app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})
```
Ditaruh di paling atas sebelum routing, jadi akan dijalankan dulu **console.log waktu** sebelum beralih ke middleware selanjutnya sesuai routing menggunakan `next()`. **Middleware bisa dibuat lebih dari 1, dibaca dari atas ke bawah**.  

### Built-in Middleware
1. **express.static**  
   Mencoba edit halaman about.  
   **Kita tidak dapat langsung akses file kita.** karena express secara default melindungi file statis kita.  
   Agar bisa akses kita gunakan [**express.static()**](https://expressjs.com/en/4x/api.html#express.static) simpan di paling atas sebelum middleware user.  
   Setelah itu kita bisa langsung akses file statis yang kita punya.
2. express.json
3. express.urlencoded

### Third-party Middleware  
Third-party middleware yang biasanya digunakan dapat dilihat dokumentasinya [di sini](https://expressjs.com/en/resources/middleware.html)
- install `morgan` **untuk menuliskan log ke console**
- require morgan
- `app.use(morgan('dev'))` taruh sesudah expressLayout