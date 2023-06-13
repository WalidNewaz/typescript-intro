import { expect } from 'chai';

import { Printer } from '../../src/classes/Printer';
import { InkjetPrinter } from '../../src/classes/InjetPrinter';
import { LaserPrinter } from '../../src/classes/LaserPrinter';
import { ColorLaserPrinter } from '../../src/classes/ColorLaserPrinter';

describe('All Classes', () => {
    var printer: Printer;

    describe('InkjetPrinter', () => {
        it('should print a message', () => {
            printer = new InkjetPrinter();

            expect(printer.print("Hello World!")).to.equal("Inkjet Printer: Hello World!");
        });
    });

    describe('LaserPrinter', () => {
        it('should print a message', () => {
            printer = new LaserPrinter();

            expect(printer.print("Hello World!")).to.equal("Laser Printer: Hello World!");
        });
    });

    describe('ColorLaserPrinter', () => {
        it('should print a message', () => {
            printer = new ColorLaserPrinter();

            expect(printer.print("Hello World!")).to.equal("Color Laser Printer: Hello World!");
        });
    });
});