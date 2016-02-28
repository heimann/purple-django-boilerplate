var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('purple_base/assets/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('.purple_base/assets/css/'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('purple_base/assets/sass/**/*.scss',['styles']);
});
