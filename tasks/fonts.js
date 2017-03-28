'use strict';

const gulp = require('gulp');
const gulpIf = require('gulp-if');
const cached = require('gulp-cached');
const remember = require('gulp-remember');
const ttf2woff2 = require('gulp-ttf2woff2');

module.exports = function () {
  return function () {
    return gulp.src('source/raw/fonts/*.{ttf,woff2}')
      .pipe(cached('fonts'))
      .pipe(gulpIf((file) => file.extname === '.ttf', ttf2woff2()))
      .pipe(remember('fonts'))
      .pipe(gulp.dest('source/assets/fonts'));
  };
};
