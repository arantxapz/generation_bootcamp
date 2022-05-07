class Persona{
    //atributos
    #id= 0
    static #contador = 0
    #nombre= "";
    #edad= 0;
    #correo= "";
    
    constructor(nombre, edad, correo){
    this.#nombre = nombre;
    this.#edad= edad;
    this.#correo=correo;
    this.#id= ++Persona.#contador
    }
    //setters & getters (fijar y obtener). Se usan y se llaman como si fueran atributos
    get getNombre(){
        return this.#nombre;
    }
    set setNombre(nombre){
        this.#nombre = nombre;
    }

    cambiarNombre(nombre){
        this.#nombre = nombre;
    }

    get getEdad(){
        return this.#edad;
    }

    set setEdad(edad){
        this.#edad = edad
    }

    get getCorreo(){
        return this.#correo;
    }

    set setCorreo(correo){
        this.#correo = correo
    }

    #saludar (){
        let mensaje = `Hola mi nombre es ${this.#nombre}`
        return mensaje;
    }

    mostrarSaludo(){
        return this.#saludar();
    }

    static mostrarContador(){
        return this.#saludar()
    }
}

const persona1 = new Persona("Pedro", 30, "pedro@gmail.com")
const persona2 = new Persona("Gabriel", 25, "gabriel@gmail.com")
const persona3 = new Persona ("Martin", 40, "martin@gmail.com")
console.log(persona1.nombre)



//persona1.cambiarNombre("Antonio") 
//console.log(persona1)
persona1.setNombre= "José"
persona2.setNombre= "Raúl"
/*persona1.setEdad="24"
persona1.setCorreo= "jose@gmail.com" */
console.log(persona1)
console.log(persona2)
console.log(persona3)

/* console.log(persona1.saludar())
console.log(persona2.saludar()) */
console.log(persona1.mostrarSaludo())
console.log(persona2.mostrarSaludo())

/* console.log(Persona.#contador) */

console.log(Persona.mostrarContador())