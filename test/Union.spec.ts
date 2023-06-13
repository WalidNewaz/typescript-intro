import { expect } from 'chai';
import Union from '../src/Union';

describe('Union', () => {
    describe('concatStringOrNumber', () => {
        it('should return 1', () => {
            var union = new Union();
            const result = union.concatStringOrNumber(1);
            expect(result).to.equal("The value is 1");
        });
        it('should return hello', () => {
            var union = new Union();
            const result = union.concatStringOrNumber("hello");
            expect(result).to.equal("The value is hello");
        });
    });

    describe('greetings', () => {
        it('should return Hello World', () => {
            var union = new Union();
            const result = union.greetings("World");
            expect(result).to.equal("Hello World");
        });
        it('should return Hello Walid, Michele, Rachel', () => {
            var union = new Union();
            const result = union.greetings(["Walid", "Michele", "Rachel"]);
            expect(result).to.equal("Hello Walid, Michele, Rachel");
        });
    });
});