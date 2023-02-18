import {Person, Sex} from "./Person";

export class Employee extends Person {
    private _work : string;

    constructor(id: number, fullName: string, sex: Sex, age: number, work: string) {
        super(id, fullName, sex, age);
        this._work = work;
    }

    get work(): string {
        return this._work;
    }

    set work(value: string) {
        this._work = value;
    }
}