'use strict';

const gulp = require('gulp');

module.exports = function () {
  return gulp.series('clean', gulp.parallel('copy', 'pages', 'styles', 'scripts'));
};
