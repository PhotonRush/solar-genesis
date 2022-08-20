export function toIndexArray(array: Array<unknown> | ReadonlyArray<unknown>) {
    const result: Array<number> = [];

    for(let j = 0; j < array.length; j++) {
        result.push(j);
    }

    return result;
}