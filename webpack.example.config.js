var Path    = require('path');
var WebPack = require('webpack');

module.exports = {
  entry: './example/index.js',

  output: {
    path: Path.join(__dirname, 'example'),
    publicPath: './example',
    filename: 'example.build.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    modulesDirectories: [ 'web_modules', 'node_modules' ]
  },

  module: {
    loaders: [
      {
        test    : /\.jsx*$/,
        exclude : /node_modules/,
        loader  : 'envify!6to5?experimental'
      },
      {
        test    : /\.json$/,
        loader  : 'json-loader'
      }
    ]
  }
}