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

## 09 - Implementasi JWT (Json Web Tokens)
> Web yang dapat diakses:
> - https://tools.ietf.org/html/rfc7519  
> - https://jwt.io
- JWT merupakan standar untuk melakukan pertukaran data
- JWT mengikuti standar **RFC 7519**
- Data yang dipertukarkan menggunakan format JSON
- JWT dapat di enkripsi menggunakan secret key seperti **HMAC** atau public/private key seperti **RSA**
### 9.1 Kapan menggunakan JWT
- Authorization
- Information Exchange
### 9.2 Struktur JWT
- Header
- Payload
- Signature
### 9.3 Header JWT
- Berisi informasi algoritma enkripsi yang digunakan
- Merupakan hasil Base64 informasi header dalam bentuk JSON
### 9.4 Payload JWT
- Berisi informasi yang digunakan untuk memverifikasi antar party
- Seharusnya tidak berisi data sensitif
- Hasil dari base64 dalam bentuk JSON
### 9.5 Signature
- Berisikan informasi yang dapat digunakan untuk memvalidasi JWT
- Didapatkan dengan mengenkripsi **header** dan **payload** menggunakan algoritma yang sudah ditentukan oleh header
- Menggunakan **secret key** atau **private key** dari penerima
### 9.6 Access Token vs Refresh Token
<mark>Access Token</mark>
- Digunakan untuk mengakses resource 
- Membawa informasi yang digunakan untuk authorization
- Tidak disimpan di database
- Didapatkan ketika melakukan login dan refresh token
- Punya waktu hidup sedikit  

<mark>Refresh Token</mark>
- Digunakan untuk membuat access token baru
- Membawa informasi untuk membuat access token baru
- Disimpan di database (**bukan token**)
- Didapatkan ketika melakukan login
- Punya waktu hidup yang panjang

### 9.7 Best Practice JWT
- **Jangan** meletakan data **sensitif** di payload (contoh: password, role, saldo)
- Expired time untuk access token sebaiknya sekecil mungkin (contoh: 30 detik, 1 menit, 1 jam)
- Gunakan **refresh token** untuk membuat **access token** yang baru
- **Jangan** simpan **access token** di database

### 9.8 Coding Time
<mark>Configuration</mark>
- Buat file `auth.module.ts` dengan mengetikkan perintah berikut
```bash
$ nest g module Auth
```
- Kemudian buat file `auth.service.ts` dengan mengetikkan perintah berikut
```bash
$ nest g service Auth
```
- Install terlebih dahulu **library** untuk **authentication**
```bash
$ pnpm add @nestjs/passport @nestjs/jwt passport passport-jwt
```
- Buat file `config/jwt.config.ts`, kemudian isi dengan kode berikut
```ts
import { JwtModuleOptions } from '@nestjs/jwt';

export const JwtConfig: JwtModuleOptions = {
  secret: 'dreamtechteam',
  signOptions: {
    expiresIn: 60,
  },
};
```
- Ke file `auth.module.ts` lakukan **imports** terhadap `JwtModule` register `jwtConfig`
```ts
imports: [JwtModule.register(jwtConfig)],
```
- Ke file `auth.service.ts` lakukan **construct** terhadap `JwtService`
```ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}
}
```
<mark>Login Setup</mark>
- Buat file `dto/login.dto.ts`, isi dengan kode di bawah
```ts
import { IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
```
- Buat terlebih dahulu `interface/login-response.interface.ts` untuk **access_token dan refresh_token**, isi seperti kode di bawah
```ts
export interface LoginResponse {
  access_token: string;
  refresh_token: string;
}
```
- Ke file `auth.service.ts`, buat **function** login yang melakukan `Promise` dari `LoginResponse`
```ts
async login(loginDto: LoginDto): Promise<LoginResponse> {
  const { email, password } = loginDto;
}
```
<mark>Login Validate Email & Password</mark>
- Kita perlu fitur yang ada di user untuk memvalidasi **email** dan **password**, ke file `users.service.ts` kemudian buat **function** `validateUser`
```ts
async validateUser(email: string, passowrd: string): Promise<User> {
  return await this.userRepository.validateUser(email, passowrd);
}
```
- Ke file `user.repository.ts`, buat **function** `validateUser`
```ts
async validateUser(email: string, password: string): Promise<User> {
  const user = await this.findOne({ email });

  if (user && (await user.validatePassword(password))) {
    return user;
  }
  return null;
}
```
- Ke file `user.entity.ts`, kemudian buat **function** `validatePassword` dan **import** `bcrypt`
```ts
import * as bcrypt from 'bcrypt';
```
```ts
async validatePassword(password: string): Promise<boolean> {
  const hash = await bcrypt.hash(password, this.salt);
  return hash === this.password;
}
```
- Ke file `users.module.ts` kita export `UsersService`
```ts
exports: [UsersService],
```
- Ke file `auth.module.ts` lakukan **imports** terhadap `UserModule`
```ts
imports: [JwtModule.register(jwtConfig), UsersModule],
```
<mark>Login Get Access Token Function</mark>
- Ke file `auth.service.ts` tambahkan **contruct** `userService` 
```ts
constructor(
  private readonly jwtService: JwtService,
  private readonly userService: UsersService,
) {}
```
- Ke **function** login, isi seperti kode di bawah
```ts
async login(loginDto: LoginDto): Promise<string> {
  const { email, password } = loginDto;

  const user = await this.userService.validateUser(email, password);
  if (!user) {
    throw new UnauthorizedException('Wrong email or password');
  }

  const access_token = await this.createAccessToken(user);
  return access_token;
}
```
- Kemudian buat **function** `createAccessToken`, lalu isika seperti kode di bawah
```ts
async createAccessToken(user: User): Promise<string> {
  const payload = {
    sub: user.id,
  };
  const access_token = await this.jwtService.signAsync(payload);
  return access_token;
}
```
- Buat file `auth.controller.ts` dengan mengetikkan perintah berikut
```bash
$ nest g controller Auth --no-spec
```
- Ke file `auth.controller.ts`, buat **Routes** `login`
```ts
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<string> {
    return await this.authService.login(loginDto);
  }
}
```
<mark>Login Get Refresh Token Function</mark>
- Buat file `entity/refresh-token.entity.ts` untuk menyimpan **refresh token** di database
```ts
import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RefreshToken extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  isRevoked: boolean;

  @Column()
  expiredAt: Date;
}
```
- Kemudian buat file `repository/refresh-token.repository.ts` untuk query **refresh token**
```ts
async createRefreshToken(user: User, ttl: number): Promise<RefreshToken> {
  const refreshToken = this.create();
  refreshToken.user = user;
  refreshToken.isRevoked = false;
  const expiredAt = new Date();
  expiredAt.setTime(expiredAt.getTime() + ttl);
  refreshToken.expiredAt = expiredAt;

  return await refreshToken.save();
}
```
- Buat **relasi** refresh token dengan user, dimana **satu user memiliki banyak refresh token**, ke file `refresh-token.entity.ts` dan `user.entity.ts` lalu tambahkan kode di bawah  
  
