const gulp = require("gulp"),
  sass = require("gulp-sass"),
  clean = require("gulp-clean-css"),
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify");

gulp.task("sassDev", function() {
  return gulp
    .src("./assets/sass/app.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("./assets/css"));
});

gulp.task("sassProd", function() {
  return gulp
    .src("./assets/sass/app.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(concat("app.css"))
    .pipe(clean({ compatibility: "ie8" }))
    .pipe(gulp.dest("./assets/css"));
});

gulp.task("js", function() {
  return gulp
    .src("./assets/js/*/*.js")
    .pipe(uglify())
    .pipe(concat("app.js"))
    .pipe(gulp.dest("./assets/js"));
});

gulp.task("default", function() {
  gulp.watch("./assets/sass/**/*.scss", gulp.parallel("sassDev", "sassProd"));
  gulp.watch("./assets/js/*/*.js", gulp.parallel("js"));
});
