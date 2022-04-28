const nombre = "Arantxa";
const nombre2 = new String("Perez")

const persona = new Object();
persona.nombre = "Arantxa"
persona.apellido= "Perez"
persona.edad = 26

console.log(persona)

const nuevaPersona = { //se pueden guardar dentro de los objetos arreglos o funciones, se identifican por un new o {}
    nombreCompleto: {
    nombre: "Arantxa", 
    apellido: "Espindola" //se separan por comas
    },
    edad: 26,
    pasatiempos: ["caminar", "patinar", "musica"],
    tieneTrabajo:true,
    //método: cuando guardamos dentro de un objeto una función
    saludar: function(){
        console.log("Hola")
    },
    sumar: function (n1, n2){
        console.log(`El resultado de la suma es ${n1 + n2}`)
    }}



"Hola".length //atributo o propiedad
nuevaPersona.saludar() //método

// acceder a un elemento específico de un objeto con .

console.log(nuevaPersona.edad)
console.log(nuevaPersona.nombreCompleto.nombre)
console.log(nuevaPersona.pasatiempos[1])

nuevaPersona.saludar()
nuevaPersona.sumar(5,10)

//Para cambiar un valor: si se asigna un nuevo valor, sobreescribe al anterior
nuevaPersona.edad= 10
console.log(nuevaPersona.edad)

//Agregar nuevo atributo
nuevaPersona.colorFavorito= "morado"
console.log(nuevaPersona.colorFavorito)

//Métodos que podemos utilizar con objetos que ya vienen por defecto
console.log(nuevaPersona.hasOwnProperty("edad")) //regresa un true/false
/* console.log(object.values(nuevaPersona)) */
/* console.log(keys(nuevaPersona)) */

const Arantxa = { 
    nombreCompleto: {
    nombre: "Arantxa", 
    apellido: "Perez"
    },
    edad: 26,
    pasatiempos: ["caminar", "patinar", "musica"]}

    const Juan = {
        nombreCompleto: {
        nombre: "Juan",
        apellido: "Vazquez"
        },
        edad: 30,
        pasatiempos: ["coches", "animales","música"]
    }

    const Mitzi = {
        nomCompleto: {
            nom: "Mitzi",
            app: "Hernandez"
        },
        edad: 23,
        pasatiempos: ["jugar", "dibujar", "ver series"],
    }
    
    const Katia = {
        nombreCompleto: {
          nombre: "Katia",
          apellido: "Alvarez",
        },
        edad: 28,
        pasatiempos: ["Cine", "Musica", "Baile"],
      }
      
      const cohorte12=[Arantxa,Juan,Mitzi,Katia]
      console.log(cohorte12[0])

    for (let i=0; i<cohorte12.length; i++){
    if(cohorte12[i].pasatiempos.includes("musica")){
        console.log(cohorte12[i].nombreCompleto.nombre)
    }
    }