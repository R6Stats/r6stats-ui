'use strict';

const merge = require('deep-assign');
const webpack = require('webpack');

const options = require('./options');
const base = require('./webpack.base.js');

const config = merge(base, {
  entry: {
    R6Badge: ['./src/components/R6Badge.vue'],
    R6Badge: ['./src/components/R6ProgressBar.vue']
  },

  output: {
    path: options.paths.output.lib,
    filename: options.isProduction ? '[name].min.js' : '[name].js',
    library: ['R6StatsUI', '[name]'],
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
  scss: 'vue-style-loader!css-loader!sass-loader'
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