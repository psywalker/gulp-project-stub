/* eslint-env node */

const gulp = require('gulp');
const zip = require('gulp-zip');

const correctNumber = number => (number < 10 ? `0${number}` : number);

const getDateTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = correctNumber(now.getMonth() + 1);
  const day = correctNumber(now.getDate());
  const hours = correctNumber(now.getHours());
  const minutes = correctNumber(now.getMinutes());

  return `${year}-${month}-${day}_${hours}.${minutes}`;
};

module.exports = () => {
  const datetime = getDateTime();
  const zipName = `build-${datetime}.zip`;

  return gulp.src('build/**/*.*')
    .pipe(zip(zipName))
    .pipe(gulp.dest('raw/archives'));
};
