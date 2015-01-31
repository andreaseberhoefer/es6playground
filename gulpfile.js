var path = require('path');
var gulp = require('gulp');
var sequence = require('gulp-sequence');
var to5 = require('gulp-6to5');
var builder = require('systemjs-builder');
var jasmine = require('gulp-jasmine');
var clean = require('gulp-clean');


var PATHES = {
    src: 'src/**/*.js',
    spec: 'spec/**/*.spec.js',
    e5Target: 'target',
    e5Src: 'target/src',
    e5Spec: 'target/spec'
};

var TO5_CONFIG = {
    modules: 'system'
};

var SYSTEM_CONFIG = {
    mainFile: 'main',
    appFile: 'dist/app.js',
    appOptions: {
        //minify: true,
        //sourceMaps: true,
        config: {
            baseURL: path.resolve(PATHES.e5Src)
        }
    }
};

gulp.task('transpile', ['transpile:src', 'transpile:spec']);

gulp.task('transpile:src', function() {
    return gulp.src(PATHES.src)
        .pipe(to5())
        .pipe(gulp.dest(PATHES.e5Src));
});

gulp.task('transpile:spec', function() {
    return gulp.src(PATHES.spec)
        .pipe(to5())
        .pipe(gulp.dest(PATHES.e5Spec));
});

gulp.task('transpile:browser', function() {
    return gulp.src(PATHES.src)
        .pipe(to5(TO5_CONFIG))
        .pipe(gulp.dest(PATHES.e5Src));
});

gulp.task('bundle:app', function() {
    builder.buildSFX(SYSTEM_CONFIG.mainFile, SYSTEM_CONFIG.appFile, SYSTEM_CONFIG.appOptions).then(function() {
            console.log('Build complete');
        })
        .catch(function(err) {
            console.log('Build error');
            console.log(err);
        });
});

gulp.task('build', sequence('transpile:browser', 'bundle:app'));

gulp.task('test', ['transpile'], function() {
    return gulp.src('target/spec/**.spec.js')
        .pipe(jasmine());
});

gulp.task('clean', function() {
    return gulp.src(['target', 'dist'])
        .pipe(clean());
});
