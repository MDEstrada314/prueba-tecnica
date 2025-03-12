const gulp = require("gulp");
const less = require("gulp-less");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const browserSync = require("browser-sync").create();
const path = require("path");


gulp.task("styles", () => {
  return gulp
    .src("src/styles/**/*.less")
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});


gulp.task("scripts", () => {
  return gulp
    .src("src/js/**/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.stream());
});


gulp.task("serve", () => {
  browserSync.init({
    server: { baseDir: "dist" },
    notify: false,
  });

  gulp.watch("src/styles/**/*.less", gulp.series("styles"));
  gulp.watch("src/js/**/*.js", gulp.series("scripts"));
  gulp.watch("dist/**/*.html").on("change", browserSync.reload);
});


gulp.task("default", gulp.series("styles", "scripts", "serve"));
