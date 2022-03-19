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

## 06 - Read Data
Dokumentasi lengkap mengenai **repositories** dapat diakses [di sini](https://docs.nestjs.com/recipes/mikroorm#repositories).
- Ke file `file-kita.service.ts` lakukan `import` terhadap `entity`
- Lakukan `constructor(){}` dengan `InjectRepository` dan konfigurasi seperti di bawah
```ts
@InjectRepository(FileKita)
private fileKitaRepository: Repository<FileKita>,
```
- Buat fungsi `getAll()` dan isi dengan `return this.fileKitaRepository.find()`
- Ke file `file-kita.controller.ts`, lakukan **routing** `lihatOutput()` ke `this.fileKitaService.getAll()`  

## 07 - Post Data  
Dokumentasi lengkap mengenai **CRUD** menggunakan nestjs dapat diakses [di sini](https://docs.nestjs.com/recipes/crud-generator#crud-generator).
- Buat file `file-kita.dto.ts` isi dengan `export class` yang berisi `schema`
- Ke file `file-kita.controller.ts` lakukan import terhadap file `dto`
- Buat `routing` **POST** dengan parameter `@Body data: FileKitaDTO`, kemudian lakukan `return` ke `this.FileKitaService.create()` 
- Ke file `file-kita.service.ts` lakukan **import** terhadap file `dto`
- Buat fungsi `create()` dengan **parameter** `data: FileKitaDTO`
- Kemudian lakukan `create` dan `save` data dengan kode di bawah
```ts
const fileKitaNew = this.fileKitaRepository.create(data);
await this.fileKitaRepository.save(fileKitaNew);
return fileKitaNew;
```  

08 - Mengambil 1 baris data  
- Ke file `file-kita.controller.ts`, ganti routes **GET lihatDetail()** menjadi `return this.fileKitaService.getOneData(id)`
- Kita **buat fungsinya**, ke file `file-kita.services.ts` dan buat fungsi `getOneData(id: string)`
- Isi fungsi tadi dengan `return this.fileKitaRepository.findOne({ where: { id } })`  

09 - Update Data  
- Ke file `file-kita.controller.ts`, buat routes **PATCH(':id') update(@Param id: string, @Body() data: Partial\<fileKitaDto>)** dan isi dengan `return this.fileKitaService.update(id, data)`
- Kita **buat fungsinya**, ke file `file-kita.services.ts` dan buat fungsi `update(id: string, data: Partial<fileKitaDto>)`
- Isi fungsi tadi dengan 
```ts
const fileKita = await this.fileKitaRepository.findOne({ where: { id } });
await this.fileKitaRepository.update(id, data);
return fileKita;
```  

## 10 - Menghapus Data  
- Ke file `file-kita.controller.ts`, buat routes **DELETE(':id') delete(@Param id: string)** dan isi dengan `return this.fileKitaService.delete(id)`
- Kita **buat fungsinya**, ke file `file-kita.services.ts` dan buat fungsi `delete(id: string)`
- Isi fungsi tadi dengan 
```ts
const fileKita = await this.fileKitaRepository.findOne({ where: { id } });
await this.fileKitaRepository.delete(id);
return fileKita;
```  

## 11 - Custom Error
Dokumentasi lengkap mengenai **exception filters** dapat diakses [di sini](https://docs.nestjs.com/exception-filters#exception-filters-1).
- Buat file filter dengan mengetikkan `nest generate f http-error`, buat folder **shared** pindahkan file hasil generate **ke folder shared**, isinya dapat dilihat di **dokumentasi**
- Ke file `app.module.ts`, lakukan import terhadap `./shared/http-error.filter.ts`
- Pada `@module providers` tambahkan kode berikut, dokumentasinya dapat diakses [di sini](https://docs.nestjs.com/exception-filters#binding-filters). 
```ts
{
  provide: APP_FILTER,
  useClass: HttpErrorFilter,
},
```
- Coba **abstraksi** providersnya dalam variabel `errorResponse`, lalu ganti `json`
```ts
const errorResponse = {
  statusCode: status,
  timestamp: new Date().toLocaleDateString(),
  path: request.url,
  method: request.method,
  message: exception.message || null,
};
```
- Buat `logger` untuk **sistem**
```ts
Logger.error(
  `${request.method} ${request.url}`,
  JSON.stringify(errorResponse),
  'ExceptionFilter',
);
```  

## 12 - Membuat Page Tampil Data  
Dokumentasi lengkap mengenai **MVC** dapat diakses [di sini](https://docs.nestjs.com/techniques/mvc).  
- Install terlebih dahulu `template engine` yang akan digunakan `pnpm add ejs`
- Ke file `main.ts` tambahkan kode dibawah, jangan lupa tambahkan `<NestExpressApplication>`
```ts
app.useStaticAssets(join(__dirname, '..', 'public'));
app.setBaseViewsDir(join(__dirname, '..', 'views'));
app.setViewEngine('ejs');
```
- Buat file `views/index.ejs`
- Pergi ke file `file-kita.controller.ts` ubah routes index menjadi `jsondata` dan ubah menjadi `async await`, isinya buat dalam **object data**
- Buat **routes index** baru dengan kode di bawah
```ts
// Index
@Get()
@Render('file-kita/index')
root() {
  return { message: 'Hello world!', title: 'Index FileKita' };
}
```
- Ke file `index.ejs`, lakukan pemanggilan terhadap data yang di parsing di **controller**
- Masukkan `jsondata` dalam `ajax dataTable`