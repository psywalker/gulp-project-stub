'use strict';

const path = require('path');
const gulp = require('gulp');
const rename = require('gulp-rename');
const cached = require('gulp-cached');
const remember = require('gulp-remember');
const svgstore = require('gulp-svgstore');
const svgmin = require('gulp-svgmin');

module.exports = function () {
  return function () {
    return gulp.src('source/raw/icons/**/*.svg')
      .pipe(cached('icons'))
      .pipe(rename(function (file) {
        let name = file.dirname.split(path.sep);
        name.push(file.basename);
        file.basename = name.join('-');
      }))
      .pipe(svgmin({
        // js2svg: {
        //   pretty: true
        // }
      }))
      .pipe(remember('icons'))
      .pipe(svgstore({
        // inlineSvg: true
      }))
      .pipe(gulp.dest('source/assets/icons'));
  };
};
