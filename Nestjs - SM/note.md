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
  year: number;
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
  year: number;
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
  year: number;
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
  min_year: number;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  max_year: number;
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

## 07 - Integrasi NestJS dengan TypeORM
### 7.1 Apa itu TypeORM?
- TypeORM adalah sebuah **ORM** (Object Relational Mapping) yang dapat berjalan pada **NodeJS, Browser, Cordova, PhoneGap, Ionic, React Native, Native Script, Expo,** dan **Electron**.
- TypeORM mendukung **TypeScript** dan **Javascript** (ES5, ES6, ES7, ES8)
- TypeORM mendukung **Active Record** dan **Data Mapper**
- Dokumentasi lengkap mengenai Typeorm dapat diakses di sini [https://typeorm.io/](https://typeorm.io/)
### 7.2 Coding Time
Dokumentasi lengkap mengenai **typeorm** database pada **nestjs** dapat diakses [di sini](https://docs.nestjs.com/techniques/database#database)
#### **01 Konfigurasi**
- Lakukan installasi library **@nestjs/typeorm, typeorm dan mysql2**
```bash
$ pnpm add @nestjs/typeorm typeorm@0.2 mysql2 -D
```
- Buat file `config/typeorm.config.ts`, isi dengan configurasi database
```ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
type: 'mysql',
host: 'localhost',
port: 3306,
username: 'root',
password: 'password',
database: 'book_api',
entities: [__dirname + '/../**/*.entity.{js,ts}'],
synchronize: true,
};
```
- Ke file `app.module.ts` tambahkan `TypeOrmModule`
```ts
@Module({ 
  imports: [TypeOrmModule.forRoot(typeOrmConfig), BooksModule], 
})
```
#### **02 Membuat Skema dan Repository**
Dokumentasi lengkap mengenai `custom repository` dapat diakses [di sini](https://docs.nestjs.com/techniques/database#custom-repository).
> **Tips:** simpan file/folder yang memiliki fitur bersangkutan di folder yang sama. Misalnya Book memiliki beberapa fitur, fitur tersebut harus di folder yang sama dengan Book.
- Buat file `book.entity.ts`, isi dengan skema seperti kode di bawah
```ts
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  category: string;

  @Column()
  year: number;
}
```
- Buat file `repository/book.repository.ts`, untuk menyimpan **query yang berhubungan dengan database**
```ts
import { EntityRepository, Repository } from 'typeorm';
import { Book } from '../entity/book.entity';

@EntityRepository(Book)
export class BookRepository extends Repository<Book> {}
```
> Untuk query yang berhubungan dengan database harus **asynchronous**
#### **03 Implementasi**
<mark>Get Book<mark>
- Ke file `repository/book.repository.ts`, buat `query` **getBook**, seperti kode di bawah, lakukan secara **asynchronous**
```ts
async getBooks(filter: FilterBookDto): Promise<Book[]> {
  const { title, author, category, min_year, max_year } = filter;
  const query = this.createQueryBuilder('book');

  if (title) {
    query.andWhere('lower(book.title) LIKE :title', {
      title: `%${title.toLowerCase()}%`,
    });
  }
  if (author) {
    query.andWhere('lower(book.author) LIKE :author', {
      author: `%${author.toLowerCase()}%`,
    });
  }
  if (category) {
    query.andWhere('lower(book.category) LIKE :category', {
      category: `%${category.toLowerCase()}%`,
    });
  }
  if (min_year) {
    query.andWhere('book.year >= :min_year', { min_year });
  }
  if (max_year) {
    query.andWhere('book.year <= :max_year', { max_year });
  }

  return await query.getMany();
}
```
- Ke file `books.module.ts`, lakukan `import` terhadap **bookRepository**
```ts
@Module({
  imports: [TypeOrmModule.forFeature([BookRepository])],
  controllers: [BooksController],
  providers: [BooksService],
})
```
- Ke file `bookService`, lalu buat terlebih dahulu `constructor` seperti kode di bawah
```ts
constructor(
  @InjectRepository(BookRepository)
  private readonly bookRepository: BookRepository,
) {}
```
- Kemudian lakukan **Implementasi** pada method `getBooks`, lakukan secara **Asynchronous**
```ts
async getBooks(filter: FilterBookDto): Promise<Book[]> {
  return await this.bookRepository.getBooks(filter);
}
```
- Ke file `books.controller.ts`, lakukan **asynchronous** pada routing
```ts
@Get()
async getBooks(@Query() filter: FilterBookDto): Promise<Book[]> {
  return this.booksServices.getBooks(filter);
}
```
<mark>Create Book</mark>
- Ke file `books.controller.ts`, lakukan **asynchronous** pada routing
```ts
@Post()
async createBook(@Body() payload: CreateBookDto): Promise<void> {
  return this.booksServices.createBook(payload);
}
```
- ke file `books.service.ts`, lakukan **Implementasi** pada method `createBooks`, lakukan secara **Asynchronous**
```ts
async createBook(createBookDto: CreateBookDto): Promise<void> {
  return await this.bookRepository.createBook(createBookDto);
}
```
- Ke file `book.repository.ts` buat **query** database untuk function `createBook` 
```ts
async createBook(createBookDto: CreateBookDto): Promise<void> {
  const { title, author, category, year } = createBookDto;

  const book = this.create();
  book.title = title;
  book.author = author;
  book.category = category;
  book.year = year;

  try {
    await this.save(book);
  } catch (error) {
    throw new InternalServerErrorException(error);
  }
}
```
<mark>Get Book By Id</mark>  
Dokumentasi Lengkap mengenai cara membuat `Custom Pipes` dapat diakses [di sini](https://docs.nestjs.com/pipes#custom-pipes).
- Ke file `books.controller.ts`, lakukan **asynchronous** pada routing
```ts
@Get('/:id')
  async getBookById(@Param('id') id: string): Promise<Book> {
  return this.booksServices.getBookById(id);
}
```
- ke file `books.service.ts`, lakukan **Implementasi** pada method `getBookById`, lakukan secara **Asynchronous**, menggunakan **function** bawaan repository yaitu `findOne`
```ts
async getBookById(id: string): Promise<Book> {
  const book = await this.bookRepository.findOne(id);

  if (!book) {
    throw new NotFoundException(`Book with id ${id} not found`);
  }
  return book;
}
```
- Buat **validasi** apakah **UUID**nya sudah sesuai atau belum, dengan membuat file `~/pipes/uuid-validation.pipe.ts`
```ts
import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isUUID } from 'class-validator';

@Injectable()
export class UUIDValidationPipe implements PipeTransform {
  transform(value: any) {
    if (!isUUID(value, 4)) {
      throw new BadRequestException(`Value ${value} is not a valid UUID`);
    }
    return value;
  }
}
```
- Ke file `books.controller.ts` lakukan **implementasi pipe** pada **parameter id** function `getBookById`
```ts
@Get('/:id')
async getBookById(
  @Param('id', UUIDValidationPipe) id: string,
): Promise<Book> {
  return this.booksServices.getBookById(id);
}
```
<mark>Update Book</mark>  
- Ke file `books.controller.ts`, lakukan **asynchronous** pada routing, jangan lupa tambahkan **Pipe Validation UUID**
```ts
@Put('/:id')
async updateBook(
  @Param('id', UUIDValidationPipe) id: string,
  @Body() payload: UpdateBookDto,
): Promise<void> {
  return this.booksServices.updateBook(id, payload);
}
```
- ke file `books.service.ts`, lakukan **Implementasi** pada method `updateBook`, lakukan secara **Asynchronous**
```ts
async updateBook(id: string, updateBookDto: UpdateBookDto): Promise<void> {
  return await this.bookRepository.updateBook(id, updateBookDto);
}
```
- Ke file `book.repository.ts` buat **query** database untuk function `updateBook` 
```ts
async updateBook(id: string, updateBookDto: UpdateBookDto): Promise<void> {
  const { title, author, category, year } = updateBookDto;

  const book = await this.findOne(id);
  book.title = title;
  book.author = author;
  book.category = category;
  book.year = year;

  await this.save(book);
}
```
<mark>Delete Book</mark>  
- Ke file `books.controller.ts`, lakukan **asynchronous** pada routing, jangan lupa tambahkan **Pipe Validation UUID**
```ts
@Delete('/:id')
async deleteBook(@Param('id', UUIDValidationPipe) id: string): Promise<void> {
  return this.booksServices.deleteBook(id);
}
```
- ke file `books.service.ts`, lakukan **Implementasi** pada method `deleteBook`, lakukan secara **Asynchronous**
```ts
async deleteBook(id: string): Promise<void> {
  const result = await this.bookRepository.delete(id);
  if (result.affected == 0) {
    throw new NotFoundException(`Book with id ${id} not found`);
  }
}
```

## 08 - Membuat Users
### 8.1 Coding Time
<mark>Konfigurasi</mark>
- Buat terlbih dahulu `users.module.ts` dengan mengetikkan
```bash
$ nest g module Users
```
- Kemudian buat `users.service.ts` dengan mengetikkan
```bash
$ nest g service Users --no-spec-
```
- Kemudian buat `entity/user.entity.ts`, yang berisi **id, email, name, password, salt** berikan `unique` pada `email`
```ts
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  salt: string;
}
```
- Kemudian buat **repository** terlebih dahulu, `repository/user.repository.ts`
```ts
import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entity/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {}
```
<mark>Membuat User</mark>
- Untuk membuat user buat terlebih dahulu `dto/create-user.dto.ts`, kemudian isi seperti kode di bawah
```ts
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
```
- Buat function `createUser` secara **asynchronous** pada `user.repository.ts`
```ts
async createUser(createUserDto: CreateUserDto): Promise<void> {
    const { name, email, password } = createUserDto;

    const user = this.create();
    user.name = name;
    user.email = email;
    user.salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(password, user.salt);

    try {
      await user.save();
    } catch (e) {
      if (e.code == '23505') {
        throw new ConflictException(`Email ${email} already used`);
      } else {
        throw new InternalServerErrorException(e);
      }
    }
  }
```
- Jangan lupa untuk menambahkan library `bcrypt`
```bash
$ pnpm add bcrypt
```
- Kemudian ke file `users.module.ts` lakukan import terhadap `UserRepository`
```ts
imports: [TypeOrmModule.forFeature([UserRepository])],
```
- Ke file `users.service.ts` tambahkan function `createUser` secara **asynchronous**  
```ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<void> {
    return await this.userRepository.createUser(createUserDto);
  }
}
```
- Buat file `users.controller.ts` dengan mengetikkan
```ts
$ nest g controller Users --no-spec-
```
- Ke file `users.controller.ts` buat route dan buat function `createUser` seperti kode di bawah
```ts
import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() payload: CreateUserDto): Promise<void> {
    return this.usersService.createUser(payload);
  }
}
```