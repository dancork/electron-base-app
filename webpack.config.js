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
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    root: path.join(__dirname, 'app'),
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules']
  },
  resolveLoader: {
		root: path.join(__dirname, 'node_modules'),
  },
  plugins: [
		new webpack.PrefetchPlugin('react'),
		new webpack.PrefetchPlugin('react/lib/ReactComponentBrowserEnvironment')
	]
}
