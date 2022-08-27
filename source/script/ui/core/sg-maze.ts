
import { h, VNode } from 'vue';
import Tile, { TileTypes } from '../../modes/maze/Tile';
import TileMaze from '../../modes/maze/TileMaze';
import { boxWalls, createKey } from '../../modes/maze/wallStyle';

type Props = {
    maze?: TileMaze;
    pretty: boolean;
};

function isWall(tile?: Tile | null): boolean {
    if(!tile) {
        return false;
    }

    return tile.type === TileTypes.Wall;
}

function getCellContent(tile: Tile, fancy: boolean = false): string {
    if(!fancy || tile.type !== TileTypes.Wall) {
        return tile.toCharacter();
    }

    const key = createKey(tile);

    return boxWalls[key]!;
}


function renderTable(maze?: TileMaze | null, fancy: boolean = false): VNode {
    if(!maze) {
        return h('div', {class: 'sg-maze empty'});
    }

    const rows: Array<VNode> = [];

    for(let row = 0; row < maze.rowCount; row++)  {
        const columns: Array<VNode> = [];

        maze.forEachRow(row, (cell, row, column) => {
            let content = getCellContent(cell, fancy);
            const key = createKey(cell);

            let style = '';

            if(cell.type === TileTypes.Wall) {
                content = '';
            }

            columns.push(h('td', {
                'data-row': row,
                'data-col': column,
                'data-wall': key,
                'data-type': cell.typeName,
                title: cell.typeName,
                style,
            }, content));
        });

        rows.push(h('tr', {
            'data-row': row,
        }, columns));
    }

    return h('div', {class: 'sg-maze'}, [
        h('div', [
            h('table', rows),
        ]),
    ]);
}

const SgMaze = (props: Props) => {
    return renderTable(props.maze);
}

SgMaze.props = ['maze'];

export default SgMaze;