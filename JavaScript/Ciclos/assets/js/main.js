/* Ciclos

for
for..... in
.forEach      */


//imprimir la frase "hola mundo" 10 veces

//(Se inicializa la variable; condición; modificador del contador)

/* for ( let i=1; i<=10; i++){
    console.log("Hola mundo", i);
    debbuger;
} */
//iteración= una vuelta de cada ciclo


// while (condicion)

let control = 1;    //se debe asignar una variable de control; inicia cuenta desde 0 al ejecutar

while (control<=5) {
    console.log("Hola desde un ciclo while", control);
}

console.log(control); //modificador de la variable de control


//do... while

do{
    console.log("hola desde un do... while", i);
    i++;
    } while(i<=5);