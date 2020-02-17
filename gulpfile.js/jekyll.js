const changed = require('gulp-changed');

const {
  src,
  dest,
  series,
  watch,
} = require('gulp');

const spawn = require('cross-spawn');





function build() {
  let jekyll = spawn('jekyll', ['build'], {
    cwd: 'src/jekyll'
  });

  jekyll.stderr.on('data', function (data) {
    console.log('' + data);
  });
  return jekyll;
}



function jekyllWatch() {
  watch([
    'src/jekyll/*.md',
    'src/jekyll/_layouts/**/*.html'
  ], series(build));
}



function copy() {
  return src('src/jekyll/_site/**/*.html')
    .pipe(changed('src/article'))
    .pipe(dest('src/article'));
}



function copyWatch() {
  watch('src/jekyll/_site/**/*.html', series(copy));
}





exports.build = build;
exports.watch = jekyllWatch;

exports.copy = copy;
exports.copyWatch = copyWatch;
