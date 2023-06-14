import { expect } from 'chai';
import sinon, { SinonSpy } from 'sinon';

const logSpy: SinonSpy = sinon.spy(console, 'log'); // The function decorators are invoked 
                                                    // when they are imported, not evaluated.

import { ExampleClass } from '../../src/decorators/ExampleClass';



describe('DecoratorFactory', () => {

    it('should call first() and second() decorators', () => {
        const exampleClass: ExampleClass = new ExampleClass('example', 1000);
        exampleClass.exampleMethod();
        expect(logSpy.calledWith(`Sealing the constructor: ${exampleClass.constructor.name}`)).to.be.true;
        expect(logSpy.calledWith('before method call')).to.be.true;
        expect(logSpy.calledWith('exampleMethod()')).to.be.true;
        expect(logSpy.calledWith('after method call')).to.be.true;
    });

    it('should call configurable() decorator', () => {
        const example: ExampleClass = new ExampleClass('example', 1000);
        example.name = 'new name';
        expect(example.name).to.equal('new name');
    });

    it('should call currency() decorator', () => {
        const example: ExampleClass = new ExampleClass('example', 1000);
        expect(example.salary).to.equal(1000);
        const currentSalary = example.getCurrentSalary();
        expect(currentSalary).to.equal('USD 1000');
    });

    it('should call required() decorator', () => {
        const example: ExampleClass = new ExampleClass('example', 1000);
        const result = example.print(true);
        expect(result).to.equal('Pretty');
    });
});