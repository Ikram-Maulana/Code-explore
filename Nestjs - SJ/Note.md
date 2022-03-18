# Tutorial Nest JS Bahasa Indonesia
Dokumentasi lengkap mengenai NestJS dapat diakses [di sini](https://nestjs.com/)  

## 01 - Persiapan  
Ada beberapa software yang harus diinstall sebelum melanjutkan tutorial:
- NodeJS
- Xampp
- VS Code
- Web Browser

## 02 - Hello World
Dokumentasi mengenai cara menginstall Nestjs secara global dapat diakses [di sini](https://docs.nestjs.com/).
- Untuk membuat project baru silahkan ketik `nest new project-name`
- Untuk menjalankan project dalam environment `development` silahkan ketik `pnpm start:dev`
- Kita akan mencoba merubah tulisan **Hello World**, pergi ke file `app.service.ts` dan **rubah tulisan** dalam fungsi `getHello()`
- Kita akan mencoba mengubah **port** aplikasi menggunakan **.env**, pertama install terlebih dahulu package `dotenv`
- Buat file `.env` dan **instansiasi** `APP_PORT`
- Ke file `main.ts` lakukan import terhadap `dotenv`, lalu buat `dotenv.config()` dan buat **variabel** untuk menampung **PORT** dari `process.env.APP_PORT`
- Buat `Logger` untuk **menginformasikan** aplikasi berjalan di port berapa, lakukan `Logger.log()` dan `import Logger`  

## 03 - Koneksi Database  
Dokumentasi lengkap mengenai cara integrasi **NestJS** dengan **Database** dapat diakses [di sini](https://docs.nestjs.com/techniques/database#database).
- Install terlebih dahulu `@nestjs/typeorm, typeorm, mysql2`
- Ke file `.env`, lakukan **instansiasi** terhadap `DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME`
- Ke file `app.module.ts` tambahkan kode berikut dalam **imports**:
```ts
TypeOrmModule.forRoot({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [],
  synchronize: true,
}),
```
- Jangan lupa untuk lakukan import terhadap `dotenv`, lalu buat `dotenv.config()`  

## 04 - Generate Table  
Dokumentasi lengkap mengenai **memisahkan ormconfig** dapat diakses [di sini](https://docs.nestjs.com/techniques/database#typeorm-integration).  
Dokumentasi lengkap mengenai **membuat module dan entitas** dapat diakses [di sini](https://docs.nestjs.com/techniques/database#repository-pattern). 
- Ke file `main.ts` pindahkan isi dari `TypeOrmModule.forRoot()` ke file `~/ormconfig.js` dalam `module.exports`
- Jangan lupa untuk lakukan import terhadap `dotenv`, lalu buat `dotenv.config()`
- Tambahkan beberapa kode dibawah
```js
{
logging: true,
dropSchema: false,
entities: ['src/**/*.entitiy.ts', 'dist/**/*.entity{.ts,.js}']
},
```
- Lakukan `generate module` **fileKita** untuk membuat **skema** dengan mengetikkan kode berikut `nest generate mo fileKita`, nanti akan muncul file `/src/file-kita/file-kita.module.ts`
- Buat file `/src/file-kita/file-kita.entity.ts`, lalu tambahkan kode dibawah:
```ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FileKita {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  // Masukkan skema yang akan kita bangun
}
```
- Ke file `/src/file-kita/file-kita.module.ts` lakukan import terhadap `{FileKita}` dan `TypeOrmModule`
- Di dalam `@module` tambahkan kode `imports: [TypeOrmModule.forFeature([FileKita])]`  

## 05 - Controller & Services  
Dokumentasi lengkap mengenai **Controller** dapat diakses [di sini](https://docs.nestjs.com/controllers#controllers).  
Dokumentasi lengkap mengenai **Services** dapat diakses [di sini](https://docs.nestjs.com/providers#services).
- **Buat file controller** dengan mengetikkan command berikut `nest generate co fileKita`
- Tambahkan beberapa **routing** seperti
```ts
@Get()
lihatOutput(): string {
  return 'Ini controller file-kita';
}
```
- **Buat file service** dengan mengetikkan command berikut `nest generate s fileKita`
- buka file **file-kita.controller.ts** lakukan **import** terhadap file **service**, lalu buat `constructor(private fileKitaService: FileKitaService){}`
- **Buat routing** ke file service yang isinya `this.fileKitaService.lihatSemua()`
- Ke file `file-kita.service.ts` buat fungsi `lihatSemua` secara `asynchronous` yang me `return 'Ini service file-kita`