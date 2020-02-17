const changed = require('gulp-changed');

const {
  src,
  dest,
  series,
  watch,
} = require('gulp');






function public() {
  return src([
    'src/*.html',
    'src/article/*.html',
    'src/**/*.css',
    'src/**/*.js',
  ])
    .pipe(changed('public'))
    .pipe(dest('public'));
}



function publicWatch() {
  watch([
    'src/*.html',
    'src/article/*.html',
    'src/**/*.css',
    'src/**/*.js',
  ], series(public));
}





exports.public = public;
exports.publicWatch = publicWatch;
