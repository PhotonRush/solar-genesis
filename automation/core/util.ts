import { existsSync, mkdirSync } from 'fs';
import { resolve, join, parse, sep } from 'path';


function resolver(root: string, index: number, array: Array<string>) {
    return resolve(root, (join(...array.slice(0, index + 1))));
}

export function ensure(location: string) {
    mkdirSync(location, {
        recursive: true,
    });
}
