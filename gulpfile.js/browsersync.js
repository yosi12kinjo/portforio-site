const browserSync = require('browser-sync').create();


function serve() {
  browserSync.init({
    watch: true,
    server: {
      baseDir: './src'
    },
    open: false
  });
}


exports.serve = serve;
