'use strict';

const browserSync = require('browser-sync').create();
const del = require('del');
const path = require('path');
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const remember = require('gulp-remember');
const rename = require('gulp-rename');
const gulpIf = require('gulp-if');
const newer = require('gulp-newer');
const concat = require('gulp-concat');
const cached = require('gulp-cached');
const postcss = require('gulp-postcss');
const atImport = require('postcss-import');
const autoprefixer = require('autoprefixer');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

gulp.task('styles', function () {
  let plugins = [
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

gulp.task('scripts', function () {
  return gulp.src('source/js/**')
    .pipe(cached('js'))
    .pipe(gulpIf(isDevelopment, sourcemaps.init()))
    .pipe(remember('js'))
    .pipe(concat('main.js'))
    .pipe(gulpIf(isDevelopment, sourcemaps.write()))
    .pipe(gulp.dest('build/js'));
});

gulp.task('clean', function () {
  return del('build');
});

gulp.task('assets', function () {
  return gulp.src('source/assets/**', {since: gulp.lastRun('assets')})
    .pipe(newer('build'))
    .pipe(gulp.dest('build/assets'));
});

gulp.task('pages', function () {
  return gulp.src('source/*.html')
    .pipe(gulp.dest('build'));
});

gulp.task('build', gulp.series('clean', gulp.parallel('assets', 'pages', 'styles', 'scripts')));

function forgetCach(filepath) {
  remember.forget('js', path.resolve(filepath));
  delete cached.caches.js[path.resolve(filepath)];
}

gulp.task('watch', function () {
  gulp.watch('source/*.html', gulp.series('pages'));
  gulp.watch('source/js/**/*.*', gulp.series('scripts')).on('unlink', forgetCach);
  gulp.watch('source/css/**/*.*', gulp.series('styles'));
  gulp.watch('source/assets/**/*.*', gulp.series('assets'));
});

gulp.task('serve', function () {
  browserSync.init({
    server: 'build'
  });
  browserSync.watch('build/**/*.*').on('change', browserSync.reload);
});

gulp.task('dev', gulp.series('build', gulp.parallel('watch', 'serve')));
