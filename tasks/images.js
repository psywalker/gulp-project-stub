'use strict';

const gulp = require('gulp');
const newer = require('gulp-newer');
const image = require('gulp-image');

module.exports = function () {
  return function () {
    return gulp.src('source/raw/img/**/*.*')
      .pipe(newer('source/assets/img'))
      .pipe(image({
        mozjpeg: false,
        jpegoptim: false,
        jpegRecompress: true
      }))
      .pipe(gulp.dest('source/assets/img'));
  };
};
