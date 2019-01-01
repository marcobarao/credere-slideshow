const gulp = require("gulp"),
  sass = require("gulp-sass"),
  clean = require("gulp-clean-css"),
  concat = require("gulp-concat");

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

gulp.task("default", function() {
  gulp.watch("./assets/sass/**/*.scss", gulp.parallel("sassDev", "sassProd"));
});
