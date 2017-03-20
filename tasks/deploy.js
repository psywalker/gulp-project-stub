'use strict';

const gulp = require('gulp');
const ghPages = require('gulp-gh-pages');

module.exports = function () {
  return function () {
    return gulp.src('build/**/*').pipe(ghPages());
  };
};
