'use strict';

const gulp = require('gulp');

module.exports = () => (
  gulp.series(
      'clean',
      'assets',
      gulp.parallel(
          'copy',
          'pages',
          'styles',
          'scripts'
      )
  )
);
