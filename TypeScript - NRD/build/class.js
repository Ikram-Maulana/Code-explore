"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
// ! Class
class Users {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
}
exports.Users = Users;
let users = new Users("Ikram", 21);
console.log(users);
