
import type BasicMaze from '../BasicMaze';
import aldousBroder from './aldousBroder';
import binaryTree from './binaryTree';
import sidewinder from './sidewinder';

export type MazeGenerator = (maze: BasicMaze, rng: IRandomGenerator) => void;


export default {
    sidewinder,
    binaryTree,
    aldousBroder,
}
