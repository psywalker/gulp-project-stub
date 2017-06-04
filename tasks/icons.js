/* eslint-env node */

const path = require('path');
const gulp = require('gulp');
const rename = require('gulp-rename');
const cached = require('gulp-cached');
const remember = require('gulp-remember');
const svgstore = require('gulp-svgstore');
const svgmin = require('gulp-svgmin');

module.exports = () => (
  gulp.src('source/assets/icons/**/*.svg')
    .pipe(cached('icons'))
    .pipe(rename((file) => {
      const link = file;
      const name = link.dirname.split(path.sep);
      name.push(file.basename);
      link.basename = name.join('-');
    }))
    .pipe(svgmin({
      js2svg: {
        pretty: true
      }
    }))
    .pipe(remember('icons'))
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(gulp.dest('build/assets/icons'))
);
