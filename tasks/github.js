/* eslint-env node */

const gulp = require('gulp');
const ghPages = require('gulp-gh-pages');

module.exports = () => (
  gulp.src('build/**/*')
  .pipe(ghPages())
);
