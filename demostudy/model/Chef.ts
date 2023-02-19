// Job Title
import {Person, Gender} from "./Person";
export class Chef extends Person {
    private _Jobposition: string

    constructor(id: number, fullName: string, Gender: Gender, age: number, Jobposition: string) {
        super(id, fullName, Gender, age);
        this._Jobposition = Jobposition;
    }

    get Jobposition(): string {
        return this._Jobposition;
    }

    set Jobposition(value: string) {
        this._Jobposition = value;
    }
}