'use strict';

const gulp = require('gulp');

module.exports = function () {
  return gulp.parallel('fonts', 'icons', 'images');
};
