export default class Functions {
    optionalParameters(firstName: string, lastName?: string): string {
        if (lastName) {
            return firstName + " " + lastName;
        } else {
            return firstName;
        }
    }

    addNumbers(...nums: number[]): number {
        let result = 0;
        nums.forEach((num) => {
            result += num;
        });
        return result;
    }

    /**
     * Calculate compound interest
     * @param principal 
     * @param years 
     * @param rate default rate is 5%
     * @returns 
     */
    compoundInterest(principal: number, years: number, rate: number = 0.05): number {
        return principal * Math.pow(1 + rate, years);
    }
}