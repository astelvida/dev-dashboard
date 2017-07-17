const express = require('express');
const webpack = require('webpack');
const path = require('path');

const OUTPUT_PATH = path.resolve(__dirname, 'dist');
const WEBPACK_DEV_CONFIG_PATH = path.resolve(__dirname, 'webpack.config.js');
const PORT = 4000;

 // eslint-disable-next-line import/no-dynamic-require
const webpackConfig = require(WEBPACK_DEV_CONFIG_PATH);

const app = express();

const compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(path.resolve(OUTPUT_PATH)));

app.get('*', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
);

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
