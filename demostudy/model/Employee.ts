import {Person, Gender} from "./Person";

export class Employee extends Person {
    private _work: string;

    constructor(id: number, fullName: string, Gender: Gender, age: number, work: string) {
        super(id, fullName, Gender, age);
        this._work = work;
    }

    get work(): string {
        return this._work;
    }

    set work(value: string) {
        this._work = value;
    }
}