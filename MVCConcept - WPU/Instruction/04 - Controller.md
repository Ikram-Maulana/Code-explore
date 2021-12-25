<!-- Instruction for Constructor -->

1.  In app.php constructor delete `var_dump($_GET)`
2.  Create some variables in app.php, write
`protected  $controller  =  'Home';`
`protected  $method  =  'index';`
`protected  $params  =  [];`
3. Make Home.php in controllers folder, then write
`<?php
class Home {
	public  function index() {
		echo  'home/index';
	}
} ?>`
4. Back to app.php then create code for check url[0] is exists on controllers folder
`// Controller`
`if(isset($url[0])) {`
`if(file_exists('../app/controllers/'  .  $url[0]  .  '.php'))  {`
`$this->controller  =  $url[0];`
`unset($url[0]);` // Kalau sudah digunakan ketika di var_dump url[0] hilang
`}`
`}`
5. Then require the class and instantiate the class
`require_once  '../app/controllers/'  .  $this->controller  .  '.php';`
`$this->controller  =  new  $this->controller;` 
6. Then check if method is exists in controller from url[1]
`// Method` 
`if(isset($url[1]))  {`
`if(method_exists($this->controller,  $url[1]))  {`
`$this->method  =  $url[1];`
`unset($url[1]);`
`}`
`}`
7. Check if user input the parameters when url is not empty
`// Parameters`
`if(!empty($url))  {`
`$this->params  =  array_values($url);`
`}`
8. Make About.php in controllers folder, then write
`<?php
class About {
	public  function index($nama  =  'Ikram',  $pekerjaan  =  'Mahasiswa') {
		echo  "Halo, nama saya $nama, saya adalah seorang $pekerjaan";
	}
	public function page() {
	echo  'about/page';
	}
} ?>`
9. Back to App.php then Jalankan Controller & Method, Serta kirimkan params jika ada
`call_user_func_array([$this->controller,  $this->method],  $this->params);` 