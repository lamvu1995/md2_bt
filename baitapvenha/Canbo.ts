// Bài 1 +
// Một đơn vị sản xuất gồm có các cán bộ là công nhân, kỹ sư, nhân viên. Mỗi cán bộ cần quản lý các dữ liệu: Họ tên, tuổi, giới tính(nam, nữ, khác), địa chỉ.\n' +
// Cấp công nhân sẽ có thêm các thuộc tính riêng: Bậc (1 đến 10).' +
// Cấp kỹ sư có thuộc tính riêng: Nghành đào tạo.' +
// Các nhân viên có thuộc tính riêng: công việc.
// Yêu cầu 1: Xây dựng các lớp CongNhan, KySu, NhanVien kế thừa từ lớp CanBo.' +
// Yêu cầu 2: Xây dựng lớp QLCB(quản lý cán bộ) cài đặt các phương thức thực hiện các chức năng sau:' +
// Thêm mới cán bộ.' +
// Tìm kiếm theo họ tên.' +
// Hiện thị thông tin về danh sách các cán bộ.' +
// Thoát khỏi chương trình.
export enum Gender{
    Male = 'Male',
    Female = 'Female',
    Other = 'Other',
}
export class Canbo {
    private _Fullname: string;
    private _Age: number;
    private _gender: Gender;
    private _Address: string;

    constructor(Fullname: string, Age: number, gender: Gender, Address: string) {
        this._Fullname = Fullname;
        this._Age = Age;
        this._gender = gender;
        this._Address = Address;
    }
    get Fullname(): string {
        return this._Fullname;
    }
    set Fullname(value: string) {
        this._Fullname = value;
    }
    get Age(): number {
        return this._Age;
    }
    set Age(value: number) {
        this._Age = value;
    }
    get gender(): Gender {
        return this._gender;
    }
    set gender(value: Gender) {
        this._gender = value;
    }
    get Address(): string {
        return this._Address;
    }
    set Address(value: string) {
        this._Address = value;
    }
}
