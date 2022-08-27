declare const engine: typeof import('./source/engine/index');

interface IRandomGenerator {
    next(): number;
    nextInteger(min?: number, max?: number): number;
    nextPercent(ratio: number): boolean;
    initialize(seed: number): void;
    pick<T>(array: Array<T> | ReadonlyArray<T>): T | null;
    pickMany<T>(array: Array<T> | ReadonlyArray<T>, count: number): Array<T>;
    cut<T>(array: Array<T>): T | null;
    cutMany<T>(array: Array<T> | ReadonlyArray<T>, count: number): Array<T>;
}
