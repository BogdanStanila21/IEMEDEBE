import{Profesional} from "./Profesional"
export class Peliculas
{
    titulo: string;
    genero: string;
    idioma: string;
    nacionalidad: string;
    anyoEstreno: number; 
    nombreProtagonista: string;
    actores: Profesional []
    director: string;
    guionista: string;
    productora: string;
    distribuidora: string;
    plataforma: string;
    esMCU: boolean;
        
    constructor (titulo:string, anyoEstreno:number, nacionalidad:string, genero: string)
        {
            this.titulo = titulo
            this.anyoEstreno = anyoEstreno
            this.nacionalidad = nacionalidad
            this.genero = genero
        }

        mostrarAtributosPeliculas()
        {            
            console.log("----------------------------------------")
            console.log(this.titulo)
            console.log("----------------------------------------")
            console.log("Título: " + this.titulo)
            console.log("Género: " + this.genero)
            console.log("Idioma: " + this.idioma)
            console.log("País: " + this.nacionalidad)
            console.log("Año: " + this.anyoEstreno)
            console.log("Protagonizada por: " + this.nombreProtagonista)
            console.log("Reparto: " + this.nombreActores())
            console.log("Dirigida por: " + this.director)
            console.log("Guión: " + this.guionista)
            console.log("Productora: " + this.productora)
            console.log("Distribuidora: " + this.distribuidora)
            console.log("Plataforma: " + this.plataforma)
            console.log("Pertenece al MCU: " + this.esMCU)
            console.log("________________________________________")
            console.log("________________________________________")
        }

        nombreActores():string
        {
            let resultado: string = " "
        
            for (let i= 0 ; i < this.actores.length ; i++)
            {
                resultado += this.actores[i].nombre + "; "
            }
            return resultado
        }
}


