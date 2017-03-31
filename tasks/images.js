'use strict';

const gulp = require('gulp');
const cached = require('gulp-cached');
const remember = require('gulp-remember');
const image = require('gulp-image');

module.exports = function () {
  return function () {
    return gulp.src('source/raw/img/**/*.*')
      .pipe(cached('images'))
      .pipe(image({
        mozjpeg: false,
        jpegoptim: false,
        jpegRecompress: true
      }))
      .pipe(remember('images'))
      .pipe(gulp.dest('source/assets/img'));
  };
};
