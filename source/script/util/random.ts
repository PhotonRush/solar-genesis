import { toIndexArray } from './array';

export interface IPrng {
    next(): number;
    nextInteger(min?: number, max?: number): number;
    nextPercent(ratio: number): boolean;
    initialize(seed: number): void;
    pick<T>(array: Array<T> | ReadonlyArray<T>): T | null;
    pickMany<T>(array: Array<T> | ReadonlyArray<T>, count: number): Array<T>;
    cut<T>(array: Array<T>): T | null;
    cutMany<T>(array: Array<T> | ReadonlyArray<T>, count: number): Array<T>;
}



export const systemPrng: IPrng = {

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

        const indexes: Array<number> = this.cutMany(toIndexArray(array), count);
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

        const indexes: Array<number> = toIndexArray(array);
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







// Random Number Generators: https://prng.di.unimi.it/


//bigint:                 Infinite?!
//number:      9,007,199,254,740,990
//  uint:              4,294,967,295
// ulong: 18,446,744,073,709,551,615





// export default function xoshiro256(seed: bigint): bigint {
//     if (seed === 0n) {
//         throw new Error('Seed cannot be zero!');
//     }

//     function rotl(x: bigint, k: bigint): bigint {
//         return (x << k) | (x >> (64 - k));
//     }


//     const clampedSeed: bigint = BigInt.asUintN(64, seed);

//     const result


//     const s = new BigUint64Array(1);
//     s.set(0, seed);

//     console.log(s.at(0));


//     const result: bigint = rotl(s[0] + s[3], 7) + s[0];

//     const uint32_t t = s[1] << 9;

//     s[2] ^= s[0];
//     s[3] ^= s[1];
//     s[1] ^= s[2];
//     s[0] ^= s[3];

//     s[2] ^= t;

//     s[3] = rotl(s[3], 11);

//     return result;
// }
