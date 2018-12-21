var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create();

gulp.task('previewDist', function(){
	browserSync.init({ //initialize local server
		notify: false,
		server: {
			baseDir: "docs"
		}
	});
});

gulp.task('deleteDistFolder',['icons'], function(){
	return del('./docs');
});

gulp.task('copyGeneralFiles', function(){
	var pathsToCopy = [
		'./app/**/*',
		'!./app/index.html',
		'!./app/assets/images/**',
		'!./app/assets/styles/**',
		'!./app/assets/scripts/**',
		'!./app/temp',
		'!./app/temp/**'
	]

	return gulp.src(pathsToCopy)
	.pipe(gulp.dest("./docs"));
});

gulp.task('optimizeImages', ['deleteDistFolder'], function(){
	return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
	.pipe(imagemin({
		progressive: true, //optimize jpeg
		interlaced: true, //opt gifs
		multipass: true, //svg
	}))
	.pipe(gulp.dest("./docs/assets/images"));
});

gulp.task('useminTrigger', ['deleteDistFolder'], function(){
	gulp.start('usemin');
})
// copy new css js
// compress
// revision
gulp.task('usemin',['styles', 'scripts'], function(){
	return gulp.src('./app/index.html')
	.pipe(usemin({
		css: [function(){return rev()}, function(){return cssnano()}],
		js: [function(){return rev()},function(){ return uglify()}]
	}))
	.pipe(gulp.dest('./docs'));
});

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles','optimizeImages', 'useminTrigger']);