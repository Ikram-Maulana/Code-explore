# Express Contact App (Bagian 3)  
Kita akan mencoba melanjutnya projek dari video sebelumnya.  

## Menerapkan Fungsionalitas Aplikasi
Kita **tidak** akan menggunakan **Restful API** yang menggunakan fungsi `delete dan put`

### Hapus Contact
- Ke halaman `detail.ejs` buat **button hapus** yang mengarah ke `contact/delete/*namaContact*` dan terdapat konfirmasi hapus
- Ke `app.js` buat routes delete, **simpan sebelum detail yang memiliki param** `:nama` 
- Buat fungsi `deleteContact` di `contacts.js` lalu lakukan import dan export
- Tambahkan **flash data**

### Ubah Contact  
- Ke halaman `detail.ejs` buat **button ubah** yang mengarah ke `contact/edit/*namaContact*`
- Ke `app.js` buat routes edit, **simpan sebelum detail yang memiliki param** `:nama`
- Lakukan **parsing** data **contact** ke halaman `edit-contact.ejs`
- Samakan halaman `add-contact.ejs` dengan `edit-contact.ejs`
- buat form yang methodnya `POST` dan actionnya ke `/contact/update` di halaman **`edit-contact.ejs`**
- Tangkap data di `edit-contact.ejs` menggunakan **value**
- buat input **hidden** untuk **nama lama**
- Ke `app.js` buat route `update` samakan isinya dengan route `add`
- Buat **Validasi** `nama duplikat` dan apakah sama dengan `oldNama` akan error
- **1 Lagi Error** ketika namanya diedit lalu ada **duplikasi** maka akan **error**, tapi ketika di klik lagi akan lolos karena `oldNama` berubah jadi yang **terbaru**
- Maka di `edit-contact.ejs` lakukan pengecekan di `oldNama`
- Kembali lagi ke `app.js` buat fungsi `updateContacts` lakukan export dan import
- sebelum di `push` hapus terlebih dahulu `oldNama`