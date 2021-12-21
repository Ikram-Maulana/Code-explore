"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
// ! Class
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
    constructor() {
        super(...arguments);
        this.read = true;
        this.write = true;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write
        };
    }
}
let admin = new Admin("Ikram", 21);
console.log(admin);