**refresh-token.entity.ts**
```ts
@ManyToOne(() => User, {user} => user.refreshTokens)
user: User;
```
**user.entity.ts**
```ts
@OneToMany(() => RefreshToken, (refreshToken) => refreshToken.user, { eager: true })
refreshTokens: RefreshToken[];
```
- Ke file `auth.module.ts` lakukan **implementasi** repository
```ts
imports: [
  JwtModule.register(jwtConfig),TypeOrmModule.forFeature[RefreshTokenRepository), UsersModule,
],
```
- Ke file `jwt.config.ts` buat `expiresIn` agar tidak membuat berulang kali
```ts
export const refreshTokenConfig: JwtSignOptions = {
  expiresIn: 3600 * 24,
};
```
- Ke file `auth.service.ts` buat **function** baru `createRefreshToken` dan **injectRepository**
```ts
@InjectRepository(RefreshTokenRepository)
  private readonly refreshTokenRepository: RefreshTokenRepository,
```
```ts
async createRefreshToken(user: User): Promise<string> {
  const refreshToken = await this.refreshTokenRepository.createRefreshToken(
    user,
    +refreshTokenConfig.expiresIn,
  );
  const payload = {
    jid: refreshToken.id,
  };
  const refreshTokenValue = await this.jwtService.signAsync(
    payload,
    refreshTokenConfig,
  );

  return refreshTokenValue;
}
```
<mark>Login Menggabungkan Access & Refresh Token</mark>
- Ke file `auth.service.ts`, ubah **Promise** login dari `string` menjadi `LoginResponse` dan `return` **Access Token dan Refresh Token**
```ts
async login(loginDto: LoginDto): Promise<LoginResponse>
```
```ts
const access_token = await this.createAccessToken(user);
const refresh_token = await this.createRefreshToken(user);

return { access_token, refresh_token } as LoginResponse;
```
- Ke `auth.controller.ts` ubah juga **Promise** dari `string` menjadi `LoginResponse`
```ts
async login(@Body() loginDto: LoginDto): Promise<LoginResponse>
```
<mark>Membuat Access Token dari Refresh Token</mark>
- Buat terlebih dahulu `dto/refresh-access-token.dto.ts`, isi dengan kode di bawah
```ts
import { IsNotEmpty } from 'class-validator';

export class RefreshAccessTokenDto {
  @IsNotEmpty()
  refresh_token: string;
}
```
- Ke file `auth.service.ts`, buat **function** `refreshAccessToken` dan `decodeToken`
```ts
async refreshAccessToken(
  refreshTokenDto: RefreshAccessTokenDto,
): Promise<{ access_token: string }> {
  const { refresh_token } = refreshTokenDto;
  const payload = await this.decodeToken(refresh_token);
  const refreshToken = await this.refreshTokenRepository.findOne(
    payload.jid,
    { relations: ['user'] },
  );

  if (!refreshToken) {
    throw new UnauthorizedException('Refresh token is not found');
  }

  if (refreshToken.isRevoked) {
    throw new UnauthorizedException('Refresh token is revoked');
  }

  const access_token = await this.createAccessToken(refreshToken.user);

  return { access_token };
}
```
```ts
async decodeToken(token: string): Promise<any> {
  try {
    return await this.jwtService.verifyAsync(token);
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      throw new UnauthorizedException('Refresh token is expired');
    } else {
      throw new InternalServerErrorException('Error to decode token');
    }
  }
}
```
- Ke file `auth.controller.ts` tambahkan Route **POST** ke `refresh-token`
```ts
@Post('refresh-token')
async refreshToken(
  @Body() refreshAccessTokenDto: RefreshAccessTokenDto,
): Promise<{ access_token: string }> {
  return this.authService.refreshAccessToken(refreshAccessTokenDto);
}
```

