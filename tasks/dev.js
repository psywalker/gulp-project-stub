'use strict';

const gulp = require('gulp');

module.exports = () => (
  gulp.series(
      'build',
      gulp.parallel(
          'watch',
          'serve'
      )
  )
);
