import { IPrng } from '../../../util/random';
import BasicMaze from '../BasicMaze';

export default function binaryTree(maze: BasicMaze, rng: IPrng) {
    maze.forEach((cell) => {
        const choices = [];

        if(cell.north) {
            choices.push(cell.north);
        }

        if(cell.east) {
            choices.push(cell.east);
        }

        const choice = rng.pick(choices)!;

        cell.link(choice);
    });
}