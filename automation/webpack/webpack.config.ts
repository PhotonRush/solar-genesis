import { type Configuration } from 'webpack';
import base from './webpack.base.js';

const _development: Configuration = {
    ...base,
    mode: 'development',
    devtool: 'source-map',
};

const _production: Configuration = {
    ...base,
    mode: 'production',
    devtool: 'source-map',
};

export const development = _development;
export const production = _production;