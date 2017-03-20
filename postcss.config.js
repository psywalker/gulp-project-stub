'use strict';

module.exports = (ctx) => ({
  map: ctx.env !== 'production',
  plugins: {
    'postcss-import': {
      plugins: [
        require('stylelint')
      ]
    },
    'postcss-url': {},
    'autoprefixer': {},
    'css-mqpacker': {
      'sort': true
    },
    'postcss-csso': {},
    'postcss-browser-reporter': {},
    'postcss-reporter': {
      'clearReportedMessages': true
    },
  }
});
