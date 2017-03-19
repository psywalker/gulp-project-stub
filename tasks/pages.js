'use strict';

const gulp = require('gulp');

module.exports = function () {
  return function () {
    return gulp.src('source/*.html')
      .pipe(gulp.dest('build'));
  };
};
