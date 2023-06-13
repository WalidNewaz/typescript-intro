import { expect } from 'chai';
import { Greeting } from '../src/Greeting';

describe('Greeting', () => {
    it('should return Hello World', () => {
        var greeting = new Greeting();
        const result = greeting.greet();
        expect(result).to.equal("Hello World");
    });
});