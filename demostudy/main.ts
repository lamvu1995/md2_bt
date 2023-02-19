import {Personmanager} from "./manager/personManager";
import {Person} from "./model/Person";
import {Chef} from "./model/Chef";
import {Employee} from "./model/Employee";
import {Security} from "./model/Security";
import {Housekeeper} from "./model/Housekeeper";
let input = require('readline-sync');
let personmanager = new Personmanager();
function showMainMenu() {
    let choice = -1;
    do {
        console.log(
            `
        ---- Main Menu ----
        1.New add
        2.GetList
        3.Edit
        4.Delete
        0.Exit
        `
        )
        choice = +input.question('Enter Choice: ')
        switch (choice) {
            case 1:
                showAddMenu()
                break;
            case 2:
                getList()
                break;
            case 3:
                break;
            case 4:
                deletePerson()
                break;
        }
    } while (choice !== 0);
}
function showAddMenu() {
    let choice1 = -1;
    do {
        console.log(
            `
        ---- Add Menu ----
        1.Add Chef
        2.Add Employee
        3.Add Housekeeper
        4.Add Security
        0.Back to Main Menu
        `
        )
        choice1 = +input.question('Enter Choice: ')
        switch (choice1) {
            case 1:
                addChef()
                break;
            case 2:
                addEmployee()
                break;
            case 3:
                addHousekeeper()
                break;
            case 4:
                addSecurity()
                break;
        }
    } while (choice1 !== 0);
}
function addChef() {
    console.log('-----Menu add Chef------')
    let id = +input.question('Enter id: ')
    let fullName = input.question('Enter full name: ');
    let gender = input.question('Enter gender: ');
    let age = +input.question('Enter age: ')
    let jobposition = input.question('Enter jobposition: ');
    let chef: Chef = new Chef(id, fullName, gender, age, jobposition);
    personmanager.add(chef);
    console.log('Add finish !');
}
function addEmployee() {
    console.log('-----Menu add Employee------')
    let id = +input.question('Enter id: ')
    let fullName = input.question('Enter full name: ');
    let gender = input.question('Enter gender: ');
    let age = +input.question('Enter age: ')
    let work = input.question('Enter work: ');
    let employee: Employee = new Employee(id, fullName, gender, age, work);
    personmanager.add(employee);
    console.log('Add finish !');
}
function addHousekeeper() {
    console.log('-----Menu add Housekeeper------')
    let id = +input.question('Enter id: ')
    let fullName = input.question('Enter full name: ');
    let gender = input.question('Enter gender: ');
    let age = +input.question('Enter age: ')
    let mission = input.question('Enter mission: ');
    let housekeeper: Housekeeper = new Housekeeper(id, fullName, gender, age, mission);
    personmanager.add(housekeeper);
    console.log('Add finish !');
}
function addSecurity() {
    console.log('-----Menu add Security------')
    let id = +input.question('Enter id: ')
    let fullName = input.question('Enter full name: ');
    let gender = input.question('Enter gender: ');
    let age = +input.question('Enter age: ')
    let level = +input.question('Enter level: ');
    let security: Security = new Security(id, fullName, gender, age, level);
    personmanager.add(security);
    console.log('Add finish !');
}
function getList() {
    console.table(personmanager.getlist());
}
function deletePerson() {
    console.log('-----Delete By ID-----')
    let id = +input.question('Enter ID: ')
    personmanager.deleteperson(id)
    console.log('Delete finish !')
}

showMainMenu()