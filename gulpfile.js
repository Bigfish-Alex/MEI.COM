// 引入 gulp
var gulp = require('gulp'); 

// 引入组件
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var connect = require('gulp-connect');

// 检查脚本
//gulp.task('lint', function() {
//    gulp.src('libs/js/*.js')
//        .pipe(jshint())
//        .pipe(jshint.reporter('default'));
//});

// 编译Sass
//gulp.task('sass', function() {
//    gulp.src('libs/scss/*.scss')
//        .pipe(sass())
//        .pipe(gulp.dest('libs/css'));
//});

//// 合并，压缩文件
//gulp.task('scripts', function() {
//    gulp.src('libs/js/*.js')
//        .pipe(concat('all.js'))
//        .pipe(gulp.dest('libs/dist'))
//        .pipe(rename('all.min.js'))
//        .pipe(uglify())
//        .pipe(gulp.dest('libs/dist'));
//});

//创建watch任务去检测html文件,其定义了当html改动之后，去调用一个Gulp的Task
gulp.task('watch', function () {
    gulp.watch(['*.html'], ['html']);
    gulp.watch(['libs/js/*.js'], ['html']);
    gulp.watch(['libs/css/*.css'], ['html']);
});

//使用connect启动一个Web服务器
gulp.task('connect', function () {
    connect.server({
        root: '',
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('*.html')
      .pipe(connect.reload());
});

// 默认任务
gulp.task('default', function(){
    gulp.run('watch', 'connect');

    // 监听文件变化
    //gulp.watch('libs/js/*.js', function(){
    //    gulp.run('scripts');
    //    gulp.run('html');
    //});

    //gulp.watch('libs/scss/*.scss', function(){
    //    gulp.run('sass');
    //    gulp.run('html');
    //})
});