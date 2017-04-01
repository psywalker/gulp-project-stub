'use strict';

const del = require('del');
const gulp = require('gulp');

module.exports = function () {
  process.env.NODE_ENV = 'production';
  return gulp.series('build', 'github', () => del(['.publish']));
};
