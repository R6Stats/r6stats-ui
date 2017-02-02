'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('deep-assign');
const webpack = require('webpack');

const options = require('./options');
const base = require('./webpack.base.js');

const config = merge(base, {
  entry: options.paths.resolve('src/index.js'),

  output: {
    filename: options.isProduction ? 'r6stats-ui.min.js' : 'r6stats-ui.js',
    path: options.paths.output.main,
    library: 'R6StatsUI',
    libraryTarget: 'umd'
  },

  plugins: [
    new webpack.BannerPlugin({
      banner: options.banner,
      raw: true,
      entryOnly: true
    })
  ]
});

config.module.rules[0].options.loaders = {
  scss: ExtractTextPlugin.extract({
    loader: 'css-loader!sass-loader',
    fallbackLoader: 'vue-style-loader'
  })
};

if (options.isProduction) {
  config.plugins = config.plugins.concat([
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]);
}

module.exports = config;