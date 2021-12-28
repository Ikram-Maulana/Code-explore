<!-- Instruction for Assets -->

1.  Download Bootstrap asset from [Bootstrap 5](https://getbootstrap.com/docs/5.1/getting-started/download/). Then tempatkan css dan jsnya dalam folder public.
2.  Untuk memanggil assetsnya kita tidak bisa langsung ke endpointnya tapi buat sebuah file baru bernama Constants.php dalam folder core agar dinamis. Kemudian isi
`<?php`
`define('BASEURL',  'http://localhost/Code-Explore/MVCConcept%20-%20WPU/public');`
3. Then call/require Constants.php on file init.php
`require_once  'core/Constants.php';`
4. Panggil file css dan js Bootstrap dalam project dengan menambahkan baseurl
`<link href="<?=  BASEURL;  ?>/css/bootstrap.css"  rel="stylesheet">`
`<script src="<?=  BASEURL;  ?>/js/bootstrap.js"></script>`