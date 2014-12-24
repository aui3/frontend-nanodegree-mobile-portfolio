var gulp=require ('gulp'),
    uglify=require ('gulp-uglify'),
    minifycss=require('gulp-minify-css'),
    livereload= require('gulp-livereload'),
    imagemin=require('gulp-imagemin');

//Scripts Task
//Uglifies Javascript files
gulp.task('scripts',function(){
	gulp.src('js/*.js').on('error', errorHandler)//load files
	.pipe(uglify())//uglify them
	.pipe(gulp.dest('build/js'))//save in minjs*/
});

//Styles Task
//Minifies css files
gulp.task('styles',function(){
	gulp.src('css/*.css').on('error', errorHandler)//load files
	.pipe(minifycss())//uglify them
	.pipe(gulp.dest('mincss/css'))
	.pipe(livereload());//save in minjs*/
});
//Images Task
//Compress
gulp.task('image',function(){
	gulp.src('img/*.jpg').on('error', errorHandler)//load files
	.pipe(imagemin())//uglify them
	.pipe(gulp.dest('minimg'));
	
});

gulp.task('watch',function(){
	
	var server=livereload();

	gulp.watch('js/*.js',['scripts']);
	gulp.watch('css/*.css',['styles']);
});


gulp.task('default', ['scripts','styles','watch']);

// Handle the error
function errorHandler (error) {
  console.log(error.toString());
  this.emit('end');
}