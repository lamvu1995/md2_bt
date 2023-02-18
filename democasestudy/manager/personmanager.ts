import {IManager} from "./IManager";
import {Person} from "../model/Person";

export class PersonManager implements IManager<Person> {
    private persons: Person[];

    constructor() {
        this.persons = [];
    }

    add(t: Person): void {
        this.persons.push(t);
    }

    edit(id: number, t: Person): void {
        if (this.findById(id) !== -1) {
            this.persons[this.findById(id)] = t
        }
    }
    findById(id: number): number {
        let index = -1;
        for (let i = 0; i < this.persons.length; i++) {
            if(this.persons[i].id === id) {
                index = i;
            }
        }
        return index;
    }
    remove(id: number): void {
        if (this.findById(id) !== -1) {
            this.persons.splice(this.findById(id), 1)
        }
    }
    showAll(): Person[] {
        return this.persons;
    }
    findIndexPerson(id: number): number {
        let index = -1;
        for (let i = 0; i < this.persons.length; i++) {
            if(this.persons[i].id === id) {
                index = i;
            }
        }
        return index;
    }
    }
