module.exports = function (name) {
    const gulp = require('gulp'),
        scss = require('gulp-sass'),
        server = require('gulp-server-livereload'),
        sourcemaps = require('gulp-sourcemaps');

    gulp.task('scss', () => gulp
        .src('src/styles.scss')
        .pipe(sourcemaps.init())
        .pipe(scss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('../../dist/' + name))
    );

    gulp.task('html', () => gulp
        .src('src/**/*.html')
        .pipe(gulp.dest('../../dist/' + name))
    );

    gulp.task('assets:common', () => gulp
        .src('../../common/assets/**/*')
        .pipe(gulp.dest(`../../dist/${name}/assets`))
    );

    gulp.task('assets:extended', () => gulp
        .src('src/assets/**/*')
        .pipe(gulp.dest(`../../dist/${name}/assets`))
    );

    gulp.task('assets', gulp.parallel('assets:common', 'assets:extended'));

    gulp.task('build', gulp.parallel('scss', 'html', 'assets'));

    gulp.task('watch', () => gulp
        .watch(['../../common/**/*', 'src/**/*'], gulp.parallel('scss', 'html', 'assets'))
    );

    gulp.task('serve', gulp.parallel('watch', () => gulp
            .src('../../dist/' + name)
            .pipe(server({
                livereload: false,
                directoryListing: false,
                open: true,
                defaultFile: 'index.html'
            }))
        )
    );

    gulp.task('default', gulp.parallel('scss', 'html', 'assets', 'serve'));
};
