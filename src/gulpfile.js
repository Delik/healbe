const gulp        = require('gulp'),
      scss        = require('gulp-sass'),
      server      = require('gulp-server-livereload');
      sourcemaps = require('gulp-sourcemaps');

gulp.task('scss', function(){
    return gulp.src('src/common/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(scss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('html', function(){
    return gulp.src('./src/**/*.html')
        .pipe(gulp.dest('dist'))
});

gulp.task('img', function(){
    return gulp.src('./src/img/**/*.*')
        .pipe(gulp.dest('dist/img'))
});

gulp.task('fonts', function(){
    return gulp.src('./src/fonts/**/*.*')
        .pipe(gulp.dest('dist/fonts'))
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.*', gulp.parallel('scss', 'html', 'img', 'fonts'));
    gulp.task(server());
});

gulp.task('server', function() {
    gulp.src('./dist')
        .pipe(server({
            livereload: true,
            directoryListing: false,
            open: true,
            defaultFile: '/apps/fgk/index.html'
        }));
});

const gutil = require( 'gulp-util' );
const ftp = require( 'vinyl-ftp' );

gulp.task( 'd', function () { //deploy

    var conn = ftp.create( {
        host:     's28.webhost1.ru',
        user:     'avazmutall_lis2',
        password: 'clear000',
        parallel: 10,
        log:      gutil.log
    } );

    var globs = [
        '/dist/**',
    ];

    return gulp.src( globs )
        .pipe( conn.newer( '/fgk.webde5ign.ru/dist/' ) ) // only upload newer files
        .pipe( conn.dest( '/fgk.webde5ign.ru/dist/' ) );

} );

gulp.task('default', gulp.parallel('scss', 'html', 'img', 'fonts', 'watch', 'server'));
