import { ICell } from './IMaze';
import TileMaze from './TileMaze';

export enum TileTypes {
    Empty,
    Wall,
    Unknown,
    PlayerDrone,
    EnemyDrone,
    Door,
    Entrance,
    Exit,
    Warp,
    Loot,
    Terminal,
};

export default class Tile implements ICell {
    private _row: number;
    private _column: number;
    private _parent: TileMaze;

    public type: TileTypes;
    public tag: string;

    public north: Tile | null;
    public south: Tile | null;
    public east: Tile | null;
    public west: Tile | null;

    constructor(row: number, column: number, parent: TileMaze) {
        this._row = row;
        this._column = column;
        this._parent = parent;

        this.type = TileTypes.Wall;
        this.tag = '';

        this.north = null;
        this.south = null;
        this.east = null;
        this.west = null;
    }

    get row() {
        return this._row;
    }

    get column() {
        return this._column;
    }

    get parent() {
        return this._parent;
    }

    public get neighbors(): ReadonlyArray<Tile> {
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

    toCharacter() {
        switch(this.type) {
            case TileTypes.Empty:
                return ' ';
            case TileTypes.Wall:
                return '⊠';
            case TileTypes.Unknown:
                return '⍰';
            case TileTypes.PlayerDrone:
                return '⏣';
            case TileTypes.EnemyDrone:
                return '⌬';
            case TileTypes.Door:
                return '⏛';
            case TileTypes.Entrance:
                return '⊙';
            case TileTypes.Exit:
                return '⊚';
            case TileTypes.Warp:
                return '⊛';
            case TileTypes.Loot:
                return '⍟';
            case TileTypes.Terminal:
                return '⌨';
        }
    }

    get typeName() {
        switch(this.type) {
            case TileTypes.Empty:
                return 'Empty';
            case TileTypes.Wall:
                return 'Wall';
            case TileTypes.Unknown:
                return 'Unknown';
            case TileTypes.PlayerDrone:
                return 'Player';
            case TileTypes.EnemyDrone:
                return 'Enemy';
            case TileTypes.Door:
                return 'Door';
            case TileTypes.Entrance:
                return 'Entrance';
            case TileTypes.Exit:
                return 'Exit';
            case TileTypes.Warp:
                return 'Warp';
            case TileTypes.Loot:
                return 'Loot';
            case TileTypes.Terminal:
                return 'Terminal';
        }
    }

    public toString() {
        return `[r${this.row}c${this._column}: ${this.toCharacter()}]`;
    }
}