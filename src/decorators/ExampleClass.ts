import {
    enumerable,
    sealed,
    configurable,
    currency,
    getCurrency,
    required,
    validate
} from './decoratorFactory';

@sealed
export class ExampleClass {
    private _name: string;

    @currency('USD')
    salary: number;

    constructor(name: string, salary: number) {
        this._name = name;
        this.salary = salary;
    }

    @configurable(false)
    get name(): string {
        return this._name;
    }

    set name(val: string) {
        this._name = val;
    }

    @enumerable(true)
    exampleMethod() {
        console.log('exampleMethod()');
    }

    getCurrentSalary() {
        const currencySymbol = getCurrency(this, 'salary');
        return `${currencySymbol} ${this.salary}`;
    }

    print(@required pretty: boolean) {
        return pretty ? 'Pretty' : 'Ugly';
    }
}