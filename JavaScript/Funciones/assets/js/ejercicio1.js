const invertir = (palabra="") => {
    
    if(palabra.length <= 1)return console.warn("No se ingresó texto");
    if(typeof(palabra)!== "string") return console.error("El valor ingresado no es una palabra");    
 

    let arreglo = palabra.split(""); //divide y convierte la cadena de texto en un arreglo
    let reverso= arreglo.reverse()
    let unir= reverso.join("")

return console.log(unir)
}

invertir ("Arantxa");


