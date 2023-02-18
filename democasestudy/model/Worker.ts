import {Person, Sex} from "./Person";

export class Worker extends Person {
    private _level: number;

    constructor(id: number, fullName: string, sex: Sex, age: number, level: number) {
        super(id, fullName, sex, age);
        this._level = level;
    }

    get level(): number {
        return this._level;
    }

    set level(value: number) {
        this._level = value;
    }
}