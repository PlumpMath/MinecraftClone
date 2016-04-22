var gulp = require('gulp');
var babel = require('gulp-babel');
var childProcess = require('child_process');

gulp.task('watch', function() {
  gulp.watch("src/**/*.js", ['build']);
  gulp.watch("src/**/*.html", ['build']);
  gulp.watch("src/**/*.css", ['build']);
});

gulp.task('build', function() {
  gulp.src("src/index.html").pipe(gulp.dest("build"));
  gulp.src("src/styles/*.css").pipe(gulp.dest("build/styles"));
  return gulp.src("src/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("build/"));
});

gulp.task('start', ['build', 'watch'], function () {
    childProcess.spawn('electron', ['./build'], {
        stdio: 'inherit'
    })
    .on('close', function () {
        // User closed the app. Kill the host process.
        process.exit();
    });
});
