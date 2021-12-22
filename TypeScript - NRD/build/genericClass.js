"use strict";
// ! Generic Class merupakan class yang dinamis
class List {
    constructor(...elements) {
        this.data = elements;
    }
    add(element) {
        this.data.push(element);
    }
    addMultiple(...elements) {
        this.data.push(...elements);
    }
    getAll() {
        return this.data;
    }
}
let numbers = new List(30, 8, 2000);
numbers.add(20);
numbers.addMultiple(8, 2000);
console.log(numbers.getAll());
console.log("============================");
let random = new List(1, "a", "b", 2);
random.add("Ikram");
random.addMultiple("Maulana", 20);
console.log(random.getAll());
