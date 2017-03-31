'use strict';

const gulp = require('gulp');
const cached = require('gulp-cached');
const remember = require('gulp-remember');
const imagemin = require('gulp-imagemin');

module.exports = function () {
  return function () {
    return gulp.src('source/raw/img/**/*.{png,jpg,gif,svg}')
      .pipe(cached('images'))
      .pipe(imagemin([
        imagemin.optipng({optimizationLevel: 3}),
        imagemin.jpegtran({progressive: true}),
        imagemin.gifsicle({interlaced: true}),
        imagemin.svgo({
          // js2svg: {
          //   pretty: true
          // },
          plugins: [{
            removeViewBox: true
          }]
        })
      ], {
        verbose: true
      }
      ))
      .pipe(remember('images'))
      .pipe(gulp.dest('source/assets/img'));
  };
};
