var gulp = require('gulp');
var rename = require('gulp-rename');
babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var pump = require('pump');
 
gulp.task('compress', function (cb) {
  pump([
        gulp.src('src/index.js'),
        babel({
          presets: ['es2015']
        }),
        uglify(),
        rename('bs-modal-fullscreen.min.js'),
        gulp.dest('dist')
    ],
    cb
  );
});

gulp.task('build', function(cb) {
  pump([
      gulp.src('src/index.js'),
      babel({
        presets: ['es2015']
      }),
      rename('bs-modal-fullscreen.js'),
      gulp.dest('dist/')
    ],
    cb
  );
});

gulp.task('default', ['build', 'compress']);