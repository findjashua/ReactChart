var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    react = require('gulp-react'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    sourcemaps = require('gulp-sourcemaps')

gulp.task('copy-html', function() {
    return gulp.src('./source/html/**')
    .pipe(gulp.dest('./build/html/'))
})

gulp.task('copy-css', function() {
    return gulp.src('./source/css/**')
    .pipe(gulp.dest('./build/css/'))
})

gulp.task('jsx', function() {
    return gulp.src('./source/javascript/**')
    .pipe(sourcemaps.init())
    .pipe(react())
    .pipe(gulp.dest('./build/javascript'))
})

gulp.task('bundle', ['jsx'], function() {
    return browserify('./build/javascript/main.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/javascript/'))
})

gulp.task('default', function() {
    gulp.start(['copy-html', 'copy-css', 'jsx', 'bundle'])
})



