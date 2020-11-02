const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const imagePath = 'assets/images/*'

gulp.task('image', function () {
  return gulp
    .src(imagePath)
    .pipe(
      imagemin([
        imagemin.mozjpeg({ quality: 75 }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(gulp.dest('assets/images'))
})

gulp.task('watch', function () {
  gulp.watch(imagePath, gulp.series('image'))
})

gulp.task('default', gulp.parallel('image', 'watch'))
