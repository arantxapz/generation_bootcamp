class Pokemon {
    //atributos
    #nombre = "";
    #edad = 0;
    #evolucion= "";
   

    constructor (nombre, edad, evolucion){
        this.#nombre=nombre;
        this.#edad =edad;
        this.#evolucion = evolucion;
    }

get nombre(){
    return this.#nombre
}

    atacar(){
        return console.log(`${this.#nombre} está atacando`)
    }

    evolucionar(){
        // || operador de cortocircuito
        // false => toma el valor que haya hacia la izquierda
        // true => toma el valor que haya hacia la derecha
      /*   const EVOLUCION = this.#evolucion; */
        let mensaje = "No puedo evolucionar"

      /*   if (this.#evolucion){
            mensaje = `${this.#nombre} ha evolucionado a ${this.#evolucion}`
            this.#nombre = this.#evolucion;
        } */

        if(this.#evolucion === ""){
            let mensaje= "";
            console.log(mensaje)
        }else{
            mensaje = `${this.#nombre} ha evolucionado a ${this.#evolucion}`
            this.#nombre = this.#evolucion;
            console.log(mensaje)
        }

        return console.log(mensaje);
    }
}

/* const charmander = new Pokemon ("Charmander", 2, "", "Fuego");
const bulbasaur = new Pokemon ("Bulbasaur", 1, "Ivysaur", "Planta");

console.log(charmander)
console.log(bulbasaur)

charmander.atacar();
bulbasaur.atacar();

charmander.evolucionar();

console.log(charmander) */


//clase hija ----clase padre
class TipoFuego extends Pokemon{
//atributos
#tipo = "";

constructor(nombre, edad, evolucion, tipo){
    super(nombre, edad, evolucion) //llamar elementos del constructor de la clase padre
    this.#tipo = "fuego"
}
atacar(){
    return console.log(`${this.nombre} está lanzando un ataque de tipo ${this.#tipo}`)
}
}

const charmander = new TipoFuego("Charmander", 2, "Charmeleon");
console.log(charmander)

charmander.atacar();
charmander.evolucionar();