var gulp = require('gulp'), 
watch = require('gulp-watch'), //trigger
browserSync = require('browser-sync').create(); //auto refresh when we save changes

gulp.task('watch', function(){

	browserSync.init({ //initialize local server
		notify: false,
		server: {
			baseDir: "app"
		}
	});
	
	watch('./app/index.html', function(){ 
		browserSync.reload();
	});
	//** = any future folders * = any file with .css extension
	watch('./app/assets/styles/**/*.css', function(){ 
		gulp.start('cssInject');
	});

	watch('./app/assets/scripts/**/*.js', function(){
		gulp.start('scriptsRefresh');
	})
});

//async updates the browser with css
gulp.task('cssInject', ['styles'], function(){
	return gulp.src('./app/temp/styles/styles.css')
	.pipe(browserSync.stream()); 
});

gulp.task('scriptsRefresh', ['scripts'], function(){
	browserSync.reload();
})