var gulp=require ('gulp'),
    uglify=require ('gulp-uglify'),
    minifycss=require('gulp-minify-css'),
    del=require('del'),
    concat=require('gulp-concat'),
    //livereload= require('gulp-livereload'),
    imagemin=require('gulp-imagemin'),
    clean = require('gulp-rimraf'),
    rename=require('gulp-rename'),
    imageoptim=require('gulp-image-optimization'),
    minifyHTML=require('gulp-minify-html'),
    uncss = require('gulp-uncss'),
    inlineCss = require('gulp-inline-css');


var bases ={
	app: 'app/', //working directory	
	dist: 'dist/'//production directory
};


var paths = {
	scripts: ['**/*.js','!node_modules/**','!gulpfile.js'],
	styles: [ '**/*.css', '!views/css/bootstrap-grid-old.css','!node_modules/**'],
	html: ['*.html', '**/*.html','!node_modules/**'],
	images: ['**/*.jpg','**/*.png','!node_modules/**']
	//images: ['img/*.jpg']
};


//Minify HTML Task
gulp.task('minify-html' ,['clean'], function() {
    var opts = {comments:true,spare:true};

  gulp.src(paths.html)
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest(bases.dist))
});

//Image Optimization Task
//optimizes images
gulp.task('images',['clean'], function(cb) {
    gulp.src(paths.images).pipe(imageoptim({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest(bases.dist)).on('end', cb).on('error', cb);
});

//Clean Task
//deletes dist directory
gulp.task('clean',function (cb){
	
     del(['dist/**'], cb);

});

//Scripts Task
//Uglifies Javascript files
gulp.task('scripts',['clean'], function(){
	gulp.src(paths.scripts).on('error', errorHandler)//load files
	.pipe(uglify())//uglify them
	.pipe(gulp.dest(bases.dist));//save in minjs
});

//Styles Task
//Minifies all css
gulp.task('styles',['clean'],function(){
	gulp.src(paths.styles).on('error', errorHandler)//load files
	.pipe(minifycss({keepSpecialComments:0}))//remove all comments
	.pipe(gulp.dest(bases.dist))
	
});

//UNCSS Task
//First rename bootstrap-grid.css to bootstrap-grid-old.css
//Now uncss it to bootstrap-grid.css, now file ready to be minifies
//minify it and next inline it 


gulp.task('uncss', function() {
   
   	//rename to old
	gulp.src('views/css/bootstrap-grid.css')
    .pipe(rename('views/css/bootstrap-grid-old.css'))
    .pipe(gulp.dest('./')); 


    gulp.src('views/css/bootstrap-grid-old.css')
        .pipe(uncss({
            //html: ['index.html','project-2048.html','project-mobile.html','project-webperf.html']
        	html: ['views/pizza.html']
        }))
        .pipe(gulp.dest('views/css/'));

    //rename back
	gulp.src('views/css/bootstrap-grid-old.css')
    .pipe(rename('views/css/bootstrap-grid.css'))
    .pipe(gulp.dest('./'));    

});

//UNCSS Task
//First rename bootstrap-grid.css to bootstrap-grid-old.css
//Now uncss it to bootstrap-grid.css, now file ready to be minifies
//minify it and next inline it 


gulp.task('uncssone', function() {
   
    //rename to old
    //gulp.src('css/style.css')
    //.pipe(rename('css/style-old.css'))
    //.pipe(gulp.dest('./')); 


    gulp.src('css/style.css')
        .pipe(uncss({
            //html: ['index.html','project-2048.html','project-mobile.html','project-webperf.html']
            html: ['index.html']
        }))
        .pipe(gulp.dest('css/uncssStyle'));

    //rename back
    //gulp.src('views/css/style-old.css')
    //.pipe(rename('views/css/bootstrap-grid.css'))
    //.pipe(gulp.dest('./'));    

});

//INLINE CSS TASK
gulp.task('inlineCss', function() {
    return gulp.src('views/pizza.html')
        .pipe(inlineCss())
        .pipe(gulp.dest('build/'));
});

gulp.task('watch',function(){
	
	//var server=livereload();

	gulp.watch('js/*.js',['scripts']);
	gulp.watch('css/*.css',['styles']);
});


gulp.task('default',['scripts','styles','images','minify-html']);
	//gulp.task('default',['minify-html']);

// Handle the error
function errorHandler (error) {
  console.log(error.toString());
  this.emit('end');
}