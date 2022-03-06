# Instalasi & Konfigurasi MongoDB  
Dokumentasi mengenai **MongoDB** bisa diakses [di sini](https://www.mongodb.com/).  
- Bisa **diinstall** secara lokal
- Bisa terhubung secara **cloud** dengan MongoDB Atlas  

## Instalasi MongoDB
- Download terlebih dahulu MongoDB [di sini](https://www.mongodb.com/try/download/community). **Pilih yang on-premises** dan **Versi 4**
- Gunakan **Shell** untuk koneksi ke MongoDB, buka `C:\Program Files\MongoDB\Server\4.4\bin`
- Masukkan **path** tadi ke **environment variable** di **system variable**  

## MongoDB Shell (CLI)
Dokumentasinya bisa diakses [di sini](https://docs.mongodb.com/v4.4/reference/method/).   
- Untuk mengetahui list database yang ada -> `show dbs`
- Untuk membuat dan memakai database -> `use namaDB`
- Untuk menambahkan collection -> `db.createCollection('collectionName')`
- Untuk melihat collection -> `show collections`
- Untuk menambahkan document baru -> `db.collectionName.insertMany([{}])` atau `db.collectionName.insertOne({})`
- Untuk melihat isi dokumen -> `db.collectionName.find()`  

## MongoDB Compass (GUI)
- Buka aplikasi
- Klik Connect

## MongoDB Atlas (Cloud)
- Buka halaman [ini](https://www.mongodb.com/atlas)
- Login
- Buat Cluster Free
- Buat User untuk Koneksi
- Klik Connect dengan `mongo shell` -> `mongo "mongodb+srv://cluster0.qriz4.mongodb.net/myFirstDatabase" --username ikram20`
- Klik Connect dengan `MongoDB Compass` -> `mongodb+srv://ikram20:<password>@cluster0.qriz4.mongodb.net/test` 