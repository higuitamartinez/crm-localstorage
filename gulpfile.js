//Imports
const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass');

const autoprefixer = require('autoprefixer'); //Prefijos en css
const postcss = require('gulp-postcss'); //Procesamiento del código css
const cssnano = require('cssnano'); //Minificar css
const sourcemaps = require('gulp-sourcemaps'); //Referencia de los archivos scss en el navegador

//Funciones
const directorios = {
    scss: 'src/scss/**/*.scss'
}


function css(){
    return src(directorios.scss)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./build/css'));
}


function watchArchivos(){
    watch(directorios.scss, css);
}


exports.css = css;
exports.default = parallel(css, watchArchivos);
