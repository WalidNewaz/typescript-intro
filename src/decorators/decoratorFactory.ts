import 'reflect-mecoratorsadata';

/**
 * First decorator factory
 * @returns a decorator
 */
export function first() {
    console.log('first(): evaluated')
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('first(): called')
    }
}

/**
 * Second decorator factory
 * @returns a decorator
 */
export function second() {
    console.log('second(): evaluated')
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('second(): called')
    }
}

/**
 * Method decorators is applied to the Property Descriptor for the method, 
 * and can be used to observe, modify, or replace a method definition.
 * @param value 
 * @returns 
 */
export function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.enumerable = value;
        descriptor.value = function (...args: any[]) {
            console.log('before method call');
            originalMethod.apply(this, args);
            console.log('after method call');
        }
    }
}

export function cacheable(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const cache = new Map();
    descriptor.value = function (...args: any[]) {
        const key = args.join(',');
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = originalMethod.apply(this, args);
        cache.set(key, result);
        return result;
    }
    return descriptor;
}

/**
 * This is a class decorator. It is applied to the constructor 
 * of the class and can be used to observe, modify, or replace a class definition.
 * Seals a class.
 * @returns a decorator
 */
export function sealed(constructor: Function) {
    console.log(`Sealing the constructor: ${constructor.name}`);
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

export function configurable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('configurable(): called');
        descriptor.configurable = value;
    }
}

const formatMetadataKey = Symbol('currency');

export function currency(formatString: string) {
    return Reflect.metadata(formatMetadataKey, formatString);
}

export function getCurrency(target: any, propertyKey: string) {
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}

const requiredMetadataKey = Symbol("required");

export function required(target: any, propertyKey: string, parameterIndex: number) {
    const existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
    existingRequiredParameters.push(parameterIndex);
    Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
}

export function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
    let method = descriptor.value!;

    descriptor.value = function () {
        let requiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
        if (requiredParameters) {
            for (let parameterIndex of requiredParameters) {
                if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
                    throw new Error("Missing required argument.");
                }
            }
        }
        return method.apply(this, arguments);
    };
}