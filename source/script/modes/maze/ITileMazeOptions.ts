import { IPrng } from '../../util/random';
import { MazeGenerator } from './generators';

export interface ITileMazeOptions {
    generator: MazeGenerator;
    rng: IPrng;
    rows: number;
    columns: number;
    exits?: number;
    entrances?: number;
    droneCount?: number;
}