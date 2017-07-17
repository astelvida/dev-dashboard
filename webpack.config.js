const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: [
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

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const htmlWebpackPlugin = new HtmlWebpackPlugin({
//     template: './index_template.html',
//     title: 'DEV-DASHBOARD',
//     inject: 'body',
//     filename: 'index.html',
//     hash: true,
//     minifiy: true,
// });