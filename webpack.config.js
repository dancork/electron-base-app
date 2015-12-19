'use strict'

var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    main: './src/entry'
  },
  output: {
    path: path.join( __dirname , 'app' ),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
}
