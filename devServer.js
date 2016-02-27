var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');

var config = require('./webpack.config.js');

config.entry.unshift('webpack-dev-server/client?http://localhost:3000/', 'webpack/hot/dev-server');

var compiler = webpack(config);

var server = new webpackDevServer(compiler, {
  hot: true,
  contentBase: './public',
  proxy: {
    '/getSong': {
      target: 'http://localhost:3005/',
      secure: false
    }
  },
  publicPath: '/assets/'

});

server.listen(3000);
