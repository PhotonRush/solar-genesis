import { resolve } from 'path';
import webpack, { Configuration, } from 'webpack';
import { VueLoaderPlugin } from 'vue-loader';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';

import environment from '../core/index.js'

const DefinePlugin = webpack.DefinePlugin;

const base: Configuration = {
    entry: {
        main: resolve(environment.source.script, 'main.index.ts'),
        components: resolve(environment.source.script, 'components.index.ts'),
    },
    output: {
        filename: '[name].bundle.js',
        path: environment.output.web.location,
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
                use: [MiniCssExtractPlugin.loader, 'css-loader'],

            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
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
        new MiniCssExtractPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: environment.source.index,
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: environment.source.content,
                    to: environment.output.web.content,
                    filter: (path) => !path.includes('_notes'),
                }
            ]
        }),
    ],
};

export default base;