import { expect } from 'chai';
import Functions from '../src/Functions';

describe('Functions', () => {
    describe('optionalParameters', () => {
        it('should return first name', () => {
            var functions = new Functions();
            const result = functions.optionalParameters("John");
            expect(result).to.equal("John");
        });
        it('should return first and last name', () => {
            var functions = new Functions();
            const result = functions.optionalParameters("John", "Doe");
            expect(result).to.equal("John Doe");
        });
    });

    describe('addNumbers', () => {
        it('should return 0', () => {
            var functions = new Functions();
            const result = functions.addNumbers();
            expect(result).to.equal(0);
        });
        it('should return 1', () => {
            var functions = new Functions();
            const result = functions.addNumbers(1);
            expect(result).to.equal(1);
        });
        it('should return 3', () => {
            var functions = new Functions();
            const result = functions.addNumbers(1, 2);
            expect(result).to.equal(3);
        });
        it('should return 6', () => {
            var functions = new Functions();
            const result = functions.addNumbers(1, 2, 3);
            expect(result).to.equal(6);
        });
    });

    describe('compoundInterest', () => {
        it('should return 105', () => {
            var functions = new Functions();
            const result = functions.compoundInterest(100, 1);
            expect(result).to.equal(105);
        });
        it('should return 110.25', () => {
            var functions = new Functions();
            const result = functions.compoundInterest(100, 1, 0.1025);
            expect(result).to.equal(110.25);
        });
    });
});