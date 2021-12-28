<!-- Instruction for Searching -->

1. First of all on mahasiswa/index make input form for **searching**
`<form action="<?=  BASEURL;  ?>/mahasiswa/cari"  method="post">`
`<div class="input-group mb-2">`
`<input type="text"  class="form-control"  placeholder="Cari Mahasiswa ..."  name="keyword"  id="keyword" aria-label="Cari Mahasiswa"  aria-describedby="tombolCari"  autocomplete="off">`
`<button class="btn btn-primary"  type="submit"  id="tombolCari">Cari</button>`
`</div>`
`</form>`
2. Then go to Controller Mahasiswa and add new function called **cari** then isi sama seperti function index, but change some part for search mahasiswa from models
`$data['mhs']  =  $this->model('Mahasiswa_model')->cariDataMahasiswa();`
3. Then go to Mahasiswa_model.php and make new function called **cariDataMahasiswa**, then write some code below
`$keyword  =  $_POST['keyword'];`
`$query  =  "SELECT  *  FROM mahasiswa WHERE nama LIKE :keyword";`
`$this->db->query($query);`
`$this->db->bind('keyword',  "%$keyword%");`
`return  $this->db->resultSet();`