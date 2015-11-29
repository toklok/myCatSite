'use strict';

var postcss = require('gulp-postcss');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var livereload = require('gulp-livereload');
var postnesting = require('postcss-nesting');
var cssnext = require('gulp-cssnext');
var babel = require('gulp-babel');

gulp.task('css', function () {
    var processors = [
        autoprefixer({browsers: ['last 1 version']}),
        postnesting({ /* options */})
    ];

    return gulp.src('./src/css/*.css')
        .pipe(postcss(processors))
        .pipe(cssnext({ /* options */}))
        .pipe(gulp.dest('./dist/css'))
        .pipe(livereload());

});

gulp.task('js', function() {
    return gulp.src('src/js/app.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist/js'))
});


gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('./*.css', ['css']);
});