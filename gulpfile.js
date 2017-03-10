'use strict';

const gulp = require('gulp');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const autoprefixer = require('autoprefixer');
const atImport = require("postcss-import");

gulp.task('styles', function() {
  var plugins = [
    atImport(),
    autoprefixer()
  ];
  return gulp.src('source/css/style.post.css')
    .pipe(postcss(plugins))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('build'));
});
