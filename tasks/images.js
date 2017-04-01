'use strict';

const gulp = require('gulp');
const newer = require('gulp-newer');
const image = require('gulp-image');

module.exports = () => () => (
  gulp.src('source/raw/images/**/*.*')
    .pipe(newer('source/assets/images'))
    .pipe(image({
      mozjpeg: false,
      jpegoptim: false,
      jpegRecompress: true
    }))
    .pipe(gulp.dest('source/assets/images'))
);
