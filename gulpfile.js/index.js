const {
  series,
  parallel,
} = require('gulp');





//const { serve as browserSyncServe } = require('./browsersync');
const browserSync = require('./browsersync');
const browserSyncServe = browserSync.serve;



const sass = require('./sass');
const sassBuild = sass.build;
const sassWatch = sass.watch;



const jekyll = require('./jekyll');
const jekyllBuild = jekyll.build;
const jekyllWatch = jekyll.watch;
const jekyllCopy = jekyll.copy;
const jekyllCopyWatch = jekyll.copyWatch;



const publicModule = require('./public');
const public = publicModule.public;
const publicWatch = publicModule.publicWatch;






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
