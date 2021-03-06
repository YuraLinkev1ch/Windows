let gulp = require('gulp'), 
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('clean', async function(){
    del.sync('docs')
})

gulp.task('scss', function(){
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'})) 
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename({suffix: '.min' }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('css', function(){
    return gulp.src([
        'node_modules/aos/dist/aos.css',
        'node_modules/normalize.css/normalize.css',
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/flipdown/dist/flipdown.min.css'
    ])
        .pipe(concat('_libs.scss'))
        .pipe(gulp.dest('app/scss'))
        .pipe(browserSync.reload({stream: true}))
});


gulp.task('html', function(){
    return gulp.src('app/*.html')
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('script', function(){
    return gulp.src('app/js/*.js')
    .pipe(browserSync.reload({stream:true}))
});


gulp.task('img', function(){
    return gulp.src('app/img/**')
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        },
        online: true,/*! */
        tunnel: true,/*! */
        logLevel: "debug"/*! */
    });
});

gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', gulp.parallel('scss')) 
    gulp.watch('app/*.html', gulp.parallel('html'))
    gulp.watch('app/js/*.js', gulp.parallel('script'))
    gulp.watch('app/img/**', gulp.parallel('img'))
});

gulp.task('js', function(){
    return gulp.src([
        'node_modules/aos/dist/aos.js',
        'node_modules/focus-manager/focusManager.min.js',
        'node_modules/focus-visible/dist/focus-visible.min.js',
        'node_modules/inputmask/dist/inputmask.min.js',
        'node_modules/just-validate/dist/js/just-validate.min.js',
        'node_modules/fslightbox/index.js',
        'node_modules/flipdown/dist/flipdown.min.js'
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('export', function(){
    let buildHtml = gulp.src('app/**/*.html')
        .pipe(gulp.dest('docs'));

    let buildCss = gulp.src('app/css/**/*.css')
        .pipe(gulp.dest('docs/css'));

    let buildJs = gulp.src('app/js/**/*.js')
        .pipe(gulp.dest('docs/js'));

    let buildFonts = gulp.src('app/fonts/**/*.*')
        .pipe(gulp.dest('docs/fonts'));

    let buildImg = gulp.src('app/img/**/*.*')
        .pipe(gulp.dest('docs/img'));
})

gulp.task('build', gulp.series('clean', 'export'));

gulp.task('default', gulp.parallel('css', 'scss', 'js', 'browser-sync', 'watch'))


