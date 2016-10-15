var path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  resolve: {
    root: path.resolve('./src')
  },
  entry: {
    app: './src'
  },
  output: {
    path: './src',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['ng-annotate', 'babel']
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'postcss', 'sass']
    }, {
      test: /\.html$/,
      loader: 'raw'
    }]
  },
  postcss: [
    require('autoprefixer')
  ]
};
