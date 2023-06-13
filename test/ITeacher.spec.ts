import { expect } from 'chai';
import { ITeacher } from '../src/ITeacher';

describe('ITeacher', () => {
    it('should contain the information of a teacher', () => {
        var teacher: ITeacher;

        teacher = {
            firstName: "Walid",
            lastName: "Bensidi",
            sayHi: () => { return "Hi there TypeScript user!"; },
            subject: "TypeScript"
        };

        expect(teacher.firstName).to.equal("Walid");
        expect(teacher.lastName).to.equal("Bensidi");
        expect(teacher.sayHi()).to.equal("Hi there TypeScript user!");
        expect(teacher.subject).to.equal("TypeScript");
    });
});