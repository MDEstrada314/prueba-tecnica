const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const less = require("gulp-less");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const hb = require("gulp-hb");
const rename = require("gulp-rename");


// Importa la función de carga de datos
const fetchData = require("./apiData"); 

// Importa los parciales para ser usados en los templetes
// y modulariza el html
const options = {
  batch: ["src/templates/partials"] 
};

//  Cargar datos desde JSON
let data = fetchData();


// Compilar LESS a CSS 
gulp.task("styles", function () {
    return gulp.src("src/styles/*.less") 
        .pipe(less()) 
        .pipe(cleanCSS()) 
        .pipe(gulp.dest("dist/css")) 
        .pipe(browserSync.stream()); 
});

//  Minificar JavaScript
gulp.task("scripts", function () {
    return gulp.src("src/js/*.js") 
        .pipe(uglify()) 
        .pipe(gulp.dest("dist/js")) 
        .pipe(browserSync.stream()); 
});

//  Compilar Handlebars a HTML
gulp.task("templates", function () {
    data = fetchData();

    return gulp
        .src("src/templates/*.hbs") 
        .pipe(hb()
            .partials("src/templates/partials/*.hbs") 
            .data(data)
        )
        .pipe(rename({ extname: ".html" }))
        .pipe(gulp.dest("dist"));
});

// Servidor de desarrollo con recarga automática
gulp.task("serve", function () {
    browserSync.init({
        server: "./dist",
    });

    gulp.watch("src/styles/**/*.less", gulp.series("styles"));
    gulp.watch("src/js/*.js", gulp.series("scripts"));
    gulp.watch("data/test.json", gulp.series("templates", (done) => {
        browserSync.reload();
        done();
    })); 
    gulp.watch("src/templates/**/*.hbs", gulp.series("templates", (done) => {
        browserSync.reload();
        done();
    }));
});



gulp.task("default", gulp.series("styles", "scripts", "templates", "serve"));
