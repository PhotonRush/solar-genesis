import BasicMaze from './BasicMaze';
import { ICell } from './IMaze';

export default class BasicCell implements ICell {
    private _row: number;
    private _column: number;
    private _parent: BasicMaze;
    private _key: string;

    private _links: Array<BasicCell>;

    public tag: string;

    public north: BasicCell | null;
    public south: BasicCell | null;
    public east: BasicCell | null;
    public west: BasicCell | null;

    constructor(row: number, column: number, parent: BasicMaze, tag: string = '') {
        this._row = row;
        this._column = column;
        this._parent = parent;
        this._links = [];
        this.tag = tag;
        this._key = `[r${this.row}c${this._column}]`;

        this.north = null;
        this.south = null;
        this.east = null;
        this.west = null;
    }

    public get row(): number {
        return this._row;
    }

    public get column(): number {
        return this._column;
    }

    public get parent(): BasicMaze {
        return this._parent;
    }

    public get neighbors(): ReadonlyArray<BasicCell> {
        const result = [];

        if(this.north) {
            result.push(this.north);
        }

        if(this.south) {
            result.push(this.south);
        }

        if(this.east) {
            result.push(this.east);
        }

        if(this.west) {
            result.push(this.west);
        }

        return result;
    }

    public get links(): ReadonlyArray<BasicCell> {
        return this._links;
    }

    public get key(): string {
        return this._key;
    }

    public isLinked(cell?: BasicCell | null): boolean {
        if(!cell) {
            return false;
        }

        return this._links.includes(cell);
    }

    public link(cell?: BasicCell | null) {
        if(!cell || this.isLinked(cell)) {
            return;
        }

        this._links.push(cell);
        cell.link(this);
    }

    public unlink(cell?: BasicCell | null) {
        if(!cell || !this.isLinked(cell)) {
            return;
        }

        const index = this.neighbors.indexOf(cell);
        this._links.splice(index, 1);
        cell.unlink(this);
    }

    public toString() {
        return this._key;
    }
}