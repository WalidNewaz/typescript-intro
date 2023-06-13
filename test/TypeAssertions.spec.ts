import { expect } from 'chai';
import { TypeAssertions } from '../src/TypeAssertions';

describe('TypeAssertions', () => {
    it('should return not a number', () => {
        const result = TypeAssertions.changeStringToNumber()
        expect(result).to.not.be.a('number');
    });
});