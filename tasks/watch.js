'use strict';

const path = require('path');
const gulp = require('gulp');
const cached = require('gulp-cached');
const remember = require('gulp-remember');

module.exports = function () {
  return function () {
    gulp.watch('source/*.html', gulp.series('pages'));
    gulp.watch('source/raw/fonts/*.*', gulp.series('fonts'));
    gulp.watch('source/raw/img/*.*', gulp.series('images'));
    gulp.watch('source/raw/icons/*.*', gulp.series('icons')).on('unlink', function (filepath) {
      remember.forget('icons', path.resolve(filepath));
      delete cached.caches.icons[path.resolve(filepath)];
    });
    gulp.watch('source/js/**/*.*', gulp.series('scripts')).on('unlink', function (filepath) {
      remember.forget('js', path.resolve(filepath));
      delete cached.caches.js[path.resolve(filepath)];
    });
    gulp.watch('source/css/**/*.*', gulp.series('styles'));
    gulp.watch('source/assets/**/*.*', gulp.series('copy'));
  };
};
