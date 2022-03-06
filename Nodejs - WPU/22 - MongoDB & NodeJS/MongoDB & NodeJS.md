# MongoDB & NodeJS  
Dokumentasi mengenai koneksi dengan **Node.js** bisa diakses [di sini](https://docs.mongodb.com/drivers/node/current/).  
- Install `npm install mongodb@4.4`
- Import `MongoClient`
- Buat variabel `uri`
- Buat variabel `dbName`
- Lakukan **setup** mongoDB, buat `instantiate mongoClient`
- Jalankan **MongoDB Connect** dengan callback, dengan `client.connect()`  

## Insert Data MongoDB (Single or Many)
- Create variabel `database`
- Create variabel `collection`
- `insertOne` atau `insertMany` dokumen, dibelakangnya diberi `callback` ketika `err dan result`  

## Read Data MongoDB
- Create variabel `collection`
- `collection.find` untuk menampilkan data
- extract data ke array, dengan menambahkan `toArray()`
### Read Data dengan kriteria
- **Sintaksnya sama** dengan yang di atas, **bedanya** kalau dengan kriteria `tambahkan kondisi di fungsi find({})`

## Update Data MongoDB
- Create variabel `collection`
- `collection.updateOne()` untuk mengupdate 1 data
- Akan **error** untuk mengubah berdasarkan **id**, harus require `ObjectID`
## Update many data
- Sintaksnya sama dengan yang diatas yang **beda** hanya pemanggilan fungsinya saja jadi `updateMany()`  

## Menghapus Data
- Create variabel `collection`
- `collection.deleteOne()` untuk menghapus 1 data
### Delete Many Data
- Sintaksnya sama dengan yang diatas yang **beda** hanya pemanggilan fungsinya saja jadi `deleteMany()`  