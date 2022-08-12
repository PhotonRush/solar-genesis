import { deleteSync } from 'del';
import environment from '../core/index.js';


const list = [
    environment.output.location,
];

deleteSync(list, {
    cwd: environment.location,
});