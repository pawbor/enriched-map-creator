module.exports = {
  entry: {
    app: './src/index.js'
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