## 10 - NestJS Guard
### 10.1 Apa itu Guard?
- Guard bertugas untuk menentukan apakah suatu request akan di **handle** atau **tidak** oleh route handler
- Biasanya digunakan untuk **authorization**
- Pada **Express, authorization** biasanya dilakukan oleh **middleware**. Akan tetapi Middleware **"tidak tahu"** route mana yang menghandle request tersebut.
- Guard dieksekusi **setelah** semua **middleware** dijalankan, tetapi sebelum **interceptor** dan **pipes**.
### 10.2 Membuat Guard
- Setiap guard wajib mengimplement fungsi **CanActive**.
### 10.3 Coding Time
<mark>Membuat JWT Strategy</mark>  
Dokumentasi mengenai **jwt Strategy** dapat diakses [di sini](https://docs.nestjs.com/security/authentication#implementing-passport-jwt).
- Buat file `auth/jwt.strategy.ts` lalu isi dengan kode di bawah
```ts
import { UsersService } from './../users/users.service';
import { jwtConfig } from './../config/jwt.config';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: jwtConfig.secret,
    });
  }

  async validate(payload: any) {
    const user = await this.usersService.findUserById(payload.sub);
    if (!user) {
      throw new UnauthorizedException('User is not found');
    }

    return user;
  }
}
```
- Ke file `users.service.ts` tambahkan function baru untuk **findUserById**
```ts
async findUserById(id: string): Promise<User> {
  return await this.userRepository.findOne(id);
}
```
- Tambahkan **JwtStrategy** dalam **providers** `auth.module.ts`
```ts
providers: [AuthService, JwtStrategy],
```
- Kita coba implementasikan **guard** dalam `books.controller.ts`
```ts
@UseGuards(AuthGuard('jwt'))
```
<mark>Membuat Custom Decorator untuk Mengambil Req User</mark>  
Dokumentasi mengenai **custom decorator** dapat diakses [di sini](https://docs.nestjs.com/custom-decorators#param-decorators).
- Buat file `auth/get-user.decorator.ts` lalu isi dengan kode di bawah
```ts
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUser = createParamDecorator(
  (data: any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
```
- Lalu kita coba **implementasikan** di `books.controller.ts`
```ts
@Get()
async getBooks(
  @Query() filter: FilterBookDto,
  @GetUser() user: User,
): Promise<Book[]> {
  console.log(user);
  return this.booksServices.getBooks(filter);
}
```
<mark>Membuat Guard Global</mark>  
Dokumentasi mengenai `Guard` dapat diakses [di sini](https://docs.nestjs.com/security/authentication#implementing-passport-jwt).
- Buat terlebih dahulu file `~/guard/jwt.guards.ts` lalu isi dengan kode di bawah
```ts
import { AuthGuard } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtGuard extends AuthGuard('jwt') {}
```
- Lalu implementasikan di `boooks.controller.ts`
```ts
@UseGuards(JwtGuard)
```
<mark>Implementasi Revoke</mark>
- Ke file `auth.controller.ts` buat routes **PATCH** untuk revoke, jangan lupa gunakan **guard**
```ts
@Patch('/:id/revoke')
@UseGuards(JwtGuard)
async revokeRefreshToken(@Body() id: string): Promise<void> {
  return await this.authService.revokeRefreshToken(id);
}
```
- Ke file `auth.service.ts` buat function **revokeRefreshToken**  
```ts
async revokeRefreshToken(id: string): Promise<void> {
  const refreshToken = await this.refreshTokenRepository.findOne(id);
  if (!refreshToken) {
    throw new UnauthorizedException('Refresh token is not found');
  }

  refreshToken.isRevoked = true;
  await refreshToken.save();
}
```
<mark>Membuat Relasi Antara Book dan User</mark>
- Ke file `books.entity.ts`, tambahkan kondisi **ManyToOne**
```ts
@ManyToOne(() => User, (user) => user.books)
  user: User;
```
- Ke file `user.entity.ts`, tambahkan kondisi **OneToMany**
```ts
@OneToMany(() => Book, (book) => book.user)
  books: Book[];
```
<mark>Implementasi Relasi di GetBooks</mark>
- Ke file `books.controller.ts` tambahkan User di parameter
```ts
@Get()
async getBooks(
  @Query() filter: FilterBookDto,
  @GetUser() user: User,
): Promise<Book[]> {
  return this.booksServices.getBooks(user, filter);
}
```
- Ke file `books.service.ts`, tambahkan User di parameter  
```ts
async getBooks(user: User, filter: FilterBookDto): Promise<Book[]> {
  return await this.bookRepository.getBooks(user, filter);
}
```
- Begitu juga di file `book.repository.ts`, tambahkan User di parameter dan query untuk **filter**
```ts
async getBooks(user: User, filter: FilterBookDto): Promise<Book[]> {
```
```ts
const query = this.createQueryBuilder('book').where(
  'book.userId = :userId',
  { userId: user.id },
);
```
<mark>Implementasi Relasi di createBook</mark>
- Ke file `book.repository.ts`, ke function **createBook** tambahkan User di parameter dan book.user
```ts
async createBook(user: User, createBookDto: CreateBookDto): Promise<void> {
```
```ts
book.user = user;
```
- Ke file `books.service.ts`, tambahkan User di parameter pada function **createBook**
```ts
async createBook(user: User, createBookDto: CreateBookDto): Promise<void> {
  return await this.bookRepository.createBook(user, createBookDto);
}
```
- Ke file `books.controller.ts`, tambahkan User di parameter pada function **createBook**
```ts
@Post()
async createBook(
  @GetUser() user: User,
  @Body() payload: CreateBookDto,
): Promise<void> {
  return this.booksServices.createBook(user, payload);
}
```
<mark>Implementasi Relasi di getBookById dan updateBook</mark>
- Ke file `books.controller.ts`, tambahkan User di parameter pada function **getBookById dan updateBook**
```ts
@Get('/:id')
async getBookById(
  @GetUser() user: User,
  @Param('id', UUIDValidationPipe) id: string,
): Promise<Book> {
  return this.booksServices.getBookById(user, id);
}
```
```ts
@Put('/:id')
async updateBook(
  @GetUser() user: User,
  @Param('id', UUIDValidationPipe) id: string,
  @Body() payload: UpdateBookDto,
): Promise<void> {
  return this.booksServices.updateBook(user, id, payload);
}
```
- Ke file `books.service.ts`, tambahkan User di parameter pada function **getBookById dan updateBook**
```ts
async getBookById(user: User, id: string): Promise<Book> {
  const book = await this.bookRepository.findOne(id, { where: { user } });

  if (!book) {
    throw new NotFoundException(`Book with id ${id} not found`);
  }
  return book;
}
```
```ts
async updateBook(
  user: User,
  id: string,
  updateBookDto: UpdateBookDto,
): Promise<void> {
  const { title, author, category, year } = updateBookDto;

  const book = await this.getBookById(user, id);
  book.title = title;
  book.author = author;
  book.category = category;
  book.year = year;

  await book.save();
}
```
<mark>Implementasi Relasi di deleteBook</mark>
- Ke file `books.controller.ts`, tambahkan User di parameter pada function **deleteBook**
```ts
@Delete('/:id')
async deleteBook(
  @GetUser() user: User,
  @Param('id', UUIDValidationPipe) id: string,
): Promise<void> {
  return this.booksServices.deleteBook(user, id);
}
```
- Ke file `books.service.ts`, tambahkan User di parameter dan query pada function **deleteBook**
```ts
async deleteBook(user: User, id: string): Promise<void> {
  const result = await this.bookRepository.delete({ user, id });
  if (result.affected === 0) {
    throw new NotFoundException(`Book with id ${id} not found`);
  }
}
```