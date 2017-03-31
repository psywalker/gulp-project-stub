'use strict';

const del = require('del');
const gulp = require('gulp');

module.exports = function () {
  return gulp.series(() => del(['source/assets']), gulp.parallel('fonts', 'icons', 'images'));
};
