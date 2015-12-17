'use strict'

var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    main: './src/entry'
  },
  output: {
    path: path.join( __dirname , 'app' ),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  resolve: {
    // root: path.join(__dirname, 'app'),
    extensions: ['', '.js', '.jsx'],
    // modulesDirectories: ['node_modules']
  }
}
