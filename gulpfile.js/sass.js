const sass = require('gulp-sass');
const concat = require('gulp-concat');
const {
  src,
  dest,
  series,
  parallel,
  watch,
} = require('gulp');



function build() {
  return src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(concat('all.css'))
    .pipe(dest('src/css'));
}



function sassWatch() {
  watch('src/scss/**/*.scss', series(build));
}



exports.build = build;
exports.watch = sassWatch;
