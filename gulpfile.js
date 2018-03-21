var sass = require('gulp-sass');
var gulp = require('gulp');

gulp.task('default', function() {
    // 将你的默认的任务代码放在这
    return gulp.src('./sass/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});