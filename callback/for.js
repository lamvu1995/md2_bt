class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    show() {
       return `ten toi la: ${this.name} tuoi toi la: ${this. age}`
    }
}
let p1 = new Person('lamvu', 23)
console.log(p1.show())