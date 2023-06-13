import { LaserPrinter } from "./LaserPrinter";

export class ColorLaserPrinter extends LaserPrinter {
    /**
     * @method print
     * 
     * @param {string} message
     * 
     * @returns {void}
     */
    public print(message: string): string {
        return `Color Laser Printer: ${message}`;
    }
}