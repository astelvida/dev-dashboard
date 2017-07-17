const webpack = require('webpack');
const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: [
        // 'babel-polyfill',
        'react-hot-loader/patch',
        'webpack-hot-middleware/client',
        './src/index.js',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        loaders: [
            { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ },
            { test: /\.jsx$/, use: ['babel-loader'], exclude: /node_modules/ },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
};

 // new HtmlWebpackPlugin({
        //     template: './src/index_template.html',
        //     title: 'DEV-DASHBOARD',
        //     inject: 'body',
        //     // hash: true,
        //     // minifiy: true,
        // }),