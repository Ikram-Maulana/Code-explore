<!-- Instruction for Update Data + Ajax -->

1. First of all add button **ubah** in mahasiswa/index.php, arahkan ke modal tambah data mahasiswa, beri kelas **tampilModalUbah**
`<a  class="badge bg-success float-end ms-2 tampilModalUbah" href="<?= BASEURL; ?>/mahasiswa/detail/<?= $mhs['id']; ?>"  data-bs-toggle="modal" data-bs-target="#formModal"  data-id="<?= $mhs['id']; ?>">ubah</a>`
2. Add new class for tambah data mahasiswa called **tombolTambahData**
`<button  type="button"  class="btn btn-primary mb-3 tombolTambahData"  data-bs-toggle="modal" data-bs-target="#formModal">`
3. Add jquery for simple ajax, someday change this to vanilla javascript
`<script  src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="  crossorigin="anonymous"></script>`
4. Add script.js and import on footer
[script.js](https://pastebin.com/vEksiRZ3)
5. On modal add hidden input for id
`<input  type="hidden"  name="id"  id="id">`
6. In Mahasiswa.php add function getUbah, and add script below
`public  function getUbah() {`
`echo json_encode($this->model('Mahasiswa_model')->getMahasiswaById($_POST['id']));`
`}`
7. after that, make a new function called **ubah**, and add script like function tambah but change some part like
`if($this->model('Mahasiswa_model')->ubahDataMahasiswa($_POST) > 0) {` and change `ditambahkan` menjadi `diubah`
8. Go to Mahasiswa_model and make new function called **ubahDataMahasiswa**, and add script like tambahDataMahasiswa, but change some part like
`$query = "UPDATE mahasiswa SET nama = :nama, nim = :nim, email = :email, jurusan = :jurusan WHERE id = :id";`
and add `$this->db->bind('id', $data['id']);`