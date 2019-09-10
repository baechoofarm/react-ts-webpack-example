// Created by Byeonggeol Ha on 2019-09-09
const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/main.tsx'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.ProgressPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: [/node_modules/]
            },
            {
                test: /\.(less)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: "local",
                                localIdentName: '[name]__[local]--[hash:base64:5]'
                            },
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    }
};
