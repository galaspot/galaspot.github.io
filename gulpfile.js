// including plugins
var gulp = require('gulp')
, minifyHtml = require("gulp-minify-html"),
minifyCss = require("gulp-minify-css"),uglify = require("gulp-uglify"),
concat = require("gulp-concat");

// task
gulp.task('minify-html', function () {
    gulp.src('/bcd.html') // path to your files
    .pipe(minifyHtml())
    .pipe(gulp.dest('galaspot.github.io/minified'));
});

// task
gulp.task('minify-css', function () {
    gulp.src('./css/*.css') // path to your file
    .pipe(minifyCss())
    .pipe(gulp.dest('./minified/css'));
});


gulp.task('minify-js', function () {
    gulp.src('./js/*.js') // path to your files
    .pipe(uglify())
    .pipe(gulp.dest('./minified/js'));
});

// task
gulp.task('concat-css', function () {
    gulp.src(['./minified/css/normalize.css','./minified/css/skeleton.css','./minified/css/animate.css','./minified/css/main.css'])
    .pipe(concat('concat.css'))  // concat and name it "concat.js"
    .pipe(gulp.dest('./minified/concatCss'));
});
gulp.task('concat-js', function () {
    gulp.src(['./minified/js/classie.js','./minified/js/modalEffects.js','./minified/js/plugins.js'])
    .pipe(concat('concat.js'))  // concat and name it "concat.js"
    .pipe(gulp.dest('./minified/concatCss'));
});
