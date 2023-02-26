import {Person, Gender} from "./Person";

export class Housekeeper extends Person {
    private _mission: string;


    constructor(id: number, fullName: string, gender: Gender, age: number, address: string, mission: string) {
        super(id, fullName, gender, age, address);
        this._mission = mission;
    }

    get mission(): string {
        return this._mission;
    }

    set mission(value: string) {
        this._mission = value;
    }
}