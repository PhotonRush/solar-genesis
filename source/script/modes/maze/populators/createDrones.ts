import { toIndexArray } from '../../../util/array';
import { IPrng } from '../../../util/random';
import { IMaze } from '../IMaze';
import Tile, { TileTypes } from '../Tile';


function canPlace(row: number, maze: IMaze<Tile>): boolean {
    let hasDrone: boolean = false;
    let hasEmpty: boolean = false;

    maze.forEachRow(row, cell => {
        if(cell.type === TileTypes.Empty) {
            hasEmpty = true;
        }

        if(cell.type === TileTypes.EnemyDrone) {
            hasDrone = true;
        }
    });

    return !hasDrone && hasEmpty;
}

function findRows(maze: IMaze<Tile>, count: number, rng: IPrng): Array<number> {
    const candidates: Array<number> = [];

    for(let row = 1; row < maze.rowCount - 1; row++) {
        if(canPlace(row, maze)) {
            candidates.push(row);
        }
    }

    return rng.pickMany(candidates, count);
}

function findCell(row: number, maze: IMaze<Tile>, rng: IPrng) {
    const pool: Array<Tile> = [];

    maze.forEachRow(row, (cell) => {
        if(cell.type === TileTypes.Empty) {
            pool.push(cell);
        }
    });

    rng.pick(pool)!.type = TileTypes.EnemyDrone;
}



export default function createDrones(maze: IMaze<Tile>, count: number, rng: IPrng) {
    const rows = findRows(maze, count, rng);

    rows.forEach(row => findCell(row, maze, rng));
}