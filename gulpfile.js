var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('default', function() {
  return gulp.src('*.js', {read: false})
    .pipe(shell(['browserify -t [ babelify --presets [ react ] ] assets/javascripts/main.js -o public/javascripts/bundle.js']))
});
