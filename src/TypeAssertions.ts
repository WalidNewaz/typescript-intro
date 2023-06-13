export class TypeAssertions {
    static changeStringToNumber(): number {
        let myString: string = "1";
        let myNumber: number = <number><any>myString; // assert to any, then to number
        // console.log(typeof myNumber);
        return myNumber;
    }
}