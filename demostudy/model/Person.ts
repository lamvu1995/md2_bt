export type Gender = 'Male' | 'Female' | 'Other'
export class Person {
    private _id: number;
    private _fullName: string;
    private _gender: Gender;
    private _age: number;

    constructor(id: number, fullName: string, Gender: Gender, age: number) {
        this._id = id;
        this._fullName = fullName;
        this._gender = Gender;
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

    get Gender(): Gender {
        return this._gender;
    }

    set Gender(value: Gender) {
        this._gender = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }
    getInfo() {
        return this;
    }
}