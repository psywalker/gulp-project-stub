'use strict';

const gulp = require('gulp');

const runTaskLazy = (taskName) => {
  gulp.task(taskName, (callback) => require('./tasks/' + taskName)()(callback));
};

runTaskLazy('fonts');
runTaskLazy('icons');
runTaskLazy('images');
runTaskLazy('assets');
runTaskLazy('pages');
runTaskLazy('styles');
runTaskLazy('scripts');
runTaskLazy('copy');
runTaskLazy('clean');
runTaskLazy('build');
runTaskLazy('watch');
runTaskLazy('serve');
runTaskLazy('dev');
runTaskLazy('github');
runTaskLazy('deploy');
