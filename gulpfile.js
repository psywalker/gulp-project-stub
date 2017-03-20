'use strict';

const gulp = require('gulp');

function runTaskLazy(taskName) {
  gulp.task(taskName, (callback) => require('./tasks/' + taskName)()(callback));
}

runTaskLazy('pages');
runTaskLazy('styles');
runTaskLazy('scripts');
runTaskLazy('assets');
runTaskLazy('clean');
runTaskLazy('build');
runTaskLazy('watch');
runTaskLazy('serve');
runTaskLazy('dev');
runTaskLazy('deploy');
