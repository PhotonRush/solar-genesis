import  { type Stats } from 'webpack';

export default function outputResults(stats?: Stats): void {
    if (!stats) {
        throw new Error('No Stats object to report!');
    }

    console.log(stats.toString({
        chunks: false,
        colors: true,
    }));
}