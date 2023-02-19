import {Person, Gender} from "./Person";

export class Housekeeper extends Person {
    private _mission: string;

    constructor(id: number, fullName: string, Gender: Gender, age: number, mission: string) {
        super(id, fullName, Gender, age);
        this._mission = mission;
    }

    get mission(): string {
        return this._mission;
    }

    set mission(value: string) {
        this._mission = value;
    }
}