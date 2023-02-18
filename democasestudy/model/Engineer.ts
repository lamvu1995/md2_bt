import {Person, Sex} from "./Person";

export class engineer extends Person {

    private _Trainingindustry: string;

    constructor(id: number, fullName: string, sex: Sex, age: number, Trainingindustry: string) {
        super(id, fullName, sex, age);
        this._Trainingindustry = Trainingindustry;
    }

    get Trainingindustry(): string {
        return this._Trainingindustry;
    }

    set Trainingindustry(value: string) {
        this._Trainingindustry = value;
    }
}