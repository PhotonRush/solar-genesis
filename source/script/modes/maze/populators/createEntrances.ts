import { IMaze } from '../IMaze';
import Tile, { TileTypes } from '../Tile';

export default function createEntrances(maze: IMaze<Tile>, count: number, rng: IRandomGenerator) {
    const row = maze.rowCount - 2;
    const pool: Array<Tile> = [];
    const selected: Array<number> = [];

    maze.forEachRow(row, (cell) => {
        if(cell.type === TileTypes.Empty) {
            pool.push(cell);
        }
    });

    for(let j = 0; j < count; j++) {
        const cell = rng.cut(pool);

        if(cell) {
            selected.push(cell.column);
        }
    }

    selected.forEach(column => {
        maze.at(row, column)!.type = TileTypes.Entrance;
    });
}