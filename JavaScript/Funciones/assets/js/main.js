/* Funcines nos permiten reutilizar código */

function saludar (nombre ="Panchito", apellido=""){
 
    //string normal
    //console.log("Hola mi nombre es:", nombre, apellido);
   // console.log(`Hola mi nombre es: ${nombre? "Arantxa":"Desconocido"}`) //template strings o plantillas literales
return`Mi nombre es ${nombre} ${apellido}`
}

saludar("Pedro", "Perez"); //se sobreescribe el valor de la primera variable se le conoce como invocación o llamada de la función

let funcionSaludar = saludar('Felipe', 'Maqueda');
/* console.log(funcionSaludar); */

/* console.log(saludar ('Alberto', 'Hernandez')) */
/* document.write('<h1>Este es un h1</h1>')
console.log ('<h1>Este es un h1</h1>')
console.log(`<h1>Este es un h1</h1>`) //plantilla literal */

/* console.log(funcionSaludar .toLowerCase()) */

/* Función declarada */

function suma (a,b){
    return a+b;
}
console.log(suma(10,20));
//*hoisting
 


/* Funciones expresaadas | función expresión */
const resta = function (a,b){
return a-b;
}
console.log (resta(30,10)) 

//Función flecha: declarar una variable; no se puede mandar a llamar antes

/* const multiplicacion =(a, b) => {
 return a * b;
}  o:*/
const multiplicacion =(a,b) => a*b;

 console.log(multiplicacion(40,5))


 /* 
setTimeout(()=>{

},3000) */