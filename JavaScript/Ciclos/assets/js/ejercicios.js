
//escribe un ciclo anidado que imprima el siguiente patrón

/*
*
**
***
****
*****
*/

/* for (let i=1; i<=5; i++){    //1 por cada vuelta que da el ciclo padre, dan las 5 del ciclo hijo
    for (let j=1; j<=i; j++){     //5; se le tiene que asignar su propia variable, no puede usar la misma
        document.write("*");
        //console.log("ciclo hijo\n")
    }
    document.write("<br>") //   \n se puede utilizar para insertar un salto de línea, como un enter
  } */

  //Ejercicio 1
  const ejercicio1 = (xValue) => {
    if (xValue < 0) {
      return console.log('Ingresa un número positivo')
    } else {
      while (xValue > 0) {
        xValue  -= 0.5;
        console.log(xValue);
      }
    }
  }
  
  ejercicio1(4)

  
//Ejercicio 2

const ejercicio2 = () => {
    for (let i = 1; i <= 100; i++) {
      if (i%2 === 1) {
        console.log(i);
      }
    }
  }
  
  ejercicio2()

  //Ejercicio 3

  const ejercicio3 = (n) => {
    let i = 1;
    let str = [];
    while (i <= n) {
      str += `[${i}] `
      i++;
    }
    console.log(str);
  }
   
  ejercicio3(10)


//Ejercicio 4

const ejercicio4 = (n) => {
    let res = 0;
    for (let i = 1; i <= n; i++) {
      debugger
          res = res + i;
    }
    console.log(res);
  }
  
  ejercicio4(5)
  
  
  