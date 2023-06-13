/**
 * Generic interface for a repository
 */
export interface IRepository<T extends object> {
    get(id: number): T | undefined;
    getAll(): T[];
    save(item: T): void;
    update(item: T): void;
    delete(id: number): void;
}