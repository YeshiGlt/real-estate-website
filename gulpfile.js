function defaultTask(cb) {
  // place code for your default task here
  cb();
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./src",
      index: "/index.js",
    },
  });
  gulp.watch("src/style/scss/**/*.scss", style);
  gulp.watch("./*.js").on("change", browserSync.reload);
  gulp.watch("./js/**/*.js").on("change", browserSync.reload);
}
exports.watch = watch;

exports.default = defaultTask;

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
//compile scss into css
function style() {
  return gulp
    .src("src/styles/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("src/styles"))
    .pipe(browserSync.stream());
}

exports.style = style;
