/* eslint-env node */

const gulp = require('gulp');

module.exports = gulp.series(
  'clean',
  gulp.parallel(
    'fonts',
    'icons',
    'images',
    'pages',
    'styles',
    'scripts'
  )
);
