import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { ensure } from './util.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

export type OutputMap = {
    location: string;
    web: LocationMap;
};

export type LocationMap = {
    location: string;
    engine: string,
    script: string;
    style: string;
    index: string;
    content: string;
};

export type Environment = {
    location: string;
    source: LocationMap;
    output: OutputMap;
    isWindows: boolean;
};

function createSource(location: string): LocationMap {
    return {
        location,
        engine: resolve(location, './engine'),
        script: resolve(location, './script'),
        style: resolve(location, './style'),
        content: resolve(location, './content'),
        index: resolve(location, './index.tpl.html'),
    };
}

function createWebOutput(location: string): LocationMap {
    return {
        location,
        script: resolve(location, './script'),
        engine: resolve(location, './engine'),
        style: resolve(location, './style'),
        content: resolve(location, './content'),
        index: resolve(location, './index.html'),
    };
}

function createOutput(location: string): OutputMap {
    const webOutput = resolve(location, 'web');

    return {
        location,
        web: createWebOutput(webOutput),
    };
}

function createEnvironment(location: string): Environment {
    return {
        location,
        source: createSource(resolve(location, './source')),
        output: createOutput(resolve(location, './dist')),
        isWindows: process.platform === 'win32',
    };
}

const environment: Environment = createEnvironment(resolve(__dirname, '../..'));

ensure(environment.output.web.location);

export default environment;
