'use strict';

const gulp = require('gulp');

module.exports = function () {
  process.env.NODE_ENV = 'production';
  return gulp.series('build', 'github', 'clean');
};
