module.exports = function(config) {
  config.set({

    singleRun: true,
    browsers: ['PhantomJS'],
    frameworks: ['phantomjs-shim', 'mocha', 'chai'],
    reporters: ['mocha'],

    files: [
      'src/loadTests.js'
    ],

    preprocessors: {
      'src/loadTests.js': ['webpack', 'sourcemap']
    },

    webpack: require('./webpack.config'),

    webpackMiddleware: {
      noInfo: true
    },

    plugins: [
      require('karma-webpack'),
      require('karma-phantomjs-launcher'),
      require('karma-phantomjs-shim'),
      require('karma-sourcemap-loader'),
      require('karma-mocha'),
      require('karma-mocha-reporter'),
      require('karma-chai')
    ]
  })
}
