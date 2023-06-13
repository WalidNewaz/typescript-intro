import { expect } from 'chai';
import { IPerson } from '../src/interfaces/IPerson';

describe('IPerson', () => {
        it('should contain the information of a customer', () => {
        var customer: IPerson;

        customer = {
            firstName: "Walid",
            lastName: "Bensidi",
            sayHi: () => { return "Hi there TypeScript user!"; }
        };

        expect(customer.firstName).to.equal("Walid");
        expect(customer.lastName).to.equal("Bensidi");
        expect(customer.sayHi()).to.equal("Hi there TypeScript user!");
    });
});