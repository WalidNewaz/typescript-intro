import { User } from "./User";
import { IRepository } from "./IRepository";

export class UserRepository implements IRepository<User> {
    private users: User[] = [];

    get(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }

    getAll(): User[] {
        return this.users;
    }

    save(user: User): void {
        this.users.push(user);
    }

    update(user: User): void {
        let index = this.users.findIndex(u => u.id === user.id);
        this.users[index] = user;
    }

    delete(id: number): void {
        let index = this.users.findIndex(user => user.id === id);
        this.users.splice(index, 1);
    }
}