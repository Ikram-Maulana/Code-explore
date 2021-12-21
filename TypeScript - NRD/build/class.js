"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
// ! Class
// Public = bisa diakses di semua class
// Protected = hanya bisa diakses dari class tersebut dan kelas turunannya
// Private = hanya bisa diakses dari class itu sendiri
class Users {
    constructor(name, age) {
        this.age = age;
        this.getName = () => {
            return this.name;
        };
        this.name = name;
    }
    setName(value) {
        this.name = value;
    }
}
exports.Users = Users;
let users = new Users("Ikram", 21);
console.log(users);
// ! Inheritance
class Admin extends Users {
    constructor(phone, name, age) {
        super(name, age);
        this.read = true;
        this.write = true;
        this._email = "";
        this.phone = phone;
    }
    static getNameRole() {
        return "Hai";
    }
    getRole() {
        return {
            read: this.read,
            write: this.write
        };
    }
    set email(value) {
        if (value.length < 5) {
            this._email = "Email salah";
        }
        else {
            this._email = value;
        }
    }
    get email() {
        return this._email;
    }
}
Admin.getRoleName = "Admin";
// let admin = new Admin("08515659", "Ikram", 21);
// console.log(admin);
// admin.email = "ikram075@ummi.ac.id";
// console.log(admin.email);
let admin = Admin.getRoleName;
console.log(admin);
let admin2 = Admin.getNameRole();
console.log(admin2);
