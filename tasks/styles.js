'use strict';

const gulp = require('gulp');
// const notify = require('gulp-notify');
// const plumber = require('gulp-plumber');
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
      ], {map: isDevelopment}))
      .pipe(gulp.dest('build/css'));
  };
};
