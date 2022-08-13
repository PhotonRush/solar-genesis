import webpack, { type Configuration } from 'webpack';

import outputResults from './outputResults.js';

export default function build(config: Configuration): void {
    const compiler = webpack(config);

    compiler.run((error, stats) => {
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
}