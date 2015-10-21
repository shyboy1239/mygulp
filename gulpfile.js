var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var less = require('gulp-less');
var concatcss = require('gulp-concat-css');

gulp.task('minicss',function() {
    return gulp.src('concat/*.css')
    .pipe(minifycss())
    .pipe(gulp.dest('css'));
});

gulp.task('lesscss',function(){
	return gulp.src('less/*.less')
	.pipe(less())
	.pipe(gulp.dest('styles'));
});

gulp.task('concatcss',function(){
	return gulp.src('styles/*.css')
	.pipe(concatcss('main.css'))
	.pipe(gulp.dest('concat'));
})

gulp.task('default',['lesscss','minicss']);

gulp.task('csswatch',function(){
	gulp.watch('less/*.less',['lesscss']);
});