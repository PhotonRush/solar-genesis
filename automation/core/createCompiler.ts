
import type { Compiler } from 'webpack';
import webpack, { type Configuration, type Stats } from 'webpack';


function outputResults(stats?: webpack.Stats): void {
    if (!stats) {
        throw new Error('No Stats object to report!');
    }

    console.log(stats.toString({
        chunks: false,
        colors: true,
    }));
}

function handler(compiler: Compiler, error?: Error | null, stats?: Stats): void {
    if (error) {
        throw error;
    }

    outputResults(stats);

    compiler.close((closeErr) => {
        if (closeErr) {
            throw closeErr;
        }
    });
}

const watchOptions = {
    aggregateTimeout: 600,
};

export type CompileType = 'build' | 'watch';

export default function createCompiler(config: Configuration, type: CompileType): void {
    const compiler = webpack(config);

    if (type === 'build') {
        compiler.run((error, stats) => {
            handler(compiler, error, stats, );
        });
    } else {
        compiler.watch(watchOptions, (error, stats) => {
            handler(compiler, error, stats);
        });
    }
}