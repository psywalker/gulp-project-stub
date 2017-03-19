'use strict';

const gulp = require('gulp');

function runTaskLazy(taskName, pathToTask) {
  function requireTask(callback) {
    return require(pathToTask)()(callback);
  }
  gulp.task(taskName, requireTask);
}

runTaskLazy('pages', './tasks/pages');
runTaskLazy('styles', './tasks/styles');
runTaskLazy('scripts', './tasks/scripts');
runTaskLazy('assets', './tasks/assets');
runTaskLazy('clean', './tasks/clean');
runTaskLazy('build', './tasks/build');
runTaskLazy('watch', './tasks/watch');
runTaskLazy('serve', './tasks/serve');
runTaskLazy('dev', './tasks/dev');
