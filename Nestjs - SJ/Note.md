# Tutorial Nest JS Bahasa Indonesia
Dokumentasi lengkap mengenai NestJS dapat diakses [di sini](https://nestjs.com/)  

## 01 - Persiapan  
Ada beberapa software yang harus diinstall sebelum melanjutkan tutorial:
- NodeJS
- Xampp
- VS Code
- Web Browser

## 02 - Hello World
Dokumentasi mengenai cara menginstall Nestjs secara global dapat diakses [di sini](https://docs.nestjs.com/).
- Untuk membuat project baru silahkan ketik `nest new project-name`
- Untuk menjalankan project dalam environment `development` silahkan ketik `pnpm start:dev`
- Kita akan mencoba merubah tulisan **Hello World**, pergi ke file `app.service.ts` dan **rubah tulisan** dalam fungsi `getHello()`
- Kita akan mencoba mengubah **port** aplikasi menggunakan **.env**, pertama install terlebih dahulu package `dotenv`
- Buat file `.env` dan **instansiasi** `APP_PORT`
- Ke file `main.ts` lakukan import terhadap `dotenv`, lalu buat `dotenv.config()` dan buat **variabel** untuk menampung **PORT** dari `process.env.APP_PORT`
- Buat `Logger` untuk **menginformasikan** aplikasi berjalan di port berapa, lakukan `Logger.log()` dan `import Logger`