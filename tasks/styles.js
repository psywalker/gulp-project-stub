'use strict';

const gulp = require('gulp');
const postcss = require('gulp-postcss');

module.exports = () => () => (
  gulp.src('source/css/style.css')
    .pipe(postcss())
    .pipe(gulp.dest('build/css'))
);
