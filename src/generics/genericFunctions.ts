/**
 * Returns a random element from the given array
 * @param items 
 * @returns 
 */
export function getRandomElement<T> (items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

/**
 * Merges two objects.
 * T and U are generic types which have been constrained to be objects.
 * @param obj1 
 * @param obj2 
 * @returns 
 */
export function mergeObjects<T extends object, U extends object>
    (obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

/**
 * Contraint on K ensures that K is a key of T
 * @param obj 
 * @param key 
 * @returns 
 */
export function prop<T, K extends keyof T> (obj: T, key: K) {
    return obj[key];
}