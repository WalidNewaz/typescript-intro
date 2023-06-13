import { expect } from 'chai';
import {
    getRandomElement,
    mergeObjects,
    prop
} from '../../src/generics/genericFunctions';


describe('Generic Functions', () => {
    describe('getRandomElement', () => {
        it('should return a random element from an array of numbers', () => {
            let items = [1, 2, 3, 4, 5];
            let randomItem = getRandomElement(items);
            expect(items).to.include(randomItem);
        });

        it('should return a random element from an array of strings', () => {
            let items = ['a', 'b', 'c', 'd', 'e'];
            let randomItem = getRandomElement(items);
            expect(items).to.include(randomItem);
        });

        it('should return a random element from an array of objects', () => {
            let items = [
                { id: 1, name: 'a' },
                { id: 2, name: 'b' },
                { id: 3, name: 'c' },
                { id: 4, name: 'd' },
                { id: 5, name: 'e' }
            ];
            let randomItem = getRandomElement(items);
            expect(items).to.include(randomItem);
        });
    });

    describe('mergeObjects', () => {
        it('should merge two objects', () => {
            let obj1 = { id: 1, name: 'a' };
            let obj2 = { age: 21, salary: 50000 };
            let mergedObj = mergeObjects(obj1, obj2);
            expect(mergedObj).to.deep.equal({ id: 1, name: 'a', age: 21, salary: 50000 });
        });
    });

    describe('prop', () => {
        it('should return the value of the given property', () => {
            let obj = { id: 1, name: 'a' };
            let value = prop(obj, 'name');
            expect(value).to.equal('a');
        });
    });
});