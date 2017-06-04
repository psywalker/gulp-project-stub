/* eslint-env node */

const gulp = require('gulp');
const postcss = require('gulp-postcss');

module.exports = () => (
  gulp.src('source/styles/*.css')
    .pipe(postcss())
    .pipe(gulp.dest('build/styles'))
);
