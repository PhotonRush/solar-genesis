import webpack from 'webpack';

import { production, development } from './webpack.config.js';

// const compiler = webpack(production);
const compiler = webpack(development);


function outputResults(stats?: webpack.Stats) {
    if (!stats) {
        throw new Error('No Stats object to report!');
    }

    console.log(stats.toString({
        chunks: false,
        colors: true
    }));
}

compiler.run((error, stats) => { // [Stats Object](#stats-object)
    if (error) {
        throw error;
    }

    outputResults(stats);

    compiler.close((closeErr) => {
        if (closeErr) {
            throw closeErr;
        }
    });
});