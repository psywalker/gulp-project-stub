/* eslint-env node */

const del = require('del');
const gulp = require('gulp');

process.env.NODE_ENV = 'production';

module.exports = gulp.series(
  'build',
  'github',
  () => del(['.publish'])
);
