var gulp = require('gulp');
var gulpTypescript = require('gulp-typescript');
var gulpSourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var del = require('del');

var appDev = 'src/app';
var appProd = 'public/js/app';
var vendor = 'public/js/vendor';
var sassInput = './public/stylesheets/scss/**/*.scss';
var sassOutput = './public/stylesheets';

var tsconfig = gulpTypescript.createProject('tsconfig.json');

// SASS file processing
gulp.task('sass', function() {
    return gulp.src(sassInput)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(minifyCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(sassOutput));
});

gulp.task('build-ts', function() {
    return gulp.src(appDev + '/**')
        .pipe(gulpSourcemaps.init())
        .pipe(gulpTypescript(tsconfig))
        .pipe(gulpSourcemaps.write())
        .pipe(gulp.dest(appProd));
});

gulp.task('build-copy', function() {
    return gulp.src([appDev + '**/*/*.html', appDev + '**/*/*.htm', appDev + '**/*/*.css'])
        .pipe(gulp.dest('public/js'));
});

gulp.task('vendor', function() {
    gulp.src('node_modules/@angular/**')
        .pipe(gulp.dest(vendor + '/@angular'));

    gulp.src('node_modules/core-js/**')
        .pipe(gulp.dest(vendor + '/core-js'));
    
    gulp.src('node_modules/systemjs/**')
        .pipe(gulp.dest(vendor + '/systemjs'));
    
    gulp.src('node_modules/reflect-metadata/**')
        .pipe(gulp.dest(vendor + '/reflect-metadata'));

    gulp.src('node_modules/rxjs/**')
        .pipe(gulp.dest(vendor + '/rxjs'));

    return gulp.src('node_modules/zone.js/**')
        .pipe(gulp.dest(vendor + '/zone.js'));
});

gulp.task('clean', function() {
    del(appProd + '/**/*');
});

gulp.task('watch', function() {
    gulp.watch(appDev + '**/*.ts', ['build-ts']);
    gulp.watch(appDev + '**/**/*/*.{html,htm,css}', ['build-copy']);
});

gulp.task('build', ['build-ts', 'build-copy', 'vendor']);
gulp.task('default', ['watch', 'build-ts', 'build-copy', 'vendor']);