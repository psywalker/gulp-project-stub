'use strict';

const gulp = require('gulp');

module.exports = function () {
  return gulp.series('clean', 'assets', gulp.parallel('copy', 'pages', 'styles', 'scripts'));
};
