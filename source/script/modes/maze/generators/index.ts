import { type IPrng } from '../../../util/random';
import type BasicMaze from '../BasicMaze';
import aldousBroder from './aldousBroder';
import binaryTree from './binaryTree';
import sidewinder from './sidewinder';

export type MazeGenerator = (maze: BasicMaze, rng: IPrng) => void;


export default {
    sidewinder,
    binaryTree,
    aldousBroder,
}
