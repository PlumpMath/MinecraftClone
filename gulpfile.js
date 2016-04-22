var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.watch("src/**/*.js", ['default']);
gulp.watch("src/**/*.html", ['default']);
gulp.watch("src/**/*.css", ['default']);

gulp.task('default', function() {
  gulp.src("src/index.html").pipe(gulp.dest("build"));
  gulp.src("src/styles/*.css").pipe(gulp.dest("build/styles"));
  return gulp.src("src/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("build/"));
});

gulp.task('start', ['build', 'watch'], function () {
    childProcess.spawn(electron, ['./build'], {
        stdio: 'inherit'
    })
    .on('close', function () {
        // User closed the app. Kill the host process.
        process.exit();
    });
});
