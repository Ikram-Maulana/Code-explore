# Tutorial Nest JS
Dokumentasi lengkap mengenai NestJS dapat diakses [di sini](https://nestjs.com/)  

## 01 - Pengenalan NestJS
- Nest (NestJS) is a framework for building efficient, scalable **Node.js** server-side applications.
- Built with and fully supports **Typescript** (yet still enables developers to code in pure **Javascript**).
- Combine elements of **Object Oriented Programming, Functional Programming, and Functional Reactive Programming**.
- "A progressive Node.js framework for building efficiently, scalable, and enterprise-grade server-side applications on top of Typescript and Javascript (ES6, ES7, ES8)".
### 1.1 NestJS Di balik Layar
- NestJS menggunakan *robust HTTP server* seperti **Express** (default) dan **Fastify**.
- NestJS meng-expose API dari HTTP Server ke developer.
### 1.2 Filosofi NestJS
- Semenjak kemunculan NodeJS, framework frontend seperti **Angular**, **React**, dan **Vue** menjadi sangat populer.
- Sedangkan dari sisi backend, banyak library dan tools yang tidak menyelesaikan permasalahan dari segi **arsitektur**.
- Oleh sebab itu, NestJS hadir menyelesaikan permasalahan ini dengan menyediakan arsitektur yang **testable, scaleable, loosely coupled,** dan **maintainable**.
### 1.3 NestJS CLI
- NestJS CLI merupakan sebuah tool **command-line interface** yang memudahkan developer untuk **membuat** project NestJS dan **membangun** project dengan **struktur yang baik**.
### 1.4 Project Overview
- Book API
- User
  - Register
  - Login
- Books
  - Add Book
  - Edit Book
  - View Book
  - Delete Book
- Restful API
- JWT (Json Web Token)
- Best Practice
- Unit Testing  

## 02 - Instalasi NestJS  
- NodeJS (>= 10.13.0)
- CLI untuk installasi
```bash
$ npm i -g @nestjs/cli
# or
$ yarn global add @nestjs/cli

$ nest new project-name
```
- **Buka** folder project dalam code editor favorit
- **Hapus** beberapa file seperti `app.controller.spec.ts, app.controller.ts, dan app.service.ts` dan beberapa `import` di `app.module.ts`  

## 03 - NestJS Modules  
- Module merupakan sebuah class yang digunakan untuk mengelompokkan komponen yang sama (contoh: Fitur)
- Setiap aplikasi NestJS **wajib** memiliki setidaknya satu module, yaitu root module
- Setiap module diletakkan pada sebuah folder agar struktur folder menjadi rapi
- Module merupakan **Singleton**
### 3.1 Membuat Module
- Untuk membuat module, class diberikan decorator **@Module()**, decorator ini bertugas untuk memberikan metadata pada module yang digunakan oleh NestJS untuk mengorganisir project
- Kita dapat membuat module menggunakan NestJS CLI  
```bash
$ nest g module Users 
```
### 3.2 Property Module  
| Property    | Deskripsi                                                                                                                    |
|-------------|------------------------------------------------------------------------------------------------------------------------------|
| Providers   | Kumpulan providers yang akan dibuat oleh NestJS Injector yang bisa di share ke seluruh module ini                            |
| Controllers | Kumpulan controllers yang akan digunakan pada module                                                                         |
| Imports     | Daftar module yang ingin kita gunakan fiturnya. Dengan syarat fitur/provider/service tersebut di export oleh module tersebut |
| Exports     | Kumpulan fitur/provider/service yang akan di export. Fitur ini nantinya dapat di import di module lain                       |  
### 3.3 Project Overview
- Application Module
  - User Module
  - Auth Module
  - Book Module
### 3.4 Coding Time
- Buat file `books.module.ts` dengan mengetikkan perintah
```bash
nest g mo Books
```  

## 04 - NestJS Controller  
- Controller bertugas untuk menerima request dari client dan memberikan response ke client
- Setiap controller bertugas untuk menerima data dari endpoint tertentu, seperti **"/users"** dengan method tertentu seperti **GET, POST, PATCH, PUT,** dan **DELETE**
- Controller akan menggunakan provider yang telah didaftarkan pada module  
### 4.1 Membuat Controller
- Untuk membuat controller, kita harus memberikan decorator **@Controller()** pada suatu class
- Parameter yang diisi pada decorator **@Controller()** adalah string base path dari controller tersebut
- Dengan NestJS CLI
```bash
$ nest g controller Users
```
### 4.2 Project Overview
- Application Module
  - User Module
    - User Controller
  - Auth Module
    - Auth Controller
  - Book Module
    - Book Controller
### 4.3 Coding Time
- Buat controller `books.controller.js` dengan CLI
```bash
$ nest g co Books
```
- Hapus terlebih dahulu file `books.controller.spec.ts`
- Ke file `books.controller.ts` buat **routes** `@GET()`
- Untuk menjalankan project gunakan CLI
```bash
pnpm start:dev
```
- Untuk lihat **PORT** bisa akses `main.ts`
- Coba ubah method `@GET()` untuk mengambil parameter `:name`
```ts
@Get('/:name')
hello(@Param('name') name: string) {
  return `Hello ${name}!`;
}
```
- Buat routes `@Post()` yang mengambil `@Body() payload:any`
- Untuk mengambil salah satu data saja, ubah `payload` menjadi nama data yang ingin diambil, masukkan juga sebagai parameter dalam `@Body()`
```ts
@Post()
createBook(@Body('name') name: string) {
  return name;
}
```  

## 05 - NestJS Providers  
- Provider merupakan komponen penting pada NestJS
- Provider biasanya digunakan sebagai **Service, Repository, Factory, Helper,** dan lain-lain
- NestJS akan meng-inject provider ke module yang menggunakan provider tersebut (**Dependency Injection**), sehingga provider tersebut dapat digunakan di seluruh tempat di module tersebut (contoh: **Controller, Provider lain**)
### 5.1 Project Overview
- Application Module
  - User Module
    - User Controller
    - User Service
  - Auth Module
    - Auth Controller
    - Auth Service
  - Book Module
    - Book Controller
    - Book Service
### 5.2 Coding Time
### **01 Get All Books**
- Buat file `books.service.ts` dengan mengetikkan
```bash
nest g service Books
```
- Hapus file `books.service.spec.ts` dan semua routing sebelumnya di `books.controller.ts`
- Buat routing baru **GET** `getAllBooks()`, sebelum mengisi ke file `books.service.ts` terlebih dahulu
- Tambahkan kode dibawah
```ts
private books: any[] = [];

getAllBooks(): any {
  return this.books;
}
```
- Ke file `books.controller.ts` tambahkan kode di bawah
```ts
constructor(private booksServices: BooksService) {}

@Get()
getAllBooks() {
  return this.booksServices.getAllBooks();
}
```
#### **02 Create Books**  
- Ke file `books.controller.ts`, tambah routes **POST** `createBook()` yang mengambil `Body()` title, author dan category
```ts
@Post()
createBook(
  @Body('title') title: string,
  @Body('author') author: string,
  @Body('category') category: string,
) {
  this.booksServices.createBook(title, author, category);
}
```
- Ke file `book.service.ts`, lalu tambahkan function `createBook` seperti di bawah ini  
```ts
createBook(title: string, author: string, category: string): any {
  const book = { title, author, category };
  this.books.push(book);
  return book;
}
```
- Karena belum memiliki `id` yang dibuat otomatis maka tambahkan library `uuid`
- lakukan import `uuid` di `books.service.ts` dan tambahkan di **variabel book**
```ts
const book = { id: uuidv4(), title, author, category };
```  
#### **03 Update Books**
- Ke file `books.controller.ts`, tambah routes **PUT** `updateBook()` yang mengambil `Param()` id, dan `Body()` title, author dan category
```ts
@Put(':id')
updateBook(
  @Param('id') bookId: string,
  @Body('title') title: string,
  @Body('author') author: string,
  @Body('category') category: string,
) {
  this.booksServices.updateBook(bookId, title, author, category);
}
```  
- Ke file `book.service.ts`, lalu tambahkan function `updateBook`, tapi sebelum itu tambahkan terlebih dahulu function `findBookById` seperti di bawah ini 
```ts
findBookById(bookId: string): any {
  const bookIdx = this.books.findIndex((book) => book.id === bookId);
  if (bookIdx === -1) {
    throw new NotFoundException(`Book with id ${bookId} not found`);
  }
  return bookIdx;
}
```
- Lalu buat function `updateBook` seperti kode di bawah
```ts
updateBook(bookId: string, title: string, author: string, category: string) {
  const bookIdx = this.findBookById(bookId);
  const book = this.books[bookIdx];
  book.title = title;
  book.author = author;
  book.category = category;
  return book;
}
```
#### **04 getBookById**
- Ke file `books.controller.ts`, tambah routes **GET** `getBookById()` yang mengambil `Param()` id seperti kode di bawah
```ts
@Get(':id')
getBookById(@Param('id') bookId: string) {
  return this.booksServices.getBookById(bookId);
}
```  
- Ke file `book.service.ts`, lalu tambahkan function `getBookById()`
```ts
getBookById(bookId: string): any {
  const bookIdx = this.findBookById(bookId);
  const book = this.books[bookIdx];
  return book;
}
```  
#### **05 deleteBook**
- Ke file `books.controller.ts`, tambah routes **DELETE** `deleteBook()` yang mengambil `Param()` id seperti kode di bawah
```ts
@Delete('/:id')
deleteBook(@Param('id') bookId: string) {
  this.booksServices.deleteBook(bookId);
}
```  
- Ke file `book.service.ts`, lalu tambahkan function `deleteBook()`
```ts
deleteBook(bookId: string): any {
  const bookIdx = this.findBookById(bookId);
  const book = this.books[bookIdx];
  this.books.splice(bookIdx, 1);
  return book;
}
```
#### **06 Mengubah getAllBooks menjadi filter getBooks berdasarkan Query**
- Ke file `books.controller.ts`, ubah routes **GET** `getAllBook()` menjadi `getBook()` mengambil `Query()` title, author dan category seperti kode di bawah
```ts
@Get()
getBooks(
  @Query('title') title: string,
  @Query('author') author: string,
  @Query('category') category: string,
) {
  return this.booksServices.getBooks(title, author, category);
}
```
- Ke file `book.service.ts`, lalu ubah function `getAllBooks()` menjadi `getBooks()`, lakukan kondisi filter dalam **variabel books**
```ts
getBooks(title: string, author: string, category: string): any {
  const books = this.books.filter((book) => {
    let isMatch = true;
    if (title && book.title !== title) {
      isMatch = false;
    }
    if (author && book.author !== author) {
      isMatch = false;
    }
    if (category && book.category !== category) {
      isMatch = false;
    }
    return isMatch;
  });
  return books;
}
```  

## 06 - DTO dan Validations  
### 6.1 NestJs Pipe
- Merupakan sebuah class yang bertugas untuk melakukan **transformasi** atau **validasi argument** yang akan di proses oleh route handler
- Pipe dapat mengembalikan data asli atau data yang sudah dimodifikasi ke route handler
- Jika proses validasi gagal, pipes akan menghentikan prosesnya di sana dan melempar eksepsi (**Throw Exception**)
- Eksepsi yang dilempar akan diproses oleh NestJS dan dijadikan error response (**bukan internal server error**)
### 6.2 Pipes yang tersedia
- **ValidationPipe**
- ParseIntPipe
- ParseFloatPipe
- ParseBoolPipe
- ParseArrayPipe
- ParseUUIDPipe
- ParseEnumPipe
- DefaultValuePipe
### 6.3 Cara Membuat Pipes
- Tambahkan decorator **@Injectable()** pada class dan implement interface **PipeTransform**
### 6.4 Cara Menggunakan Pipes
- Global Scope Pipe
- Handler Scope Pipe
- Parameter Scope Pipe
### 6.5 DTO (Data Transfer Object)
- Untuk membungkus menjadi struktur yang kita inginkan
### 6.6 Coding Time
#### **01 Membuat DTO**
- Buat terlebih dahulu file `dto/create-book.dto.ts`, isi dengan stuktur title, author, category, year seperti kode di bawah
```ts
export class CreateBookDto {
  title: string;
  author: string;
  category: string;
  year: string;
}
```
> Sebaiknya DTO dibuat terpisah tiap request, agar memudahkan jika sewaktu-waktu ada perubahan  
- Ke file `book.controller.ts`, lakukan **implementasi CreateBookDto**, ubah kode createbook sebelumnya menjadi seperti kode di bawah 
```ts
@Post()
createBook(@Body() payload: CreateBookDto) {
  this.booksServices.createBook(payload);
}
```
- Begitujuga ubah function createBook di file `book.service.ts` seperti kode di bawah
```ts
createBook(createBookDto: CreateBookDto) {
  const { title, author, category, year } = createBookDto;
  const book = { id: uuidv4(), title, author, category, year };
  this.books.push(book);
  return book;
}
```
- Buat file `dto/update-book.dto.ts` isi dengan stuktur title, author, category, year seperti kode di bawah  
```ts
export class UpdateBookDto {
  title: string;
  author: string;
  category: string;
  year: string;
}
```
- Ke file `book.controller.ts`, lakukan **implementasi UpdateBookDto**, ubah kode updateBook sebelumnya menjadi seperti kode di bawah 
```ts
@Put('/:id')
updateBook(@Param('id') bookId: string, @Body() payload: UpdateBookDto) {
  this.booksServices.updateBook(bookId, payload);
}
```
- Begitujuga ubah function updateBook di file `book.service.ts` seperti kode di bawah
```ts
updateBook(bookId: string, updateBookDto: UpdateBookDto) {
  const { title, author, category, year } = updateBookDto;
  const bookIdx = this.findBookById(bookId);
  const book = this.books[bookIdx];
  book.title = title;
  book.author = author;
  book.category = category;
  book.year = year;
  return book;
}
```  
#### **02 Membuat Validasi**
Dokumentasi lengkap mengenai cara membuat pipe **class validator** dapat diakses [di sini](https://docs.nestjs.com/pipes#class-validator).  
Dokumentasi lengkap mengenai penggunaan **class-validator** dapat diakses [di sini](https://github.com/typestack/class-validator#usage).
- install terlebih dahulu library `class-validator` dan `class-transformer`
#### **02.1 Global Scope Pipe**
- Ke file `create-book.dto.ts` dan `update-book.dto.ts` tambahkan **class validator** `@Isnull()`, `@IsInt()` dan **class-transform** `@Type(() => number)`  
```ts
import { IsInt, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateBookDto/UpdateBookDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  author: string;

  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  year: string;
}
```
- Ke file `main.ts` tambahkan `app.useGlobalPipes()` seperti kode di bawah
```ts
app.useGlobalPipes(new ValidationPipe());
```
#### **02.2 Only for Some Routes Pipe**  
- Ke file `main.ts` hapus terlebih dahulu kode di bawah
```ts
app.useGlobalPipes(new ValidationPipe());
```
- Ke file `books.controller.ts` tambahkan **ValidationPipe** ke routing yang **diinginkan**, misalnya di **updateBook** 
```ts
@Put('/:id')
@UsePipes(ValidationPipe)
updateBook(@Param('id') bookId: string, @Body() payload: UpdateBookDto) {
  this.booksServices.updateBook(bookId, payload);
}
```  
#### **02.3 Parameter Scope Pipe**  
- Sebelum melanjutkan, hapus setelan **Global Scope Pipe** atau **Only for Some Routes Pipe**
- ke file `books.controller.ts` coba kita buat contohnya
```ts
@Post()
createBook(@Body('year', parseIntPipe) year: number) {
  console.log({ year }) // year akan berubah menjadi int
}
```
> **Global Scope Pipe** merupakan best practice untuk membuat pipe validation
#### **02.4 Make Validation and DTO for Filter Book**
- Buat file `dto/filter-book.dto.ts` dan isi dengan `title, author, category, min_year dan max_year` tambahkan **class validator** `@IsOptional()`, `@IsInt()` dan **class-transform** `@Type(() => number)` seperti kode di bawah  
```ts
import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class FilterBookDto {
  @IsOptional()
  title: string;

  @IsOptional()
  author: string;

  @IsOptional()
  category: string;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  min_year: string;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  max_year: string;
}
```
- Ke file `book.controller.ts`, lakukan **implementasi getBooks**, ubah kode getBooks sebelumnya menjadi seperti kode di bawah 
```ts
@Get()
getBooks(@Query() filter: FilterBookDto) {
  return this.booksServices.getBooks(filter);
}
```  
- Begitujuga ubah function getBooks di file `book.service.ts` seperti kode di bawah
```ts
getBooks(filter: FilterBookDto): any[] {
  const { title, author, category, min_year, max_year } = filter;
  const books = this.books.filter((book) => {
    if (title && book.title !== title) {
      return false;
    }
    if (author && book.author !== author) {
      return false;
    }
    if (category && book.category !== category) {
      return false;
    }
    if (min_year && book.year < min_year) {
      return false;
    }
    if (max_year && book.year > max_year) {
      return false;
    }

    return true;
  });
  return books;
}
```