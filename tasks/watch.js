'use strict';

const path = require('path');
const gulp = require('gulp');
const cached = require('gulp-cached');
const remember = require('gulp-remember');

function forgetCach(filepath) {
  remember.forget('js', path.resolve(filepath));
  delete cached.caches.js[path.resolve(filepath)];
}

module.exports = function () {
  return function () {
    gulp.watch('source/*.html', gulp.series('pages'));
    gulp.watch('source/js/**/*.*', gulp.series('scripts')).on('unlink', forgetCach);
    gulp.watch('source/css/**/*.*', gulp.series('styles'));
    gulp.watch('source/assets/**/*.*', gulp.series('copy'));
  };
};
