'use strict';

const gulp = require('gulp');
const gulpIf = require('gulp-if');
// const notify = require('gulp-notify');
// const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const atImport = require('postcss-import');
const reporter = require('postcss-browser-reporter');
const autoprefixer = require('autoprefixer');
const stylelint = require('stylelint');
const csso = require('postcss-csso');
const url = require('postcss-url');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = function () {
  return function () {
    return gulp.src('source/css/style.css')
      .pipe(gulpIf(isDevelopment, sourcemaps.init()))
      .pipe(postcss([
        atImport({
          plugins: [
            stylelint()
          ]
        }),
        url(),
        autoprefixer(),
        csso(),
        reporter()
      ]))
      .pipe(gulpIf(isDevelopment, sourcemaps.write()))
      .pipe(gulp.dest('build/css'));
  };
};
