import { expect } from 'chai';
import { IRunOptions } from '../src/IRunOptions';

describe('IRunOptions', () => {
    it('should accept a string as commandLine', () => {
        var options: IRunOptions;

        options = {
            program: "test",
            commandline: "Hello World"
        };

        expect(options.commandline).to.equal("Hello World");
    });

    it('should accept a string array as commandLine', () => {
        var options: IRunOptions;

        options = {
            program: "test",
            commandline: ["Hello", "World"]
        };

        expect(options.commandline).to.deep.equal(["Hello", "World"]);
    });

    it('should accept a function that returns a string as commandLine', () => {
        var options: IRunOptions;

        options = {
            program: "test",
            commandline: () => { return "Hello World"; }
        };

        var result = (<any>options.commandline)();

        expect(result).to.equal("Hello World");
    });

    it('should accept a function that returns a string array as commandLine', () => {
        var options: IRunOptions;

        options = {
            program: "test",
            commandline: () => { return ["Hello", "World"]; }
        };

        var result = (<any>options.commandline)();

        expect(result).to.deep.equal(["Hello", "World"]);

    })
});