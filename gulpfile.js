'use strict';

const gulp = require('gulp');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const autoprefixer = require('autoprefixer');
const atImport = require("postcss-import");
const sourcemaps = require('gulp-sourcemaps');
const gulpIf = require('gulp-if');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

gulp.task('styles', function() {
  var plugins = [
    atImport(),
    autoprefixer()
  ];
  return gulp.src('source/css/style.post.css')
    .pipe(gulpIf(isDevelopment, sourcemaps.init()))
    .pipe(postcss(plugins))
    .pipe(rename('style.css'))
    .pipe(gulpIf(isDevelopment, sourcemaps.write()))
    .pipe(gulp.dest('build'));
});
