<!-- Instruction for Insert Data -->

1.  Buka file mahasiswa/index, lalu tambahkan modal dari bootstrap
2. Setelah dipastikan modal berjalan dengan lancar, lalu tambahkan bagian body modal dengan input nama, nim, email, jurusan
3. Wrap input di dalam form yang memiliki attribute `action='<?= BASEURL; ?>/mahasiswa/tambah'` dan `method='POST'`, taruh penutup form sesudah button submit
4. Ubah type button menjadi submit
5.  Ke file Mahasiswa.php buat function tambah
`public  function tambah() {`
`if($this->model('Mahasiswa_model')->tambahDataMahasiswa($_POST) > 0) {`
`header('Location: ' . BASEURL . '/mahasiswa');`
`}`
`}';`
6.  Ke file Mahasiswa_model.php lalu isi
	[tambahDataMahasiswa.php](https://pastebin.com/F3gvqP5U)
7.  buat function rowCount dalam Database.php, isi kode berikut
`return  $this->stmt->rowCount();`