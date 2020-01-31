import {Peliculas} from "./Peliculas"
export class Iemedebe {
    peliculas:Peliculas[];

    constructor(peliculas:Peliculas[]){
        this.peliculas = peliculas
    }

    monstrarAtributosIemedebe(){
        console.log("****************************************")
        console.log("Mis peliculas son:")
        for (let i = 0;i<this.peliculas.length;i++){
            this.peliculas[i].mostrarAtributosPeliculas();
        }
    }

}


