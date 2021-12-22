// ! Generic Class merupakan class yang dinamis

class List<T> {
  private data: T[];

  constructor(...elements: T[]) {
    this.data = elements;
  }

  add(element: T):void {
    this.data.push(element);
  }

  addMultiple(...elements: T[]): void {
    this.data.push(...elements);
  }

  getAll(): T[] {
    return this.data;
  }
}

let numbers = new List<number>(30, 8, 2000);
numbers.add(20);
numbers.addMultiple(8, 2000);
console.log(numbers.getAll());

console.log("============================");
let random = new List<number | string>(1, "a", "b", 2);
random.add("Ikram");
random.addMultiple("Maulana", 20);
console.log(random.getAll());
