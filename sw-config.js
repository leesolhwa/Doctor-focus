module.exports = {
  staticFileGlobs: [
    'assets/css/*.css',
    '*.html',
    'assets/img/**.*',
    'assets/js/*.js'
  ],
  stripPrefix: 'app/',
  runtimeCaching: [{
    urlPattern: /this\\.is\\.a\\.regex/,
    handler: 'networkFirst'
  }]
};