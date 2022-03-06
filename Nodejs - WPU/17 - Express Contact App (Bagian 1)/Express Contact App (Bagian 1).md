# Express Contact App (Bagian 1)  

## Membuat Tampilan
- Duplikat folder sebelumnya di video **Express Middleware**  
- Bersihkan dahulu file **app.js** dari middleware yang tidak digunakan
- Ke halaman kontak, buat tabel yang memuat, **nama, no hp, aksi.**
- Gunakan Bootstrap Icons

## Mengaplikasikan Project Sebelumnya ke dalam Web

### Halaman Utama
- buat `contacts.js` simpan di folder **utils** isinya **samakan** seperti video ke 12 sebelumnya sampai **loadContacts saja dahulu**.
- Export dan lakukan require di `app.js`
- Coba isi dahulu `contacts.json` dengan data kita
- ke `app.js` buat parameter parsing data **contacts** yang isinya `loadContact()`
- Lakukan pencetakan data di `contact.ejs`
- Kondisi Apabila belum ada kontak

### Halaman Detail
- Buat link di `contact.ejs` untuk menuju ke halaman detail, pakai parameter **nama**
- Tangani routenya di `app.js` buat routing baru untuk **detail**
- Buat halaman `detail.ejs`
- Buat fungsi `findContact` di `contacts.js`
- Tinggal panggil hasil data di `detail.ejs`
- **Tangani error** ketika menulis detail url sendiri apabila tidak ada kontaknya