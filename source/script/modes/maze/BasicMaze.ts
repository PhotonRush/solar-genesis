import { IPrng, systemPrng } from '../../util/random';
import BasicCell from './BasicCell';
import { CellIterator, IMaze } from './IMaze';
import { TEXT_WALL, TEXT_EMPTY } from './TileMaze';

export default class BasicMaze implements IMaze<BasicCell> {
    private _rowCount: number;
    private _columnCount: number;

    private _grid: Array<Array<BasicCell>>;

    constructor(rows: number, columns: number) {
        this._rowCount = rows;
        this._columnCount = columns;
        this._grid = [];

        this.initialize();
    }


    get rowCount() {
        return this._rowCount;
    }

    get columnCount() {
        return this._columnCount;
    }

    get size() {
        return this.rowCount * this.columnCount;
    }

    public at(row: number, column: number): BasicCell | null {
        if(row < 0 || row >= this._rowCount) {
            return null;
        }

        if(column < 0 || column >= this._columnCount) {
            return null;
        }

        return this._grid[row]![column]!;
    }

    public atRandom(): BasicCell {
        const row = systemPrng.nextInteger(0, this.rowCount - 1);
        const column = systemPrng.nextInteger(0, this.columnCount - 1);

        return this._grid[row]![column]!;
    }

    private _createGrid(): Array<Array<BasicCell>> {
        const grid: Array<Array<BasicCell>> = [];

        for(let row = 0; row < this.rowCount; row++) {
            const columnCells: Array<BasicCell> = [];

            for(let column = 0; column < this.rowCount; column++) {
                columnCells.push(new BasicCell(row, column, this));
            }

            grid.push(columnCells);
        }


        return grid;
    }

    public initialize() {
        this._grid = this._createGrid();

        this.forEach((cell, row, column, grid) => {
            cell.north = grid.at(row - 1, column);
            cell.south = grid.at(row + 1, column);
            cell.west = grid.at(row, column - 1);
            cell.east = grid.at(row, column + 1);
        });
    }

    public forEach(fn: CellIterator<BasicCell>) {
        for(let row = 0; row < this.rowCount; row++) {
            for(let column = 0; column < this.rowCount; column++) {
               const cell = this.at(row, column)!;

               fn(cell, row, column, this);
            }
        }
    }

    public forEachRow(row: number, fn: CellIterator<BasicCell>) {
        for(let column = 0; column < this.rowCount; column++) {
            const cell = this.at(row, column)!;

            fn(cell, row, column, this);
         }
    }

    public forEachColumn(column: number, fn: CellIterator<BasicCell>) {
        for(let row = 0; row < this.rowCount; row++) {
            const cell = this.at(row, column)!;

            fn(cell, row, column, this);
        }
    }

    public render(): string {
        let result = '';

        result += '+' + '---+'.repeat(this.columnCount) + '\n';

        for(let row = 0; row < this.rowCount; row++)  {
            let line = '|';
            let bottom = '+';

            this.forEachRow(row, (cell) => {
                line += '   ';
                line += cell.isLinked(cell.east) ? ' ' : '|';
                bottom += cell.isLinked(cell.south) ? '   +' : '---+';
            });

            result += line + '\n';
            result += bottom + '\n';
        }

        return result;
    }

    generate(): void {
        throw new Error('Method not implemented.');
    }

    serialize(): string {
        const bottomWall = TEXT_WALL.repeat(2);
        const bottomPassage = TEXT_EMPTY + TEXT_WALL;

        let result = '';

        result += TEXT_WALL.repeat((this.columnCount * 2) - 1) + TEXT_WALL + TEXT_WALL + '\n';

        for(let row = 0; row < this.rowCount; row++)  {
            let line = TEXT_WALL;
            let bottom = TEXT_WALL;

            this.forEachRow(row, (cell) => {
                line += TEXT_EMPTY;
                line += cell.isLinked(cell.east) ? TEXT_EMPTY : TEXT_WALL;
                bottom += cell.isLinked(cell.south) ? bottomPassage : bottomWall;
            });

            result += line + '\n';

            if(row === this.rowCount - 1) {
                result += bottom;
            } else {
                result += bottom + '\n';
            }

        }

        return result;
    }

    deserialize(content: string): void {
        throw new Error('Method not implemented.');
    }
}