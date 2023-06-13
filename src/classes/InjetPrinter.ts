import { Printer } from './Printer';

export class InkjetPrinter extends Printer {
    /**
     * @method print
     * 
     * @param {string} message
     * 
     * @returns {void}
     */
    public print(message: string): string {
        return `Inkjet Printer: ${message}`;
    }
}