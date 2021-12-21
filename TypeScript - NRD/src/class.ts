// ! Class
export class Users {
  public name: string;

  constructor(name: string, public age: number) {
    this.name = name;
  }

  /**
   * yang di atas similar dengan
   * constructor(public name: string) {}
   */
}

let users = new Users("Ikram", 21);
console.log(users);
