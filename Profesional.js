"use strict";
exports.__esModule = true;
var Profesional = /** @class */ (function () {
    function Profesional(nombre, edad, sexo, peso, altura, colorPelo, colorOjos, raza, estaRetirado, nacionalidad, numeroDeOscars, profesion) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.colorPelo = colorPelo;
        this.colorOjos = colorOjos;
        this.raza = raza;
        this.estaRetirado = estaRetirado;
        this.nacionalidad = nacionalidad;
        this.numeroDeOscars = numeroDeOscars;
        this.profesion = profesion;
    }
    Profesional.prototype.mostrarAtributosProfesional = function () {
        console.log("----------------------------------------------");
        console.log(this.nombre);
        console.log("----------------------------------------------");
        console.log("Edad: " + this.edad);
        console.log("Sexo: " + this.sexo);
        console.log("Nacionalidad: " + this.nacionalidad);
        console.log("Profesion: " + this.profesion);
        console.log("Nº Ocars: " + this.numeroDeOscars);
        console.log("Esta retirad@? " + this.estaRetirado);
        console.log("Peso: " + this.peso);
        console.log("Altura: " + this.altura);
        console.log("Color de pelo: " + this.colorPelo);
        console.log("Color de ojos: " + this.colorOjos);
        console.log("Raza: " + this.raza);
        console.log("______________________________________________");
        console.log("______________________________________________");
    };
    return Profesional;
}());
exports.Profesional = Profesional;
