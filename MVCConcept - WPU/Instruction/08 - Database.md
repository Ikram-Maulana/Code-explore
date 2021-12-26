<!-- Instruction for Database -->

1.  We need to separate database from models, first of all we need to create file Database.php on core folder
2. Buat folder dan file config/config.php kemudian isi terlebih dahulu dengan isi dari file constants.php, kemudian hapus file constants.php
3. Buka kembali file config.php dan define db_host, db_user, db_pass, db_name
`define('DB_HOST',  'localhost');` 
`define('DB_USER',  'root');`
`define('DB_PASS',  '');`
`define('DB_NAME',  'codelab_phpmvc');`
4.  Buka file init kemudian require Database.php dan config.php
`require_once  'core/Database.php';`
`require_once  'config/config.php';`
5.  Isi file Database.php dengan
	[Database.php](https://pastebin.com/7kk7Br0s)
6.  Kemudian buka Mahasiswa_model.php, lalu hapus kode sebelumnya dan isi seperti dibawah
`private  $table  =  'mahasiswa';`
`private  $db;`
`public  function  __construct()  {`
`$this->db  =  new  Database;`
`}`
7. Di bagian getAllMahasiswa ganti kode sebelumnya lalu isi seperti dibawah
`$this->db->query('SELECT  *  FROM  '  .  $this->table);`
`return  $this->db->resultSet();`
8. Di halaman mahasiswa/index ubah list menjadi list-group dari bootstrap dan tambahkan tombol ke detail berdasarkan id
`<ul class="list-group">`
`<?php  foreach($data['mhs']  as  $mhs)  :  ?>`
`<li class="list-group-item d-flex justify-content-between align-items-center"><?=  $mhs['nama'];  ?>  <a class="badge bg-primary"  href="<?=  BASEURL;  ?>/mahasiswa/detail/<?=  $mhs['id'];  ?>">detail</a></li>`
`<?php  endforeach;  ?>`
`</ul>`
9. Ke file Mahasiswa.php di controller, buat function baru untuk detail dan isi seperti index namun tambahkan
`$data['mhs']  =  $this->model('Mahasiswa_model')->getMahasiswaById($id);` 
10. Ke file Mahasiswa_model.php buat function baru getMahasiswaById
`public  function getMahasiswaById($id)  {`
`$this->db->query('SELECT  *  FROM  '  .  $this->table  .  ' WHERE id=:id');`
`$this->db->bind('id',  $id);`
`return  $this->db->single();`
`}`
11. Buat halaman detail.php di folder views/mahasiswa lalu isi
[detail.php](https://pastebin.com/k808Rc3J)