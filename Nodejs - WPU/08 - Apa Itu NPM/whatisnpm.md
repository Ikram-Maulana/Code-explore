# Apa Itu NPM?  
**NPM (Node Package Manager)**, websitenya bisa diakses [disini](https://www.npmjs.com/).
- Cara initialize folder dengan npm  
`npm init --y`
- Pengertian version saat init folder npm `v.1.0.0`, yang `0` terakhir itu update patch atau perbaikan bug saja, `0` tengah itu perubahan minor lebih banyak dari patch, `1` itu perubahan major
- Membuat scripts `"start": "node app.js"` untuk melakukan running di cli dengan `npm start`
- Kalau bukan script standard seperti `"dev": "ls"` running di cli menggunakan `npm run dev`
- Mencoba install package **Validator** untuk melakukan validasi terhadap string apakah itu email, nomorHp, dll dengan `npm install namaPackage`. Setelah install akan masuk ke dependencies.
- Cara uninstall package menggunakan `npm uninstall namaPackage`
- Cara install package spesifik versinya `npm install namaPackage@versi`