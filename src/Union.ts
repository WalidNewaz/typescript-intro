/**
 * Union types can be used to combine one or more types.
 */
export default class Union {
    concatStringOrNumber(val: string | number): string {
        return "The value is " + val;
    }
}