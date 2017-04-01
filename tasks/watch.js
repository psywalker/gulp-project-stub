'use strict';

const path = require('path');
const gulp = require('gulp');
const cached = require('gulp-cached');
const remember = require('gulp-remember');

module.exports = () => () => {
  gulp.watch('source/*.html', gulp.series('pages'));
  gulp.watch('source/raw/fonts/*.*', gulp.series('fonts'));
  gulp.watch('source/raw/images/*.*', gulp.series('images'));
  gulp.watch('source/raw/icons/*.*', gulp.series('icons')).on('unlink', (filepath) => {
    remember.forget('icons', path.resolve(filepath));
    delete cached.caches.icons[path.resolve(filepath)];
  });
  gulp.watch('source/scripts/**/*.*', gulp.series('scripts')).on('unlink', (filepath) => {
    remember.forget('scripts', path.resolve(filepath));
    delete cached.caches.scripts[path.resolve(filepath)];
  });
  gulp.watch('source/styles/**/*.*', gulp.series('styles'));
  gulp.watch('source/assets/**/*.*', gulp.series('copy'));
};
