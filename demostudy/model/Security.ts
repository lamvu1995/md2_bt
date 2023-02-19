import {Person, Gender} from "./Person";

export class Security extends Person {
    private _level : number;

    constructor(id: number, fullName: string, Gender: Gender, age: number, level: number) {
        super(id, fullName, Gender, age);
        this._level = level;
    }

    get level(): number {
        return this._level;
    }

    set level(value: number) {
        this._level = value;
    }
}