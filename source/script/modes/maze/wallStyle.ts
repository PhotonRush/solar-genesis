import Tile, { TileTypes } from './Tile';




export interface IWallStyle {
    [key: string]: string,
    'nsew': string;
    'nse-': string;
    'ns-w': string;
    'ns--': string;
    'n-ew': string;
    'n-e-': string;
    'n--w': string;
    'n---': string;
    '-sew': string;
    '-se-': string;
    '-s-w': string;
    '-s--': string;
    '--ew': string;
    '--e-': string;
    '---w': string;
    '----': string;
}

function isWall(tile?: Tile | null): boolean {
    if(!tile) {
        return false;
    }

    return tile.type === TileTypes.Wall;
}


export function createKey(tile: Tile) {
    const north: string = isWall(tile.north) ? 'n' : '-';
    const south: string = isWall(tile.south) ? 's' : '-';
    const east: string = isWall(tile.east)   ? 'e' : '-';
    const west: string = isWall(tile.west)   ? 'w' : '-';

    return north + south + east + west;
}

export const boxWalls: IWallStyle = {
    'nsew':'┼',

    'nse-':'├',

    'ns-w':'┤',

    'ns--':'│',

    'n-ew':'┴',

    'n-e-':'└',

    'n--w':'┘',

    'n---':'╵',

    '-sew':'┬',

    '-se-':'┌',

    '-s-w':'┐',

    '-s--':'╷',

    '--ew':'─',

    '--e-':'╶',

    '---w':'╴',

    '----':' ',
}



class WallBuilder {
    value: string;
    color: string;

    constructor(color: string = 'white') {
        this.color = color;
        this.value = '';
    }

    reset(color?: string) {
        if(color) {
            this.color = color;
        }

        this.value = '';

        return this;
    }

    north() {
        this.value += `border-top: solid 1px ${this.color};`;

        return this;
    }

    south() {
        this.value += `border-bottom: solid 1px ${this.color};`;

        return this;
    }

    east() {
        this.value += `border-left: solid 1px ${this.color};`;

        return this;
    }

    west() {
        this.value += `border-right: solid 1px ${this.color};`;

        return this;
    }


}



export const borderWalls: IWallStyle = {
    'nsew':'',
    '----':'',

    'ns--': new WallBuilder().east().west().value,
    '--ew': new WallBuilder().north().south().value,

    '-s-w': new WallBuilder().west().north().value,
    'nse-': new WallBuilder().east().value,
    'ns-w': new WallBuilder().west().value,
    'n-ew': new WallBuilder().south().value,
    'n-e-': new WallBuilder().south().east().value,
    'n--w': new WallBuilder().south().west().value,
    'n---': new WallBuilder().south().west().east().value,
    '-sew': new WallBuilder().north().value,
    '-se-': new WallBuilder().north().east().value,
    '-s--': new WallBuilder().north().east().west().value,
    '--e-': new WallBuilder().north().south().east().value,
    '---w': new WallBuilder().north().south().west().value,
};
