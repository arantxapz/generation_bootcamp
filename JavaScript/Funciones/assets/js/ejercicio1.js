/* const invertir = (palabra="") => {
    
    if(palabra.length <= 1)return console.warn("No se ingresó texto");
    if(typeof(palabra)!== "string") return console.error("El valor ingresado no es una palabra");    
 

    let arreglo = palabra.split(""); //divide y convierte la cadena de texto en un arreglo
    let reverso= arreglo.reverse()
    let unir= reverso.join("")

return console.log(unir)
}

invertir ("Arantxa"); */

//1
const palindromo = (word) => {
    let volteada;
    nospaces = word.replace(/\s/g, '');
    volteada = nospaces.split('').reverse().join('')
      if (volteada.toLowerCase() == nospaces.toLowerCase()) {
      return true
    } else {
      return false
    }
  }
  
  console.log(palindromo('anita lava la tina'));
  
// 2
const repetir = (word, num) => {
    let phrase = [];
    for (let i = 0; i < num; i++) {
      phrase.push(word)
    }
    return phrase.join(' ');
  }
  
  console.log(repetir('Adiós mundo',10))
  
// 3
const recorte = (word, num) => {
    if (word.length < num) {
      return console.error('No hay suficientes caracteres')
    } else {
      return word.substring(0,num);
    }
  }
  
  console.log(recorte('Adiós mundo', 5));
  
// 4
const factorial = (n) => {
    if (n >= 0) {
      var total = 1; 
      for (i=1; i<=n; i++) {
        total = total * i; 
      }
      return total;
    } else {
      console.error('Introduce un número mayor o igual a cero');
    }
  }
  
  console.log(factorial(5));
  
  
