'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', function() {
  gulp.src('sass/style.scss')
  .pipe(sass())
  .pipe(gulp.dest('./'));
});

gulp.task('concatjs', function() {
  return gulp.src('js/**/*.js')
    .pipe(concat('script.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['sass', 'concatjs'], function() {});