'use strict';

const gulp = require('gulp');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const autoprefixer = require('autoprefixer');
const atImport = require("postcss-import");
const sourcemaps = require('gulp-sourcemaps');
const gulpIf = require('gulp-if');
const del = require('del');

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

gulp.task('clean', function() {
  return del('build');
});

gulp.task('assets', function() {
  return gulp.src('source/assets/**')
    .pipe(gulp.dest('build/assets'));
});

gulp.task('pages', function() {
  return gulp.src('source/*.html')
    .pipe(gulp.dest('build'));
});

gulp.task('build', gulp.series('clean', gulp.parallel('assets', 'pages', 'styles')));

gulp.watch('source/css/**/*.*', gulp.series('styles'));
