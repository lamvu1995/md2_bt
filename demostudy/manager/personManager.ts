import {Imanager} from "./Imanager";
import {Person} from "../model/Person";
import {Chef} from "../model/Chef";
import {Security} from "../model/Security";
import {Employee} from "../model/Employee";
import {Housekeeper} from "../model/Housekeeper";

export class Personmanager implements Imanager<Person> {
    static persons: Person[] = []
    constructor() {
    }

    add(t: Person) {
        Personmanager.persons.push(t)
    }

    deleteperson(id: number) {
if (this.findindexperson(id) !== -1) {
    Personmanager.persons.splice(this.findindexperson(id), 1)
}
else {
    throw new Error('edit Error!')
}
    }

    edit(id: number, t: Person) {
if (this.findindexperson(id) !== -1) {
 Personmanager.persons[this.findindexperson(id)] = t
}
else {
    throw new Error('edit error!')
}
    }

    findindexperson(id: number) {
let index = -1
        for (let i = 0; i < Personmanager.persons.length; i++) {
            if(Personmanager.persons[i].id === id) {
                index = i
            }
        }
        return index
    }

    findperson(id: number) {
if (this.findindexperson(id) !== -1) {
    return Personmanager.persons[this.findindexperson(id)]
}
    }

    getlist() {
        return Personmanager.persons
    }

}
