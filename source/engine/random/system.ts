const system: IRandomGenerator = {

    /**
     * Gets the next random number between 0 and 1.
     */
    next() {
        return Math.random();
    },

    pick<T>(array: Array<T> | ReadonlyArray<T>): T | null {
        if(array.length === 0) {
            return null;
        }

        if(array.length === 1) {
            return array[0]!;
        }

        const index = this.nextInteger(0, array.length -1);

        return array[index]!;
    },

    pickMany<T>(array: Array<T> | ReadonlyArray<T>, count: number = 1): Array<T> {
        if(array.length === 0) {
            return [];
        }

        if(array.length === 1) {
            return [array[0]!];
        }

        if(count === 1) {
            return [this.pick(array)!];
        }

        const indexes: Array<number> = this.cutMany(engine.array.toIndexArray(array), count);
        const result = indexes.map(index => array[index]!);

        return result;
    },

    cut<T>(array: Array<T>): T | null {
        if(array.length === 0) {
            return null;
        }

        if(array.length === 1) {
            return array.splice(0)[0]!;
        }

        const index = this.nextInteger(0, array.length -1);

        return array.splice(index, 1)[0]!;
    },

    cutMany<T>(array: Array<T>, count: number): Array<T> {
        if(array.length === 0) {
            return [];
        }

        if(array.length === 1) {
            return [array.splice(0)[0]!];
        }

        const indexes: Array<number> = engine.array.toIndexArray(array);
        const result: Array<T> = [];

        for(let j = 0; j < count; j++) {
            if(indexes.length <= 0) {
                break;
            }

            const index = this.nextInteger(0, array.length -1);

            result.push(array.splice(index, 1)[0]!);
        }

        return result;
    },

    /**
     * Gets the next random integer
     * @param min The minimum (inclusive) possible value, 0 if not defined
     * @param max The maximum (inclusive) possible value, Number.MAX_SAFE_INTEGER if not defined
     */
    nextInteger(min?: number, max?: number) {
        const minActual = typeof min === 'undefined' ? 0 : Math.ceil(min);
        const maxActual = typeof max === 'undefined' ? Number.MAX_SAFE_INTEGER : Math.floor(max);

        return Math.floor(Math.random() * (maxActual - minActual + 1) + minActual);
    },

    nextPercent(ratio: number): boolean {
        const value = this.nextInteger(0, 99);

        if(value < ratio) {
            return true;
        }

        return false;
    },

    /**
     * Doesn't do anything since Math.random does not accept a seed value
     */
    initialize(): void {
        // Does nothing, Random cannot accept a seed value
    }
}

export default system;