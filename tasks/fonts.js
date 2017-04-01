'use strict';

const gulp = require('gulp');
const gulpIf = require('gulp-if');
const newer = require('gulp-newer');
const ttf2woff2 = require('gulp-ttf2woff2');

module.exports = () => () => (
  gulp.src('source/raw/fonts/*.{ttf,woff2}', {since: gulp.lastRun('fonts')})
      .pipe(newer('source/assets/fonts', '.woff2'))
      .pipe(gulpIf((file) => file.extname === '.ttf', ttf2woff2()))
      .pipe(gulp.dest('source/assets/fonts'))
);
