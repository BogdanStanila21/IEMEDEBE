"use strict";
exports.__esModule = true;
var Peliculas = /** @class */ (function () {
    function Peliculas(titulo, anyoEstreno, nacionalidad, genero) {
        this.titulo = titulo;
        this.anyoEstreno = anyoEstreno;
        this.nacionalidad = nacionalidad;
        this.genero = genero;
    }
    Peliculas.prototype.mostrarAtributosPeliculas = function () {
        console.log("----------------------------------------");
        console.log(this.titulo);
        console.log("----------------------------------------");
        console.log("Título: " + this.titulo);
        console.log("Género: " + this.genero);
        console.log("Idioma: " + this.idioma);
        console.log("País: " + this.nacionalidad);
        console.log("Año: " + this.anyoEstreno);
        console.log("Protagonizada por: " + this.nombreProtagonista);
        console.log("Reparto: " + this.nombreActores());
        console.log("Dirigida por: " + this.director);
        console.log("Guión: " + this.guionista);
        console.log("Productora: " + this.productora);
        console.log("Distribuidora: " + this.distribuidora);
        console.log("Plataforma: " + this.plataforma);
        console.log("Pertenece al MCU: " + this.esMCU);
        console.log("________________________________________");
        console.log("________________________________________");
    };
    Peliculas.prototype.nombreActores = function () {
        var resultado = " ";
        for (var i = 0; i < this.actores.length; i++) {
            resultado += this.actores[i].nombre + "; ";
        }
        return resultado;
    };
    return Peliculas;
}());
exports.Peliculas = Peliculas;
