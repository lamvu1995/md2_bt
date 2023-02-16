enum Gender {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
    OTHER = 'OTHER'
}
class Employee {
    private _ID: number;
    private _Fullname: string;
    private _gender: Gender;
    constructor(ID: number, Fullname: string, gender: Gender) {
        this._ID = ID;
        this._Fullname = Fullname;
        this._gender = gender;
    }

    get ID(): number {
        return this._ID;
    }

    set ID(value: number) {
        this._ID = value;
    }

    get Fullname(): string {
        return this._Fullname;
    }

    set setFullname(value: string) {
        this._Fullname = value;
    }

    get gender(): Gender {
        return this._gender;
    }

    set setgender(value: Gender) {
        this._gender = value;
    }
}
class employeeManager {
    static Employees: Employee[] = [];

    constructor() {
    }

    set add(employee: Employee) {
        employeeManager.Employees.push(employee);
    }

    get getList(): Employee[] {
        return employeeManager.Employees;
    }

    delete(ID: number): void {
        if (this.findEmployee(ID) !== -1) {
            employeeManager.Employees.splice(this.findEmployee(ID), 1);
        } else {
            throw new Error('delete error')
        }
    }

    update(ID: number, Fullname: string, gender: Gender): any {
        if (this.findEmployee(ID) != -1) {
            employeeManager.Employees[this.findEmployee(ID)].setFullname = Fullname;
            employeeManager.Employees[this.findEmployee(ID)].setgender = gender;
        } else {
            throw new Error('update error')
        }
    }

    findEmployee(ID: number) {
        let index = -1
        for (let i = 0; i < employeeManager.Employees.length; i++) {
            if (employeeManager.Employees[i].ID === ID) {
                index = i
            }
        }
        return index
    }
}
let p1 = new Employee(123,'LamVu',Gender.FEMALE)
let p2 = new Employee(321,'NamVu',Gender.MALE)
let p3 = new Employee(223,'NingVu',Gender.OTHER)
let p4 = new Employee(131,'QuocVu',Gender.MALE)
let EmployeeManager = new employeeManager;
EmployeeManager.add = p1;
EmployeeManager.add = p2;
EmployeeManager.add = p3;
EmployeeManager.add = p4;
console.log(EmployeeManager.findEmployee(223))