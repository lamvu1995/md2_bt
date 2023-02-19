export interface Imanager<T> {
    getlist();
    add(t: T): void;
    edit(id: number, t: T)
    findindexperson(id: number): number
    findperson(id: number)
    deleteperson(id: number)
}