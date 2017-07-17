const express = require('express');
const webpack = require('webpack');
const path = require('path');

const webpackConfig = require('./webpack.config.js');

const PORT = 4000;
const app = express();
/* eslint-disable no-console */


const compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(path.resolve(__dirname, 'dist')));

// app.get('*', (req, res) => (
//   res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
// ));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
