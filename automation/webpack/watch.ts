import webpack, { type Configuration } from 'webpack';

import outputResults from './outputResults.js';


const watchOptions = {
    aggregateTimeout: 600,
};

export default function watch(config: Configuration): void {
    const compiler = webpack(config);

    compiler.watch(watchOptions, (error, stats) => {
        if (error) {
            throw error;
        }

        outputResults(stats);
    });
}