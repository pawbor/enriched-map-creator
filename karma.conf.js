var webpack = require('./webpack.config');

delete webpack.entry;
delete webpack.devtool;

module.exports = function(config) {
  config.set({
    browsers: ['Chrome', 'PhantomJS'],
    files: [{
      pattern: 'src/load-google-maps.js',
      watched: false
    }, {
      pattern: 'test-context.js',
      watched: false
    }],
    frameworks: ['jasmine'],
    preprocessors: {
      'test-context.js': ['webpack']
    },
    webpack,
    webpackServer: {
      noInfo: true
    }
  });
};
