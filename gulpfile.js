var gulp        =   require('gulp'),
	rjs         =   require('gulp-requirejs'),
	maps        =   require('gulp-sourcemaps'),
	path       	=   {
						dev: 'dev/',
						dest: 'dest/'
					};


gulp.task("r",function(){
	gulp
		.src(path.dev+"js/config.js")
		.pipe(gulp.dest(path.dest+"js/"));

	gulp
		.src(path.dev+"js/lib/*.js")
		.pipe(gulp.dest(path.dest+"js/lib/"));

	rjs({
		name:'app/main',
		baseUrl:"dev/js/lib/",
		paths:{
			app  :  "../app"
		},
		mainConfigFile:path.dev+"js/config.js",
		out:"main.js",
		generateSourceMaps: true,
		optimize:false
	})
	.pipe(maps.init({loadMaps: true}))
	.pipe(maps.write(''))
	.pipe(gulp.dest(path.dest+'js/app/'));

});