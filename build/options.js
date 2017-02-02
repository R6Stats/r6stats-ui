'use strict';

const path = require('path');
const version = require('../package.json').version;

const banner =
  '/*!\n' +
  ' * R6StatsUI v' + version + ' (https://github.com/R6Stats/r6stats-ui)\n' +
  ' * (c) ' + new Date().getFullYear() + ' R6Stats\n' +
  ' * Released under the MIT License.\n' +
  ' */';

module.exports = {

    isProduction: process.env.NODE_ENV === 'production',

    paths: {
        root: path.join(__dirname, '..'),

        src: {
            main: path.join(__dirname, '..', 'src')
        },

        output: {
            main: path.join(__dirname, '..', 'dist')
        },

        resolve(location) {
            return path.join(__dirname, '..', location);
        }
    }
};