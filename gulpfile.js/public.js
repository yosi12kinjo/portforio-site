const changed = require('gulp-changed');

const {
  src,
  dest,
  series,
  watch,
} = require('gulp');






function public() {
  return series(
    () => {
      return src([
        'src/*.html',
        'src/**/*.css',
        'src/**/*.js',
      ])
        .pipe(changed('public'))
        .pipe(dest('public'))
    },
    () => {
      return src(['src/article/*.html'])
        .pipe(changed('public/article'))
        .pipe(dest('public/article'))
    });
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
