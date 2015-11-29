'use strict';

var postcss = require('gulp-postcss'),
    gulp = require('gulp'),
    autoprefixer = require('autoprefixer'),
    livereload = require('gulp-livereload'),
    postnesting = require('postcss-nesting'),
    cssnext = require('gulp-cssnext'),
    babel = require('gulp-babel'),
    lost = require('lost'),
    util = require('gulp-util');

var paths = {
    cssSource: './src/css/*.css',
    cssDestination: './dist/css',
    jsSource: '/src/js',
    jsDestination: 'dist/js'
};


gulp.task('css', function () {
    var processors = [
        lost(),
        autoprefixer({browsers: ['last 1 version']}),
        postnesting({ /* options */})
    ];

    return gulp.src(paths.cssSource)
        .pipe(postcss(processors))
        .pipe(cssnext({ /* options */}))
        .pipe(gulp.dest(paths.cssDestination))
        .pipe(livereload());

});

gulp.task('js', function() {
    return gulp.src(paths.jsSource)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(paths.jsDestination))
});


gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(paths.cssSource,  ['css']);
});