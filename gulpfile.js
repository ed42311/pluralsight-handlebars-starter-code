var gulp = require('gulp'),
    debug = require('gulp-debug'),
    watch = require('./gulp/watch'),
    templates = require('./gulp/templates');
  
gulp.task('watch', watch);
gulp.task('templates', templates);
 
gulp.task('debug', function () {
  return gulp.src('templates.js')
    .pipe(debug({title: 'unicorn:'}))
    .pipe(gulp.dest('dist'));
});