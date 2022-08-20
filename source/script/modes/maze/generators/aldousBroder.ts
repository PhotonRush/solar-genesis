import { IPrng } from '../../../util/random';
import BasicMaze from '../BasicMaze';

export default function aldousBroder(maze: BasicMaze, rng: IPrng) {
    let cellsRemaining = maze.size - 1;
    let cell = maze.atRandom();

    while(cellsRemaining > 0) {
        const next = rng.pick(cell.neighbors)!;

        if(next.links.length <= 0) {
            cell.link(next);
            cellsRemaining--;
        }

        cell = next;
    }
}