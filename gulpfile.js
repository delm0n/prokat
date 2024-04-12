const gulp = require("gulp");
const { src, series, parallel, dest } = require("gulp");
const concat = require("gulp-concat"); // конкатенирует файлы в один
const gcmq = require("gulp-group-css-media-queries"); // сливает однинаковые media
const autoprefixer = require("gulp-autoprefixer"); // расставляет префиксы
const cleancss = require("gulp-clean-css"); // минифицирует css
const babel = require("gulp-babel"); // компиляция скрипты в es5
const terser = require("gulp-terser"); // минифицирует js
const sass = require("gulp-sass")(require("sass")); // работа с scss

// пути к файлам
const paths = {
  styles: {
    src: [
      "css/styleTxt.css",
      "css/styleWrap.css",
      "css/catalog.css",
      "css/anime.css",
    ],
    dest: "minify",
  },

  scripts: {
    src: "script.js",
    dest: "minify",
  },
};

function cssTask() {
  return src(paths.styles.src)
    .pipe(concat("main.css"))
    .pipe(gcmq())
    .pipe(autoprefixer())
    .pipe(
      cleancss({
        level: {
          1: {
            specialComments: 0,
          },
        },
      })
    )
    .pipe(dest(paths.styles.dest));
}

// сборка скриптов
function jsTask() {
  return src(paths.scripts.src)
    .pipe(concat("script.js"))
    .pipe(terser())
    .pipe(dest(paths.scripts.dest));
}

exports.css = cssTask;
exports.js = jsTask;

exports.build = series(parallel(cssTask, jsTask));
