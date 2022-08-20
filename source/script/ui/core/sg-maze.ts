
import { defineComponent, h, VNode } from 'vue';
import { TileTypes } from '../../modes/maze/Tile';
import TileMaze from '../../modes/maze/TileMaze';


type Props = {
    maze?: TileMaze;
}


function render(maze?: TileMaze | null): VNode {
    if(!maze) {
        return h('div', {class: 'sg-maze empty'});
    }

    const rows: Array<VNode> = [];

    for(let row = 0; row < maze.rowCount; row++)  {
        const columns: Array<VNode> = []

        maze.forEachRow(row, (cell, row, column) => {
            let style = '';

            if(cell.type !== TileTypes.Wall) {
                style = 'color: rgb(0, 256, 0)';
            }

            if(cell.type === TileTypes.EnemyDrone) {
                style = 'color: rgb(256, 0, 0)';
            }

            if(cell.type === TileTypes.Loot) {
                style = 'color: rgb(256, 256, 0)';
            }

            columns.push(h('td', {
                'data-row': row,
                'data-col': column,
                title: cell.typeName,
                style,
            }, cell.toCharacter()));
        });

        rows.push(h('tr', {
            'data-row': row,
        }, columns));
    }

    return h('div', {class: 'sg-maze'}, [
        h('table', rows),
    ]);
}

const SgMaze = (props: Props ) => {
    return render(props.maze);
}

SgMaze.props = ['maze'];

export default SgMaze;
