const gulp = require('gulp');
const changed = require('gulp-changed');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const {
  src,
  series,
  parallel
} = require('gulp');
const spawn = require('cross-spawn');


function browserSyncServe() {
  browserSync.init({
    watch: true,
    server: {
      baseDir: './src'
    },
    open: false
  });
}



function sassBuild() {
  return src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(concat('all.css'))
    .pipe(gulp.dest('src/css'));
}



function sassWatch() {
  gulp.watch('src/scss/**/*.scss', series(sassBuild));
}



function jekyllBuild() {
  let jekyll = spawn('jekyll', ['build'], {
    cwd: 'src/jekyll'
  });

  jekyll.stderr.on('data', function (data) {
    console.log('' + data);
  });
  return jekyll;
}



function jekyllWatch() {
  gulp.watch([
    'src/jekyll/*.md',
    'src/jekyll/_layouts/**/*.html'
  ], series(jekyllBuild));
}



function jekyllCopy() {
  return src('src/jekyll/_site/**/*.html')
    .pipe(changed('src/article'))
    .pipe(gulp.dest('src/article'));
}



function jekyllCopyWatch() {
  gulp.watch('src/jekyll/_site/**/*.html', series(jekyllCopy));
}





function public() {
  return src([
    'src/*.html',
    'src/article/*.html',
    'src/**/*.css',
    'src/**/*.js',
  ])
    .pipe(changed('public'))
    .pipe(gulp.dest('public'));
}



function publicWatch() {
  gulp.watch([
    'src/*.html',
    'src/article/*.html',
    'src/**/*.css',
    'src/**/*.js',
  ], series(public));
}



exports.browserSyncServe = browserSyncServe;

exports.sassBuild = sassBuild;
exports.sassWatch = sassWatch;

exports.jekyllBuild = jekyllBuild;
exports.jekyllWatch = jekyllWatch;

exports.jekyllCopy = jekyllCopy;
exports.jekyllCopyWatch = jekyllCopyWatch;

exports.default = parallel(browserSyncServe, sassWatch, jekyllWatch, jekyllCopyWatch, publicWatch);

exports.public = public;
exports.publicWatch = publicWatch;
