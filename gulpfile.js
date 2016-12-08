var gulp = require('gulp'),
    rjs  = require('gulp-requirejs');
  
// rjs
gulp.task('r', function () {  

    gulp
        .src('dev/js/config.js')
        .pipe(gulp.dest('dest/js'));
    gulp
        .src('dev/js/lib/*.js')
        .pipe(gulp.dest('dest/js/lib/'));
    rjs({
        name: 'app/main',  // 要处理的入口文件，名字和out 要保持一致
        baseUrl: 'dev/js/lib/',
        paths: {
            app    : "../app/"
        },
        mainConfigFile:'dev/js/config.js',
        out: 'main.js', // 输出的文件
        optimize:false
    })
   .pipe(gulp.dest('dest/js/app/'));
}); 