module.exports = () => {
  $.gulp.task('pug', () => {
    return $.gulp.src('src/pug/pages/*.pug')
      .pipe($.gp.pug({
        pretty: true
      }))
      .pipe($.gulp.dest('dist'))
      .on('end', $.browserSync.reload);
  });
}