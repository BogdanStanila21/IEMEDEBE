export class Profesional {
    nombre:string
    edad  :number     //atributos o propiedades
    sexo  :string
    peso  :Number
    altura:number
    colorPelo:string
    colorOjos:string
    raza:string
    estaRetirado:boolean
    nacionalidad:string
    numeroDeOscars:number
    profesion:string

constructor (nombre:string,edad:number,sexo:string,peso:number,altura:number,colorPelo:string,colorOjos:string,raza:string,estaRetirado:boolean,nacionalidad:string,numeroDeOscars:number,profesion:string){

    this.nombre=nombre
    this.edad=edad
    this.sexo=sexo
    this.peso=peso
    this.altura=altura
    this.colorPelo=colorPelo
    this.colorOjos=colorOjos
    this.raza=raza
    this.estaRetirado=estaRetirado
    this.nacionalidad=nacionalidad
    this.numeroDeOscars=numeroDeOscars
    this.profesion=profesion
}

mostrarAtributosProfesional(){
    console.log("----------------------------------------------")
    console.log(this.nombre)
    console.log("----------------------------------------------")
    console.log("Edad: "+this.edad)
    console.log("Sexo: "+this.sexo)
    console.log("Nacionalidad: "+this.nacionalidad)
    console.log("Profesion: "+this.profesion)
    console.log("Nº Ocars: "+this.numeroDeOscars)
    console.log("Esta retirad@? "+this.estaRetirado)
    console.log("Peso: "+this.peso)
    console.log("Altura: "+this.altura)
    console.log("Color de pelo: "+this.colorPelo)
    console.log("Color de ojos: "+this.colorOjos)
    console.log("Raza: "+this.raza)
    console.log("______________________________________________")
    console.log("______________________________________________")
    


}
}
