import { expect } from 'chai';
import Tuples from '../src/Tuples';

describe('Tuples', () => {
    describe('createTuple', () => {
        it('should return a tuple', () => {
            var tuples = new Tuples();
            const result = tuples.createTuple();
            expect(result).to.eql(["hello", 10]);
        });
    });
});