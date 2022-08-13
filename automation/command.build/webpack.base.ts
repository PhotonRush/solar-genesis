import { resolve } from 'path';
import webpack, { Configuration, } from 'webpack';
import { VueLoaderPlugin } from 'vue-loader';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import environment from '../core/index.js'

const DefinePlugin = webpack.DefinePlugin;

const base: Configuration = {
    entry: {
        main: resolve(environment.source.script, 'main.index.ts'),
        components: resolve(environment.source.script, 'components.index.ts'),
    },
    output: {
        filename: '[name].bundle.js',
        path: environment.output.web.location
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: { appendTsSuffixTo: [/\.vue$/] }
            },
            {
                test: /\.css$/,
                use: [

                    'css-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [

                    "css-loader",
                    "sass-loader",
                ],
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm-bundler.js',
        }
    },

    plugins: [
        new DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: true,
        }),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: environment.source.index,
        })
    ],
};

export default base;