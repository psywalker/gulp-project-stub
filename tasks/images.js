'use strict';

const gulp = require('gulp');
const cached = require('gulp-cached');
const remember = require('gulp-remember');
const image = require('gulp-image');

module.exports = function () {
  return function () {
    return gulp.src('source/raw/img/**/*.{png,jpg,gif,svg}')
      .pipe(cached('images'))
      .pipe(image())
      .pipe(remember('images'))
      .pipe(gulp.dest('source/assets/img'));
  };
};
