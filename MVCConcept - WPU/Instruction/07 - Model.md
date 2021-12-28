<!-- Instruction for Model -->

1.  In Home.php kita coba untuk menampilkan nama yang kita dapat dari model, pertama kita tulis dahulu
`$data['nama']  =  $this->model('User_model')->getUser();`
lalu parse data ke
`$this->view('home/index',  $data);`
2. In Home/index write
`<p class="col-md-8 fs-4">Halo, nama saya <?=  $data['nama'];  ?>.</p>` namun anda akan menemukan error oleh karena itu kita lanjut dahulu
3.  Create User_model.php di folder model, then write
`<?php`
`class User_model {`
`private  $nama  =  'Ikram Maulana';`
`public  function getUser()  {`
`return  $this->nama;`
`}`
`}`
4.  Then make function model supaya jalan ketika kita paggil `$this->model` di file cotroller.php
`public  function model($model)  {`
`require_once  '../app/models/'  .  $model  .  '.php';`
`// ! Karena model berbentuk class maka harus diinstansiasi dulu`
`return  new  $model;`
`}`
5.  Buat halaman baru bernama mahasiswa lalu tambahkan di navbar
`<a class="nav-link"  href="<?=  BASEURL;  ?>/mahasiswa">Mahasiswa</a>`
6.  Buat folder mahasiswa di folder view lalu buat index.php di dalamnya
`<div class="container mt-5">`
`<div class="row">`
`<div class="col-6">`
`<h3>Daftar Mahasiswa</h3>`
`</div>`
`</div>`
`</div>`
7.  Buat file Mahasiswa.php yang extends Controller di folder controller lalu buat seperti biasa 
`$data['judul'] = 'Daftar Mahasiswa';`
`$this->view('templates/header', $data);`
`$this->view('mahasiswa/index');`
`$this->view('templates/footer');`
8.  Kita coba membuat data menampilkan daftar mahasiswa di halaman mahasiswa pertama kita tulis dahulu code dibawah di file Mahasiswa.php
`$data['mhs']  =  $this->model('Mahasiswa_model')->getAllMahasiswa();`
9. Lalu kita buat file Mahasiswa_model.php di folder model, kemudian isi data manual seperti dibawah
`private $mhs = [[ "nama" => "Ikram Maulana", "nim" => 1930511075, "email" => "ikram_maulana@onedrive.web.id", "jurusan" => "Teknik Informatika"], ["nama" => "AA", "nim" => 1930987654, "email" => "aa@onedrive.web.id", "jurusan" => "Administrasi Bisnis"],];`
10. Buat function getAllMahasiswa di file Mahasiswa_model.php
`public  function getAllMahasiswa()  {`
`return $this->mhs`
`}`
11. Lalu tampilkan di halaman view Mahasiswa/index, isi seperti dibawah
`<?php  foreach($data['mhs']  as  $mhs)  :  ?>`
`<ul>`
`<li><?=  $mhs['nama'];  ?></li>`
`<li><?=  $mhs['nim'];  ?></li>`
`<li><?=  $mhs['email'];  ?></li>`
`<li><?=  $mhs['jurusan'];  ?></li>`
`</ul>`
`<?php  endforeach;  ?>`
12. Sekarang kita coba untuk menampilkan data dari database, kita komentar data manual yang ada di Mahasiswa_model.php, kita buat database di phpmyadmin buat tabel mahasiswa dan buat 5 column (id, nama, nim, email, jurusan) isi dengan data manual tadi
13. Lalu tambahkan kode berikut di Mahasiswa_model.php
`// Database Handler`
`private  $dbh;`
`private  $stmt;`
`public  function  __construct()  {`
`// Data Source Name`
`$dsn  =  'mysql:host=localhost;dbname=codelab_phpmvc';`
`try  {`
`$this->dbh  =  new  PDO($dsn,  'root',  '');`
`}  catch(PDOException  $e)  {`
`die($e->getMessage());`
`}`
`}`
15. Kemudian di getAllMahasiswa kita ganti return menjadi prepare, execute, dan return fetch
`$this->stmt  =  $this->dbh->prepare('SELECT  *  from mahasiswa');`
`$this->stmt->execute();`
`return  $this->stmt->fetchAll(PDO::FETCH_ASSOC);` 