import {Employee} from "./baitapkhaibaonhanvien";
import {employeeManager} from "./baitapkhaibaonhanvien2";
import {Gender} from "./baitapkhaibaonhanvien";
let p1 = new Employee(123,'LamVu')
let p2 = new Employee(321,'NamVu')
let p3 = new Employee(223,'NingVu')
let p4 = new Employee(131,'QuocVu')
let EmployeeManager = new employeeManager;
EmployeeManager.add(p1);
EmployeeManager.add(p2);
EmployeeManager.add(p3);
EmployeeManager.add(p4);
EmployeeManager.update(123, 'VuongNguyen')
console.log(EmployeeManager.getList())