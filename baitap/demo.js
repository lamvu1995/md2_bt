class student {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.getName = function () {
            return `${this.name}`
        }
    }
}
 student.prototype.phone = '090324452'
let p = [];
let p1 = new student('lamvu', 18, 'dange6801');
let p2 = new student('lamnguyen', 19,'dange1995');

console.log(p2)
