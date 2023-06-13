import { IPerson } from '../interfaces/IPerson';

export class User implements IPerson {
    readonly id: number = Math.floor(Math.random() * 1000);
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHi() {
        return `Hi, my name is ${this.firstName} ${this.lastName}`;
    }
}