var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var postcssImport = require('postcss-import');
var cssNext = require('postcss-cssnext');

module.exports = {
  entry: [
    './src/app.js'
  ],
  output: {
    publicPath: '/assets/',
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loaders: ['babel']
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, 'src'),
        loaders: ['style', 'css', 'postcss']
      }
    ]
  },
  postcss: function(webpack) {
    return [autoprefixer, postcssImport({addDependencyTo: webpack}), precss, cssNext];
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]

};
