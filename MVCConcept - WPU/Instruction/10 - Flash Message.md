<!-- Instruction for Flash Message -->

1. First of all make file Flasher.php on folder core, then isi dengan kode berikut buat static method-methodnya dan buat Session
[Flasher.php](https://pastebin.com/xX93yJHc)
2. Ke file init.php, lalu require file flasher.php
`require_once  'core/Flasher.php';`
3. Ke file index.php di root folder lalu tambahkan kode, untuk menjalankan session
`if(!session_id()) session_start();`
4. Ke file mahasiswa/index.php, lalu tambahkan html flash message
`<!-- Flash Message -->`
`<div  class="row-12">`
`<div  class="col-lg-12">`
`<?php Flasher::flash(); ?>`
`</div>`
`</div>`
5.  Ke file Mahasiswa.php di function tambah, tambahkan kode setFlash sebelum redirect dan kode kondisi else
[function tambah](https://pastebin.com/eASdy8ar)