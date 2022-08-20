import { IPrng } from '../../../util/random';
import BasicCell from '../BasicCell';
import BasicMaze from '../BasicMaze';

export default function sidewinder(maze: BasicMaze, rng: IPrng) {
    for(let row = 0; row < maze.rowCount; row++)  {
        let run: Array<BasicCell> = [];

        maze.forEachRow(row, (cell) => {
            run.push(cell);

            const atEast = !cell.east;
            const atNorth = !cell.north;

            const endRun = atEast || (!atNorth && rng.nextPercent(50));

            if(endRun) {
                const passage = rng.pick(run);
                passage!.link(passage!.north);

                run = [];
            } else {
                cell.link(cell.east);
            }
        });
    }
}