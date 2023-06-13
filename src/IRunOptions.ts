/**
 * @interface IRunOptions
 * 
 * The commandLine either accepts a string or a string array,
 * or a function that returns a string or a string array.
 */
export interface IRunOptions {
    program: string,
    commandline: string | string[] | (() => string) | (() => string[]);
}