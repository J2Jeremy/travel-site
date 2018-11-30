var gulp = require('gulp'), 
postcss = require('gulp-postcss'), //call postcss pkg
autoprefixer = require('autoprefixer'), //call autoprefixer for -moz etc
cssvars = require('postcss-simple-vars'), //allows variables
nested = require('postcss-nested'), //allows nested css
cssImport = require('postcss-import');//imports our modules to one css file for browser 

gulp.task('styles', function(){
	// one pipe, src to dest
	//another pipe to apply post css filters, npm install gulp-postcss --save-dev
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssImport, cssvars, nested, autoprefixer])) //install these and create vars
	.pipe(gulp.dest('./app/temp/styles')); 
});