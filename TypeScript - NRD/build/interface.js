"use strict";
class Asus {
    constructor(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    on() {
        console.log("Menyala");
    }
    off() {
        console.log("Mati");
    }
}
class Macbook {
    constructor(name, keyboardLight) {
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    on() {
        console.log("Menyala");
    }
    off() {
        console.log("Mati");
    }
}
let asus = new Asus("Asus", true);
asus.on();
asus.off();
let macbook = new Macbook("Mackbook pro", true);
macbook.on();
macbook.off();
