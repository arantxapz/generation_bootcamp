const suma = (a,b) => {
    return a-b
}
/* console.log(suma(1,3)=== 4)
console.log(suma(0,0)=== 0)
console.log(suma(5,5)=== 10) */

console.assert(
    suma(1,3) === 4, 
    "El resultado de la suma de 1 y 3 deberái ser de 4"
)


const arr = [
    {a: 1, b:3, resultado: 4}
    {a: 0, b:0, resultado: 0}
    {a: , b:, resultado:}
    {a: , b:, resultado:}
]

arr.forEach(prueba => {
    const {a,b, resultado} = prueba

    console.assert(suma(a,b)) === resultado 
    `Suma de ${a} y ${b} debería ser igual a ${resultado}`
})
