"use strict";
exports.__esModule = true;
var Iemedebe = /** @class */ (function () {
    function Iemedebe(peliculas) {
        this.peliculas = peliculas;
    }
    Iemedebe.prototype.monstrarAtributosIemedebe = function () {
        console.log("****************************************");
        console.log("Mis peliculas son:");
        for (var i = 0; i < this.peliculas.length; i++) {
            this.peliculas[i].mostrarAtributosPeliculas();
        }
    };
    return Iemedebe;
}());
exports.Iemedebe = Iemedebe;
