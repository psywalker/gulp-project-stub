'use strict';

const gulp = require('gulp');
const newer = require('gulp-newer');

module.exports = function () {
  return function () {
    return gulp.src('source/*.html', {since: gulp.lastRun('pages')})
      .pipe(newer('build'))
      .pipe(gulp.dest('build'));
  };
};
