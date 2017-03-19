'use strict';

const gulp = require('gulp');
const postcss = require('gulp-postcss');
const atImport = require('postcss-import');
const browserReporter = require('postcss-browser-reporter');
const reporter = require('postcss-reporter');
const autoprefixer = require('autoprefixer');
const stylelint = require('stylelint');
const mqpacker = require('css-mqpacker');
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
        mqpacker({
          sort: true
        }),
        csso(),
        browserReporter(),
        reporter({clearReportedMessages: true})
      ], {map: isDevelopment}
      ))
      .pipe(gulp.dest('build/css'));
  };
};
