var sass = require('gulp-sass');
var gulp = require('gulp');
var del = require('del');
var autoprefixer = require('gulp-autoprefixer');

//创建一个删除文件夹任务
gulp.task('del', function () {
    del.sync(['./css']);
});

// 创建sass转css任务
gulp.task('sass',function(){
    // 这个任务负责把scss文件转成css
    return gulp.src('./sass/**/*.scss')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false,
        }))
        .pipe(sass.sync({outputStyle: 'compact'}).on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

// 创建监听任务watch
gulp.task('watch',function(){
    // 监听sass文件夹下所有.scss文件的变化，变化了就重新执行sass转css任务
    gulp.watch('./sass/**/*.scss',['sass']);
});

// 创建default任务 运行这个任务的时候执行sass任务和watch任务
gulp.task('default', ['del','sass','watch']);

