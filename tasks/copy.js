'use strict';

const gulp = require('gulp');
const newer = require('gulp-newer');

module.exports = () => () => (
  gulp.src('source/assets/**/*.*', {since: gulp.lastRun('copy')})
      .pipe(newer('build'))
      .pipe(gulp.dest('build/assets'))
);
