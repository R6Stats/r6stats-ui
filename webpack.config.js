const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: false,
  resolve: {
    extensions: ['*', '.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  stats: {
    hash: true,
    version: true,
    timings: true,
    children: true,
    errors: true
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader',
            css: 'vue-style-loader!css-loader?importLoaders=1'
          },
          postcss: [
            require('postcss-import')(),
            require('postcss-cssnext')()
          ]
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  },
  entry: './src/index.js',
  output: {
    filename: 'r6stats-ui.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'RF6StatsUI',
    libraryTarget: 'umd'
  }
}