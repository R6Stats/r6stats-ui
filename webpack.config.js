const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')

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
            scss: 'vue-style-loader!css-loader!sass-loader',
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          },
          postcss: [
            autoprefixer({
              browsers: [
                'last 2 versions',
                'ie > 9',
                'Firefox ESR'
              ]
            })
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