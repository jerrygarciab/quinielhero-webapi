var gulp = require('gulp');
var plug = require('gulp-load-plugins')();

//Main Tasks

gulp.task('default', ['test']);

//Tasks

gulp.task('serve', function () {
  plug.nodemon({
    script: './server/index.js',
    ext: 'js'
  })
});

// gulp.task('server', function () {
//   connect.server({
//     root: 'server/index'
//   });
// })

gulp.task('test', function () {
  console.log('Hello Gulp');
});
