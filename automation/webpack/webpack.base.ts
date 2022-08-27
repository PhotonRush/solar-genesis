import { resolve, relative } from 'path';
import webpack, { type Configuration } from 'webpack';
import { VueLoaderPlugin } from 'vue-loader';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// import CopyPlugin from 'copy-webpack-plugin';

import environment from '../core/index.js';

const DefinePlugin = webpack.DefinePlugin;
const ProvidePlugin = webpack.ProvidePlugin;

const base: Configuration = {
    entry: {
        main: resolve(environment.source.script, 'main.index.ts'),
        components: resolve(environment.source.script, 'components.index.ts'),
        engine: resolve(environment.source.engine, 'index.ts'),
    },
    output: {
        filename: '[name].bundle.js',
        path: environment.output.web.location,
        assetModuleFilename: (path) => {
            if (typeof path.filename === 'undefined') {
                throw new Error('Invalid Path data.');
            }

            return relative(environment.source.location, path.filename).replaceAll('\\', '/');
        },
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: { appendTsSuffixTo: [/\.vue$/] },
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {

                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {

                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',

            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm-bundler.js',
        },
    },

    plugins: [
        new DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: true,
        }),
        new ProvidePlugin({
            engine: resolve(environment.source.engine, 'index.ts'),
        }),
        new MiniCssExtractPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: environment.source.index,
        }),
        // new CopyPlugin({
        //     patterns: [
        //         {
        //             from: environment.source.content,
        //             to: environment.output.web.content,
        //             filter: (path) => !path.includes('_notes'),
        //         },
        //     ],
        // }),
    ],
};

export default base;