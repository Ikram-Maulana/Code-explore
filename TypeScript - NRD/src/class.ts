// ! Class
// Public = bisa diakses di semua class
// Protected = hanya bisa diakses dari class tersebut dan kelas turunannya
// Private = hanya bisa diakses dari class itu sendiri
export class Users {
  name: string;

  constructor(name: string, public age: number) {
    this.name = name;
  }

  setName(value: string): void {
    this.name = value;
  }

  getName = (): string => {
    return this.name;
  }

  /**
   * yang di atas similar dengan
   * constructor(public name: string) {}
   */
}

let users = new Users("Ikram", 21);
console.log(users);


// ! Inheritance
class Admin extends Users {
  read: boolean = true;
  write: boolean = true;
  phone: string;
  private _email: string = "";
  static getRoleName: string = "Admin";

  constructor(phone: string, name: string, age: number) {
    super(name, age);
    this.phone = phone;
  }

  static getNameRole() {
    return "Hai"
  }

  getRole(): {read: boolean, write: boolean} {
    return {
      read: this.read,
      write: this.write
    }
  }

  set email(value: string) {
    if (value.length < 5){
      this._email = "Email salah";
    } else {
      this._email = value;
    }
  }

  get email(): string {
    return this._email;
  }
}

// let admin = new Admin("08515659", "Ikram", 21);
// console.log(admin);
// admin.email = "ikram075@ummi.ac.id";
// console.log(admin.email);

let admin = Admin.getRoleName;
console.log(admin);
let admin2 = Admin.getNameRole();
console.log(admin2);