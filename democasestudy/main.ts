import {Person} from "./model/Person";
import {PersonManager} from "./manager/PersonManager";
import {Worker} from "./model/Worker"
import {engineer} from "./model/Engineer";
import {Employee} from "./model/Employee";


// @ts-ignore
let input = require('readline-sync');
let personManager = new PersonManager();
function showMainMenu() {
    let choice = -1;
    do {
        console.log(
            `
        ---- Main Menu ----
        1.Thêm mới
        2.Hiển thị tất cả
        3.Sửa
        4.Xóa
        0.Thoát
        `
        )
        choice = +input.question('Enter Choice: ')
        switch (choice) {
            case 1:
                showMainMenu1()
                break;
            case 2:
                showPersons()
                break;
            case 3:
                break;
            case 4:
                break;
        }
    } while (choice !== 0);
}
function showMainMenu1() {
    let choice1 = -1;
    do {
        console.log(
            `
        ---- Add Menu ----
        1. Add Worker
        2. Add Engineer
        3. Add Employee
        4. Get List
        0. Back To Main Menu
        
        `
        )
        choice1 = +input.question('Enter Choice: ')
        switch (choice1) {
            case 1:
                addworker()
                break;
            case 2:
                addengineer()
                break;
            case 3:
                addemployee()
                break;
            case 4:
                showPersons()
                break;
        }
    } while (choice1 !== 0);
}


function addworker() {
    console.log('-----Menu add Worker------')
    let id = +input.question('Enter id: ')
    let fullName = input.question('Enter full name: ');
    let sex = input.question('Enter sex: ');
    let age = +input.question('Enter age: ')
    let level = +input.question('Enter level: ');
    let worker: Worker = new Worker(id, fullName, sex, age, level);
    personManager.add(worker);
    console.log('Thêm thành công !');
}
function addengineer() {
    console.log('-----Menu add Engineer------')
    let id = +input.question('Enter id: ')
    let fullName = input.question('Enter full name: ');
    let sex = input.question('Enter sex: ');
    let age = +input.question('Enter age: ')
    let Trainingindustry = input.question('Enter Trainingindustry: ');
    let Engineer: engineer = new engineer(id, fullName, sex, age, Trainingindustry);
    personManager.add(Engineer);
    console.log('Thêm thành công !');
}
function addemployee() {
    console.log('-----Menu add Employee------')
    let id = +input.question('Enter id: ')
    let fullName = input.question('Enter full name: ');
    let sex = input.question('Enter sex: ');
    let age = +input.question('Enter age: ')
    let work = input.question('Enter work: ');
    let employee: Employee = new Employee(id, fullName, sex, age, work);
    personManager.add(employee);
    console.log('Thêm thành công !');
}


function showPersons() {
    console.table(personManager.showAll());
}


showMainMenu()

