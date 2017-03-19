'use strict';

const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const remember = require('gulp-remember');
const gulpIf = require('gulp-if');
const concat = require('gulp-concat');
const cached = require('gulp-cached');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = function () {
  return function () {
    return gulp.src('source/js/**')
      .pipe(cached('js'))
      .pipe(gulpIf(isDevelopment, sourcemaps.init()))
      .pipe(remember('js'))
      .pipe(concat('main.js'))
      .pipe(gulpIf(isDevelopment, sourcemaps.write()))
      .pipe(gulp.dest('build/js'));
  };
};
