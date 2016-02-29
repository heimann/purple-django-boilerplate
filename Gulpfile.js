var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('purple_base/assets/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('purple_base/assets/css/'));
});

gulp.task('watch', function() {
    gulp.watch('purple_base/assets/sass/main.scss',['styles']);
})

//Watch task
gulp.task('default', ['styles', 'watch']);

// gulp.task('default',function() {
//     gulp.watch('purple_base/assets/sass/main.scss',['styles']);
// });
