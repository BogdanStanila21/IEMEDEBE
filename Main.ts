import {Profesional} from "./Profesional"
import {Peliculas} from "./Peliculas"
import {Iemedebe} from "./Iemedebe"

let DenzelWashigton: Profesional
DenzelWashigton= new Profesional("Dezel Washigton",66,"Masculino",80,185,"negro","Marrones","Yorsay",false,"USA",2,"Actor/Director")
let RobertDowneyJr:Profesional
RobertDowneyJr= new Profesional("Robert Downey Jr",55,"Masculino",78,172,"Castaño","Marrones","Caniche",false,"USA",0,"Actor/Productor/Cantante")
let ScarlettJohansson:Profesional
ScarlettJohansson= new Profesional("Scarllet Johansson",36,"Femenino",58,163,"Pelirrojo","Azul","Pomerania",false,"USA",0,"Actriz/Cantante/Modelo")
let KeiraKnightley:Profesional
KeiraKnightley= new Profesional("Keira Knightley",34,"Femenino",57,170,"Castaño","Verdes","Chow Chow",false,"Inglesa",0,"Actriz/Modelo")
let SeanConnery: Profesional
SeanConnery= new Profesional("Sean Connery",90,"Masculino",90,190,"Blanco","Marrones","Shar Pei",true,"Inglesa",1,"Actor/Productor")
let WillSmith: Profesional
WillSmith= new Profesional("Will Smith",52,"Masculino",90,188,"Negro","Marron","Doberman",false,"USA",2,"Actor/Rapero/Productor de cine/Productor de TV/Productor discografico")
let ChrisHemsworth:Profesional
ChrisHemsworth=new Profesional("Chris Hemsworth", 36, "Masculino", 84, 191, "Rubio", "Azules", "Pastor Ovejero Australiano", false, "Australiano", 2, "Actor")
let ChrisEvans:Profesional
ChrisEvans=new Profesional("Chris Evans", 38, "Masculino", 91, 182, "Rubio", "Azules", "Golden Retriever", false, "Estadounidense", 3, "Actor/Modelo/Director de cine")
let HarrisonFord:Profesional
HarrisonFord=new Profesional("Harrison Ford", 77, "Masculino", 81, 185, "Moreno", "Marrón", "Shih Tzu", false, "Estadounidense", 0, "Actor/Productor de cine")
let LeonardoDiCaprio:Profesional
LeonardoDiCaprio=new Profesional("Leonardo DiCaprio", 45, "Masculino", 78, 183, "Rubio", "Azules", "Bichón maltés", false, "Estadounidense", 1, "Actor/Productor de cine/Ambientalista/Guionista")

//ScarlettJohansson.mostrarAtributosProfesional()


let VengadoresEndgame: Peliculas
VengadoresEndgame = new Peliculas("Vengadores Endgame", 2019, "Estados Unidos", "Ciencia ficción/Fantástico/Acción")
VengadoresEndgame.idioma = "Inglés"
VengadoresEndgame.nombreProtagonista = "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner"
VengadoresEndgame.actores = [ChrisHemsworth, ChrisEvans, ScarlettJohansson]
VengadoresEndgame.director = "Anthony Russo, Joe Russo"
VengadoresEndgame.guionista = "Christopher Markus, Stephen McFeely"
VengadoresEndgame.productora = "Marvel Studios"
VengadoresEndgame.distribuidora = "Walt Disney Studios"
VengadoresEndgame.plataforma = "cine"
VengadoresEndgame.esMCU = true


let ThorRagnarok: Peliculas
ThorRagnarok = new Peliculas("Thor Ragnarok", 2017, "Estados Unidos", "Fantástico/Acción/Aventuras/Comedia")
ThorRagnarok.idioma = "Inglés"
ThorRagnarok.nombreProtagonista = "Chris Hemsworth, Tom Hiddleston, Cate Blanchett, Tessa Thompson, Mark Ruffalo"
ThorRagnarok.actores = [ChrisHemsworth, ChrisEvans]
ThorRagnarok.director = "Taika Waititi"
ThorRagnarok.guionista = "Eric Pearson, Craig Kyle, Christopher Yost"
ThorRagnarok.productora = "Marvel Entertainment / Marvel Studios"
ThorRagnarok.distribuidora = "Marvel Entertainment / Marvel Studios"
ThorRagnarok.plataforma = " Walt Disney Pictures"
ThorRagnarok.esMCU = true


let ElRenacido: Peliculas
ElRenacido = new Peliculas("El Renacido", 2015, "Estados Unidos", "Fantástico/Acción/Aventuras/Comedia")
ElRenacido.idioma = "Inglés"
ElRenacido.nombreProtagonista = "Leonardo DiCaprio, Tom Hardy, Domhnall Gleeson, Will Poulter"
ElRenacido.actores = [LeonardoDiCaprio]
ElRenacido.director = "Alejandro González Iñárritu"
ElRenacido.guionista = "Mark L. Smith, Alejandro González Iñárritu"
ElRenacido.productora = "New Regency"
ElRenacido.distribuidora = "20th Century Fox"
ElRenacido.plataforma = " Anonymous Content / RatPac Entertainment"
ElRenacido.esMCU = false


