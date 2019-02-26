const gulp = require('gulp')
const browserify = require('browserify')
const sourceStream = require('vinyl-source-stream')
const sourcemaps = require('gulp-sourcemaps')
const buffer = require('vinyl-buffer')

const paths = {
  pages: ['src/*.html'],
  test: ['src/test.js']
}

/**
 * deal Html files
 */
gulp.task('dealHtml', () => {
    return gulp.src(paths.pages)
      .pipe(gulp.dest('dist'))
})

/**
 * deal test js
 */
gulp.task('dealTest', () => {
    return gulp.src(paths.test)
      .pipe(gulp.dest('dist'))
})

/**
 * default 
 */
gulp.task('default', gulp.series('dealHtml', 'dealTest', () => {
  return browserify({
    baseDir: '',
    debug: true,
    entries: 'src/index.js',
    cache: {},
    packageCache: {}
  })
  .transform('babelify', {
    presets: ['@babel/preset-env'],
    extensions: ['.js']
  })
  .bundle()
  .pipe(sourceStream('bundle.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('dist'))
}))