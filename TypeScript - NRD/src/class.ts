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

  getRole(): {read: boolean, write: boolean} {
    return {
      read: this.read,
      write: this.write
    }
  }
}

let admin = new Admin("Ikram", 21);
console.log(admin);