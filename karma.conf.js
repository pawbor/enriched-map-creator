var webpack = require('./webpack.config');

delete webpack.entry;

module.exports = function(config) {
  config.set({
    browsers: ['Chrome', 'PhantomJS'],
    files: [{
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
