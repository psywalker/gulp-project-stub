'use strict';

const gulp = require('gulp');

module.exports = () => (
  gulp.parallel(
      'fonts',
      'icons',
      'images'
    )
);
