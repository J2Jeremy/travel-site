//tell gulp to take icons and merge them into one file
var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename'),
del = require('del');

//svgSprite pkg wants variables declared in obj literal 
var config = {
	mode: {
		css: {
			sprite: 'sprite.svg',
			render:{
				css:{
					template: './gulp/templates/sprite.css'
				}
			}
		}
	}
}

gulp.task('beginClean', function(){
	return del(['./app/temp/sprite', './app/assets/images/sprites']);
});

//use gulp.src to pipeline, always use return 
// add clean dependency to make sure we remove old files before creating new
gulp.task('createSprite', ['beginClean'], function(){
	return gulp.src('./app/assets/images/icons/**/*.svg')
		.pipe(svgSprite(config))
		.pipe(gulp.dest('./app/temp/sprite/'));
});

/* move image to our centeralized images folder */
gulp.task('copySpriteGraphic', ['createSprite'], function(){
	return gulp.src('./app/temp/sprite/css/**/*.svg')
		.pipe(gulp.dest('./app/assets/images/sprites'));
});

/* dependency added to ensure createSprite runs first
move file from temp to our main styles folder */
gulp.task('copySpriteCSS', ['createSprite'], function(){
	return gulp.src('./app/temp/sprite/css/*.css')
		.pipe(rename('_sprite.css'))
		.pipe(gulp.dest('./app/assets/styles/modules'));
});

//remove the entire temp folder since we have redirect(copied) their contents
gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], function(){
	return del('./app/temp/sprite');
});
 /* runs all tasks, but they will run at same time, add dependency to copySpriteCSS */
 //remove old files, compile icons into sprite, copy graphic to new loc, copy css to new loc, remove temp dir
gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'endClean']);

