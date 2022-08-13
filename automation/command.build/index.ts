import { development } from '../core/webpack.config.js';
import createCompiler from '../core/createCompiler.js';

// const compiler = webpack(production);

createCompiler(development, 'build');

// const compiler = webpack(development);


// function outputResults(stats?: webpack.Stats): void {
//     if (!stats) {
//         throw new Error('No Stats object to report!');
//     }

//     console.log(stats.toString({
//         chunks: false,
//         colors: true,
//     }));
// }

// compiler.run((error, stats) => { // [Stats Object](#stats-object)
//     if (error) {
//         throw error;
//     }

//     outputResults(stats);

//     compiler.close((closeErr) => {
//         if (closeErr) {
//             throw closeErr;
//         }
//     });
// });