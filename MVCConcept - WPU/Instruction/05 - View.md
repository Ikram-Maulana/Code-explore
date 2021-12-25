<!-- Instruction for View -->

1.  In Home.php constructor delete isi constructor and write 
`$this->view('home/index)`
2.  Create index.php on folder views/home and write HTML code, then write h1 on body tag
`<h1>Selamat Datang di Website Saya</h1>`
3. Do the same think like Home controller, but in index about parse the data like this
`$data['nama']  =  $nama;`
`$data['pekerjaan']  =  $pekerjaan;`
`$data['umur']  =  $umur;`
`$this->view('about/index',  $data);`
4. Make folder about on views and make file index.php and page.php, in index.php catch data using
`<p>Halo, nama saya <?=  $data['nama']  ?>, umur saya <?=  $data['umur']  ?> tahun, saya adalah seorang <?=  $data['pekerjaan']  ?></p>`
5. Separate Header and Footer, make folder templates on folder views
	- [x] Header.php for header html
	- [x] Footer.php for footer html
7. Call header and footer di setiap method di controller, misalkan di about index, kemudian lakukan hal yang sama di method file lain
`$this->view('templates/header');` 
`$this->view('about/index',  $data);`
`$this->view('templates/footer');`
8. Namun permasalahannya sekarang titlenya sama semua, untuk itu lakukan seperti ini, saya contohkan untuk home, sisanya lakukan hal yang sama di method file lain
`<title>Halaman <?=  $data['judul'];  ?></title>` -> di file header.php
`$data['judul']  =  'Home';`
`$this->view('templates/header',  $data);`