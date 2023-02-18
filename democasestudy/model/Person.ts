export type Sex = 'Nam' | 'Nữ' | 'Khác'
export class Person {
    private _id: number;
    private _fullName: string;
    private _sex: Sex;
    private _age: number;

    constructor(id: number, fullName: string, sex: Sex, age: number) {
        this._id = id;
        this._fullName = fullName;
        this._sex = sex;
        this._age = age;
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get fullName(): string {
        return this._fullName;
    }

    set fullName(value: string) {
        this._fullName = value;
    }

    get sex(): Sex {
        return this._sex;
    }

    set sex(value: Sex) {
        this._sex = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }
}