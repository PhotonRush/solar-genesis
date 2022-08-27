export function forEach2d<T>(array: Array<Array<T>>, fn?: (item: T, row: number, column: number, array: Array<Array<T>>) => void) {
    if(!fn) {
        return;
    }

    for(let row = 0; row < array.length; row++) {
        for(let column = 0; column < array[row]!.length; column++) {
            fn(array[row]![column]!, row, column, array);
        }
    }
}

export function filter2d<T>(array: Array<Array<T>>, fn?: (item: T, row: number, column: number, array: Array<Array<T>>) => boolean) {
    const result: Array<Array<T>> = [];

    if(!fn) {
         return result;
    }

    for(let row = 0; row < array.length; row++) {
        const items: Array<T> = [];

        for(let column = 0; column < array[row]!.length; column++) {
            if(fn(array[row]![column]!, row, column, array)) {
                items.push(array[row]![column]!);
            }
        }

        result.push(items);
    }

    return result;
}

export function flatten2d<T>(array: Array<Array<T>>): Array<T> {
    const result: Array<T> = [];

    forEach2d(array, item => result.push(item));

    return result;
}