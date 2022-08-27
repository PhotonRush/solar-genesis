import { MazeGenerator } from './generators';

export interface ITileMazeOptions {
    generator?: MazeGenerator;
    rng?: IRandomGenerator;
    rows?: number;
    columns?: number;
    exits?: number;
    entrances?: number;
    droneCount?: number;
    lootCount?: number;
}