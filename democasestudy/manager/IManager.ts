export interface IManager<T> {
    add(t: T) : void;
    edit(id: number, t: T): void;
    showAll(): T[];
    findById(id: number): number;
    remove(id: number): void;
    findIndexPerson(id: number): number;
}