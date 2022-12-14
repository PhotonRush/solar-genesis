import BasicMaze from './BasicMaze';
import generators from './generators';
import { CellIterator, CellIteratorBoolean, IMaze } from './IMaze';
import { ITileMazeOptions } from './ITileMazeOptions';
import createDrones from './populators/createDrones';
import createEntrances from './populators/createEntrances';
import createExits from './populators/createExits';
import createLoot from './populators/createLoot';
import Tile, { TileTypes } from './Tile';


export const TEXT_WALL = 'W';
export const TEXT_EMPTY = ' ';

const defaultOptions: Required<ITileMazeOptions> = {
    generator: generators.aldousBroder,
    rng: engine.random.system,
    rows: 16,
    columns: 16,
    entrances: 1,
    exits: 1,
    droneCount: 1,
    lootCount: 1,
};

export default class TileMaze implements IMaze<Tile> {
    private _options: Required<Readonly<ITileMazeOptions>>;

    private _grid: Array<Array<Tile>>;

    private _rowCount: number;
    private _columnCount: number;

    constructor(options?: ITileMazeOptions) {
        this._grid = [];
        this._rowCount = 0;
        this._columnCount = 0;

        this._options = Object.assign({}, defaultOptions, options);
    }

    get options() : Required<Readonly<ITileMazeOptions>> {
        return this._options;
    }

    get rowCount() {
        return this._rowCount;
    }

    get columnCount() {
        return this._columnCount;
    }

    get size() {
        return this.columnCount * this.rowCount;
    }

    public at(row: number, column: number): Tile | null {
        if(row < 0 || row >= this.rowCount) {
            return null;
        }

        if(column < 0 || column >= this.columnCount) {
            return null;
        }

        return this._grid[row]![column]!;
    }

    public initialize() {
        this._grid = [];
        this._rowCount = 0;
        this._columnCount = 0;
    }

    public generate() {
        const maze = new BasicMaze(this._options.rows, this._options.columns);

        this._options.generator(maze, this._options.rng);

        this.deserialize(maze.serialize());

        createEntrances(this, this._options.entrances, this._options.rng);
        createExits(this, this._options.entrances, this._options.rng);
        createDrones(this, this._options.droneCount, this._options.rng);
        createLoot(this, this._options.lootCount, this._options.rng);
    }

    public atRandom(): Tile {
        const row = this.options.rng.nextInteger(0, this.rowCount - 1);
        const column = this.options.rng.nextInteger(0, this.columnCount - 1);

        return this._grid[row]![column]!;
    }

    public forEach(fn: CellIterator<Tile>) {
        for(let row = 0; row < this.rowCount; row++) {
            for(let column = 0; column < this.columnCount; column++) {
               const cell = this.at(row, column)!;

               fn(cell, row, column, this);
            }
        }
    }

    public filter(fn: CellIteratorBoolean<Tile>): Array<Tile> {
        const result: Array<Tile> = [];

        this.forEach((tile, row, column, maze) => {
            if(fn(tile, row, column, maze)) {
                result.push(tile);
            }
        });

        return result;
    }



    public forEachRow(row: number, fn: CellIterator<Tile>) {
        for(let column = 0; column < this.columnCount; column++) {
            const cell = this.at(row, column)!;

            fn(cell, row, column, this);
         }
    }

    public forEachColumn(column: number, fn: CellIterator<Tile>) {
        for(let row = 0; row < this.rowCount; row++) {
            const cell = this.at(row, column)!;

            fn(cell, row, column, this);
        }
    }

    deserialize(text: string) {
        this._grid = [];

        const rows = text.split('\n');
        this._rowCount = rows.length;
        this._columnCount = rows.length > 0 ? rows[0]!.length : 0;

        rows.forEach((value, row) => {
            const columns: Array<Tile> = [];

            for(let column = 0; column < value.length; column++) {
                const c = value[column]!;
                const tile = new Tile(row, column, this);

                if(c === TEXT_EMPTY) {
                    tile.type = TileTypes.Empty;
                } else if  (c === TEXT_WALL) {
                    tile.type = TileTypes.Wall;
                } else {
                    tile.type = TileTypes.Unknown;
                }

                columns.push(tile);
            }


            this._grid.push(columns);
        });

        this.forEach((cell, row, column, grid) => {
            cell.north = grid.at(row - 1, column);
            cell.south = grid.at(row + 1, column);
            cell.west = grid.at(row, column - 1);
            cell.east = grid.at(row, column + 1);
        });
    }

    serialize(): string {
        return '';
    }

    render(): string {
        let result = '';

        for(let row = 0; row < this.rowCount; row++)  {
            let line = '';

            this.forEachRow(row, (cell) => {
                line += cell.toCharacter();
            });

            result += line + '\n';
        }

        return result;
    }
}