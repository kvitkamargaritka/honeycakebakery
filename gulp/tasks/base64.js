var gulp = require('gulp');
var base64 = require('gulp-css-base64');
var config = require('../config');

gulp.task('base64', function () {
  gulp.src(config.dest.css + '*.css')

    .pipe(base64({
      maxWeightResource: 50 * 1024, //Размер файла в bytes
      extensionsAllowed: ['.gif', '.jpg', '.png']
    }))

    .pipe(gulp.dest(config.dest.css));
});

gulp.task('base64:watch', function() {
  gulp.watch([config.dest.css + '*.css'], ['base64']);
});