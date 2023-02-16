import {Employee} from "./baitapkhaibaonhanvien";
import {Gender} from "./baitapkhaibaonhanvien";
export class employeeManager {
    Employees: Employee[] = [];

    constructor() {
    }

    add(employee: Employee): void {
        this.Employees.push(employee);
    }

    getList(): Employee[] {
        return this.Employees;
    }

    delete(ID: number): void {
        if (this.findEmployee(ID) != -1) {
            this.Employees.splice(this.findEmployee(ID), 1);
        } else {
            throw new Error('delete error')
        }
    }

    update(ID: number, Fullname: string, gender: Gender): any {
        if (this.findEmployee(ID) != -1) {
            this.Employees[this.findEmployee(ID)].setName(Fullname);
            this.Employees[this.findEmployee(ID)].setGender(gender);
        } else {
            throw new Error('update error')
        }
    }

    findEmployee(ID: number) {
        let index = -1
        for (let i = 0; i < this.Employees.length; i++) {
            if (this.Employees[i].ID === ID) {
                index = i
            }
        }
        return index
    }
}
