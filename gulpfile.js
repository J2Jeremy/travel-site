var gulp = require('gulp'), 
watch = require('gulp-watch'), //trigger
postcss = require('gulp-postcss'), //call postcss pkg
autoprefixer = require('autoprefixer'), //call autoprefixer for -moz etc
cssvars = require('postcss-simple-vars'), //allows variables
nested = require('postcss-nested'), //allows nested css
cssImport = require('postcss-import'); //imports our modules to one css file for browser

gulp.task('default', function(){ console.log("Gulp task created"); });
gulp.task('html', function(){ console.log("Imagine something useful being done to your HTML here."); });

gulp.task('styles', function(){
	// one pipe, src to dest
	//another pipe to apply post css filters, first install with NPM, npm install gulp-postcss --save-dev
	//add autoprefixer in postcss params using NPM, add css vars from NPM 
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
	.pipe(gulp.dest('./app/temp/styles')); 
});

gulp.task('watch', function(){
	watch('./app/index.html', function(){
		gulp.start('html');
	});
	//** = any future folders * = any file with .css extension
	watch('./app/assets/styles/**/*.css', function(){ 
		gulp.start('styles');
	});
});

