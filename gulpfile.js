const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const inputImagePath = 'assets/originImages/*'
const outputImagePath = 'assets/images'

gulp.task('image', function () {
  return gulp
    .src(inputImagePath)
    .pipe(
      imagemin([
        imagemin.mozjpeg({ quality: 75 }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(gulp.dest(outputImagePath))
})

gulp.task('watch', function () {
  gulp.watch(inputImagePath, gulp.series('image'))
})

gulp.task('default', gulp.parallel('image', 'watch'))
