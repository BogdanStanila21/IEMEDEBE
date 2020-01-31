"use strict";
exports.__esModule = true;
var Profesional_1 = require("./Profesional");
var Peliculas_1 = require("./Peliculas");
var Iemedebe_1 = require("./Iemedebe");
var DenzelWashigton;
DenzelWashigton = new Profesional_1.Profesional("Dezel Washigton", 66, "Masculino", 80, 185, "negro", "Marrones", "Yorsay", false, "USA", 2, "Actor/Director");
var RobertDowneyJr;
RobertDowneyJr = new Profesional_1.Profesional("Robert Downey Jr", 55, "Masculino", 78, 172, "Castaño", "Marrones", "Caniche", false, "USA", 0, "Actor/Productor/Cantante");
var ScarlettJohansson;
ScarlettJohansson = new Profesional_1.Profesional("Scarllet Johansson", 36, "Femenino", 58, 163, "Pelirrojo", "Azul", "Pomerania", false, "USA", 0, "Actriz/Cantante/Modelo");
var KeiraKnightley;
KeiraKnightley = new Profesional_1.Profesional("Keira Knightley", 34, "Femenino", 57, 170, "Castaño", "Verdes", "Chow Chow", false, "Inglesa", 0, "Actriz/Modelo");
var SeanConnery;
SeanConnery = new Profesional_1.Profesional("Sean Connery", 90, "Masculino", 90, 190, "Blanco", "Marrones", "Shar Pei", true, "Inglesa", 1, "Actor/Productor");
var WillSmith;
WillSmith = new Profesional_1.Profesional("Will Smith", 52, "Masculino", 90, 188, "Negro", "Marron", "Doberman", false, "USA", 2, "Actor/Rapero/Productor de cine/Productor de TV/Productor discografico");
var ChrisHemsworth;
ChrisHemsworth = new Profesional_1.Profesional("Chris Hemsworth", 36, "Masculino", 84, 191, "Rubio", "Azules", "Pastor Ovejero Australiano", false, "Australiano", 2, "Actor");
var ChrisEvans;
ChrisEvans = new Profesional_1.Profesional("Chris Evans", 38, "Masculino", 91, 182, "Rubio", "Azules", "Golden Retriever", false, "Estadounidense", 3, "Actor/Modelo/Director de cine");
var HarrisonFord;
HarrisonFord = new Profesional_1.Profesional("Harrison Ford", 77, "Masculino", 81, 185, "Moreno", "Marrón", "Shih Tzu", false, "Estadounidense", 0, "Actor/Productor de cine");
var LeonardoDiCaprio;
LeonardoDiCaprio = new Profesional_1.Profesional("Leonardo DiCaprio", 45, "Masculino", 78, 183, "Rubio", "Azules", "Bichón maltés", false, "Estadounidense", 1, "Actor/Productor de cine/Ambientalista/Guionista");
//ScarlettJohansson.mostrarAtributosProfesional()
var VengadoresEndgame;
VengadoresEndgame = new Peliculas_1.Peliculas("Vengadores Endgame", 2019, "Estados Unidos", "Ciencia ficción/Fantástico/Acción");
VengadoresEndgame.idioma = "Inglés";
VengadoresEndgame.nombreProtagonista = "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner";
VengadoresEndgame.actores = [ChrisHemsworth, ChrisEvans, ScarlettJohansson];
VengadoresEndgame.director = "Anthony Russo, Joe Russo";
VengadoresEndgame.guionista = "Christopher Markus, Stephen McFeely";
VengadoresEndgame.productora = "Marvel Studios";
VengadoresEndgame.distribuidora = "Walt Disney Studios";
VengadoresEndgame.plataforma = "cine";
VengadoresEndgame.esMCU = true;
var ThorRagnarok;
ThorRagnarok = new Peliculas_1.Peliculas("Thor Ragnarok", 2017, "Estados Unidos", "Fantástico/Acción/Aventuras/Comedia");
ThorRagnarok.idioma = "Inglés";
ThorRagnarok.nombreProtagonista = "Chris Hemsworth, Tom Hiddleston, Cate Blanchett, Tessa Thompson, Mark Ruffalo";
ThorRagnarok.actores = [ChrisHemsworth, ChrisEvans];
ThorRagnarok.director = "Taika Waititi";
ThorRagnarok.guionista = "Eric Pearson, Craig Kyle, Christopher Yost";
ThorRagnarok.productora = "Marvel Entertainment / Marvel Studios";
ThorRagnarok.distribuidora = "Marvel Entertainment / Marvel Studios";
ThorRagnarok.plataforma = " Walt Disney Pictures";
ThorRagnarok.esMCU = true;
var ElRenacido;
ElRenacido = new Peliculas_1.Peliculas("El Renacido", 2015, "Estados Unidos", "Fantástico/Acción/Aventuras/Comedia");
ElRenacido.idioma = "Inglés";
ElRenacido.nombreProtagonista = "Leonardo DiCaprio, Tom Hardy, Domhnall Gleeson, Will Poulter";
ElRenacido.actores = [LeonardoDiCaprio];
ElRenacido.director = "Alejandro González Iñárritu";
ElRenacido.guionista = "Mark L. Smith, Alejandro González Iñárritu";
ElRenacido.productora = "New Regency";
ElRenacido.distribuidora = "20th Century Fox";
ElRenacido.plataforma = " Anonymous Content / RatPac Entertainment";
ElRenacido.esMCU = false;
var IronMan;
IronMan = new Peliculas_1.Peliculas("Iron Man", 2008, "USA", "Acción/Ciencia ficción");
IronMan.idioma = "Ingles";
IronMan.nacionalidad = "USA";
IronMan.nombreProtagonista = "Robert Downey Jr";
IronMan.actores = [RobertDowneyJr];
IronMan.director = "Jon Favreau";
IronMan.guionista = "Arthur Marcum, Matt Holloway, Mark Fergus, Hawk Ostby";
IronMan.productora = "Paramount Pictures / Marvel Enterprises / Marvel Studios / Fairview Entertainment / Dark Blades Films / Legion Entertainment";
IronMan.distribuidora = "Paramount Pictures";
IronMan.plataforma = "Cine";
IronMan.esMCU = true;
var ManOnFire;
ManOnFire = new Peliculas_1.Peliculas("Man on Fire", 2004, "USA", "Accion/Drama");
ManOnFire.idioma = "Ingles";
ManOnFire.nacionalidad = "USA";
ManOnFire.nombreProtagonista = "Denzel Whashington]";
ManOnFire.actores = [DenzelWashigton];
ManOnFire.director = "Tony Scott";
ManOnFire.guionista = "Brian Helgeland";
ManOnFire.productora = "20th Century Fox";
ManOnFire.distribuidora = "20th Century Fox";
ManOnFire.plataforma = "Cine";
ManOnFire.esMCU = false;
var PiratasDelCaribe;
PiratasDelCaribe = new Peliculas_1.Peliculas("Piratas del caribe", 2003, "USA", "Accion");
PiratasDelCaribe.idioma = "Ingles";
PiratasDelCaribe.nacionalidad = "USA";
PiratasDelCaribe.nombreProtagonista = "Johnny Depp, Orlando Bloom, Keira Knightley";
PiratasDelCaribe.actores = [KeiraKnightley];
PiratasDelCaribe.director = "Gore Verbinski";
PiratasDelCaribe.guionista = "Tet Eliott";
PiratasDelCaribe.productora = "Walt Disney Pictures";
PiratasDelCaribe.distribuidora = "Walt Disney Pictures";
PiratasDelCaribe.plataforma = "Cine";
PiratasDelCaribe.esMCU = false;
var MenInBlack;
MenInBlack = new Peliculas_1.Peliculas("Men in Black", 1997, "USA", "Ciencia ficción/Comedia");
MenInBlack.idioma = "Ingles";
MenInBlack.nacionalidad = "USA";
MenInBlack.nombreProtagonista = "Will Smith, Tommy Lee Jones";
MenInBlack.actores = [WillSmith];
MenInBlack.director = "Barry Sonnenfeld";
MenInBlack.guionista = "Ed Solomon";
MenInBlack.productora = "Columbia Pictures";
MenInBlack.distribuidora = "Columbia Pictures";
MenInBlack.plataforma = "Cine";
MenInBlack.esMCU = false;
var TheRock;
TheRock = new Peliculas_1.Peliculas("The Rock", 1996, "USA", "Acción/Terrorismo");
TheRock.idioma = "Ingles";
TheRock.nacionalidad = "USA";
TheRock.nombreProtagonista = "Sean Connery, Nicolas Cage, Ed Harris";
TheRock.actores = [SeanConnery];
TheRock.director = "Michael Bay";
TheRock.guionista = "David Weisberg";
TheRock.productora = "Hollywood Pictures ";
TheRock.distribuidora = "Hollywood Pictures";
TheRock.plataforma = "Cine";
TheRock.esMCU = false;
var Hulk;
Hulk = new Peliculas_1.Peliculas("Hulk", 2008, "USA", "Acción/Fantasia");
Hulk.idioma = "Ingles";
Hulk.nacionalidad = "USA";
Hulk.nombreProtagonista = "Edward Norton";
Hulk.actores = [RobertDowneyJr];
Hulk.director = "Louis Leterrier";
Hulk.guionista = "Zak Penn";
Hulk.productora = "Marvel Studios";
Hulk.distribuidora = "Marvel Studios";
Hulk.plataforma = "Cine";
Hulk.esMCU = true;
var StarWars;
StarWars = new Peliculas_1.Peliculas("StarWars", 2019, "USA", "Acción/Fantasia");
StarWars.idioma = "Ingles";
StarWars.nacionalidad = "USA";
StarWars.nombreProtagonista = "Harrison Ford";
StarWars.actores = [HarrisonFord];
StarWars.director = "J.J. Abrahams";
StarWars.guionista = "George Lucas";
StarWars.productora = "Lucas Films";
StarWars.distribuidora = "Walt Disney";
StarWars.plataforma = "Cine";
StarWars.esMCU = false;
//VengadoresEndgame.mostrarAtributosPeliculas()
var arayPeliculas;
arayPeliculas = new Iemedebe_1.Iemedebe([StarWars, Hulk, PiratasDelCaribe, TheRock]);
//arayPeliculas.monstrarAtributosIemedebe()
var jsonAray = JSON.stringify(arayPeliculas);
var fs = require('fs');
fs.writeFile("imdbBBDD.json", jsonAray, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
    console.log("JSON file has been saved.");
});
