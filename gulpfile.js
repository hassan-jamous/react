const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('concat-stubby', done => {
  gulp
    .src('stubby/*/**/*.yaml')
    .pipe(concat('stubby.yaml'))
    .pipe(gulp.dest('stubby'));
    done();
});
