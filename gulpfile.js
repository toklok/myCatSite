'use strict';

var postcss = require('gulp-postcss');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var livereload = require('gulp-livereload');
var postnesting = require('postcss-nesting');
var cssnext = require('gulp-cssnext');

gulp.task('css', function () {
    var processors = [
        autoprefixer({browsers: ['last 1 version']}),
        postnesting({ /* options */})
    ];

    return gulp.src('./*.css')
        .pipe(postcss(processors))
        .pipe(cssnext({ /* options */}))
        .pipe(gulp.dest('./css'))
        .pipe(livereload());

});


gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('./*.css', ['css']);
});