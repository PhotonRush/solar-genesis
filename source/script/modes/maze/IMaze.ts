export type CellIterator<T extends ICell> = (cell: T, row: number, column: number, maze: IMaze<T>) => void;
export type CellIteratorBoolean<T extends ICell> = (cell: T, row: number, column: number, maze: IMaze<T>) => boolean;
export type CellIteratorCell<T extends ICell> = (cell: T, row: number, column: number, maze: IMaze<T>) => T;

export interface ICell {
    get row(): number;
    get column(): number;
    get parent(): IMaze<ICell>;
    get neighbors(): ReadonlyArray<ICell>;

    north: ICell | null;
    south: ICell | null;
    west: ICell | null;
    east: ICell | null;
}

export interface IMaze<T extends ICell> {
    get size(): number;
    get rowCount(): number;
    get columnCount(): number;

    at(row: number, column: number): T | null;
    atRandom(): T;

    initialize(): void;
    generate(): void;

    forEach(fn: CellIterator<T>): void;
    forEachRow(row: number, fn: CellIterator<T>): void;
    forEachColumn(column: number, fn: CellIterator<T>): void;

    filter(fn: CellIteratorBoolean<T>): Array<T>;

    render(): string;
    serialize(): string;
    deserialize(content: string): void;
}