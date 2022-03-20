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
nest g module Users 
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