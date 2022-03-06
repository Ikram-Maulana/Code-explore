# NodeJS Module System  
"**Modules** merupakan sekumpulan code yang dapat digunakan kembali, dengan antarmuka yang terdefinisi"  
"**Node Modules** merupakan fungsionalitas yang simple ataupun kompleks yang tersimpan di dalam sebuah file javascript, yang dapat kita gunakan kembali pada aplikasi NodeJS"  
"**Node Modules**, setiap modul di dalam NodeJS memiliki konteks-nya masing-masing, tidak bisa saling tercampur dengan modul lain pada lingkup global"

## Alur Export Import
1. kita dapat mengambil seluruh code di file satu dengan **export** kemudian kita **import** ke file inti
![All](Images/Screenshot%20(299).png)
2. Kita dapat memecah code file pertama ke beberapa fungsi lalu kita **export** kemudian kita **import** ke file inti
![Part](Images/Screenshot%20(300).png)

## Node Modules
Dokumentasi tentang modules dapat diakses [disini](https://nodejs.org/dist/latest-v16.x/docs/api/modules.html)
1. Core Modules (**Modul utama yang ada pada sistem**)
2. Local Modules (**Modul yang kita buat sendiri**)
3. Third Party Modules (**npm modules**)

## Require()
Fungsi require mencari modul dengan urutan sebagai berikut:
1. Core Modules
2. File atau direktori (./ atau / atau ../)
3. Folder 'node_modules'

## Export dan Import 2 fungsi / variable / mix
Untuk export dan importnya menggunakan destructuring object `module.export.namaFungsiorVar = namaFungsiorVar dan import nama filenya` atau `{}`