let IronMan:Peliculas
IronMan = new Peliculas("Iron Man",2008,"USA","Acción/Ciencia ficción",)
IronMan.idioma = "Ingles"
IronMan.nacionalidad = "USA";
IronMan.nombreProtagonista ="Robert Downey Jr";
IronMan.actores =[RobertDowneyJr];
IronMan.director = "Jon Favreau";
IronMan.guionista = "Arthur Marcum, Matt Holloway, Mark Fergus, Hawk Ostby";
IronMan.productora = "Paramount Pictures / Marvel Enterprises / Marvel Studios / Fairview Entertainment / Dark Blades Films / Legion Entertainment";
IronMan.distribuidora = "Paramount Pictures";
IronMan.plataforma = "Cine";
IronMan.esMCU = true;


let ManOnFire:Peliculas
ManOnFire = new Peliculas("Man on Fire",2004,"USA","Accion/Drama");
ManOnFire.idioma = "Ingles"
ManOnFire.nacionalidad = "USA";
ManOnFire.nombreProtagonista ="Denzel Whashington]";
ManOnFire.actores =[DenzelWashigton];
ManOnFire.director = "Tony Scott";
ManOnFire.guionista = "Brian Helgeland";
ManOnFire.productora = "20th Century Fox";
ManOnFire.distribuidora = "20th Century Fox";
ManOnFire.plataforma = "Cine";
ManOnFire.esMCU = false;


let PiratasDelCaribe:Peliculas
PiratasDelCaribe = new Peliculas("Piratas del caribe",2003,"USA","Accion");
PiratasDelCaribe.idioma = "Ingles"
PiratasDelCaribe.nacionalidad = "USA";
PiratasDelCaribe.nombreProtagonista ="Johnny Depp, Orlando Bloom, Keira Knightley";
PiratasDelCaribe.actores =[KeiraKnightley];
PiratasDelCaribe.director = "Gore Verbinski";
PiratasDelCaribe.guionista = "Tet Eliott";
PiratasDelCaribe.productora = "Walt Disney Pictures";
PiratasDelCaribe.distribuidora = "Walt Disney Pictures";
PiratasDelCaribe.plataforma = "Cine";
PiratasDelCaribe.esMCU = false;


let MenInBlack:Peliculas
MenInBlack = new Peliculas("Men in Black",1997,"USA","Ciencia ficción/Comedia");
MenInBlack.idioma = "Ingles"
MenInBlack.nacionalidad = "USA";
MenInBlack.nombreProtagonista ="Will Smith, Tommy Lee Jones";
MenInBlack.actores =[WillSmith];
MenInBlack.director = "Barry Sonnenfeld";
MenInBlack.guionista = "Ed Solomon";
MenInBlack.productora = "Columbia Pictures";
MenInBlack.distribuidora = "Columbia Pictures";
MenInBlack.plataforma = "Cine";
MenInBlack.esMCU = false;


let TheRock:Peliculas
TheRock = new Peliculas("The Rock",1996,"USA","Acción/Terrorismo");
TheRock.idioma = "Ingles"
TheRock.nacionalidad = "USA";
TheRock.nombreProtagonista ="Sean Connery, Nicolas Cage, Ed Harris";
TheRock.actores =[SeanConnery];
TheRock.director = "Michael Bay";
TheRock.guionista = "David Weisberg";
TheRock.productora = "Hollywood Pictures ";
TheRock.distribuidora = "Hollywood Pictures";
TheRock.plataforma = "Cine";
TheRock.esMCU = false;


let Hulk:Peliculas
Hulk = new Peliculas("Hulk",2008,"USA","Acción/Fantasia");
Hulk.idioma = "Ingles"
Hulk.nacionalidad = "USA";
Hulk.nombreProtagonista ="Edward Norton";
Hulk.actores =[RobertDowneyJr];
Hulk.director = "Louis Leterrier";
Hulk.guionista = "Zak Penn";
Hulk.productora = "Marvel Studios";
Hulk.distribuidora = "Marvel Studios";
Hulk.plataforma = "Cine";
Hulk.esMCU = true;


let StarWars:Peliculas
StarWars = new Peliculas("StarWars",2019,"USA","Acción/Fantasia");
StarWars.idioma = "Ingles"
StarWars.nacionalidad = "USA";
StarWars.nombreProtagonista ="Harrison Ford";
StarWars.actores =[HarrisonFord];
StarWars.director = "J.J. Abrahams";
StarWars.guionista = "George Lucas";
StarWars.productora = "Lucas Films";
StarWars.distribuidora = "Walt Disney";
StarWars.plataforma = "Cine";
StarWars.esMCU = false;


VengadoresEndgame.mostrarAtributosPeliculas()

let arayPeliculas : Iemedebe
arayPeliculas = new Iemedebe([StarWars,Hulk,PiratasDelCaribe]);

arayPeliculas.monstrarAtributosIemedebe()

