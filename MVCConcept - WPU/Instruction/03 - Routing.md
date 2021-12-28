<!-- Instruction Initial Routing -->
<!-- Instruction Initial Routing -->

1.  In app.php constructor try `var_dump($_GET)`
2.  Create class parseURL in app.php write
`if(isset($_GET['url])){`
`$url = ($_GET['url'])`
`return $url`
`}`
3. Make .htaccess in app folder and write
`Options -Indexes`
4. Make .htaccess in public folder and write
`Options -Multiview`
`RewriteEngine On`
`RewriteCond %{REQUEST_FILENAME} !-d`
`RewriteCond %{REQUEST_FILENAME} !-f`
`RewriteRule ^(.*)$ index.php?url=$1 [L]`
5. Back to app.php in function parseURL write
`$url  =  rtrim($_GET['url'],  '/');` untuk menghapus "/" dibelakang url
`$url  =  filter_var($url,  FILTER_SANITIZE_URL);` untuk mencegah karakter yang dapat menjadi celah keamanan
`$url  =  explode('/',  $url);` untuk memecah url menjadi array
`return  $url;`
6. In constructor write 
`$url = $this -> parseURL()` and try to
`var_dump($url)`