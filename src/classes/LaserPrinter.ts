import { Printer } from './Printer';

export class LaserPrinter extends Printer {
    /**
     * @method print
     * 
     * @param {string} message
     * 
     * @returns {void}
     */
    public print(message: string): string {
        return `Laser Printer: ${message}`;
    }
}