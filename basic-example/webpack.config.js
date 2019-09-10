// Created by Byeonggeol Ha on 2019-09-09
const webpack = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/main.ts'),
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [{
            test: /\.ts$/,
            loader: 'ts-loader',
            exclude: [/node_modules/]
        }]
    },
    resolve: {
        extensions: ['.ts', '.js'],
        plugins: [
            new TsconfigPathsPlugin({
                configFile: path.resolve(__dirname, "./tsconfig.json")
            })
        ]
    }
};
