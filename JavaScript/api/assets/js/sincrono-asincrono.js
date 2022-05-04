/* let tiempo= 5000 //milisegundos

//No bloqueante
setTimeout(()=>{
    let datos= "Arantxa"
    console.log(datos)
}, tiempo)

console.log("Hola")
 */
//Promesa: algo del futuro que puede pasar 
const datos = [
    {
        nombre: "Arantxa",
        edad: 26,
    },
    {
        nombre: "Luis",
        edad: 32,
    },
    {
        nombre: "Saúl",
        edad: 18,
    },

]

function obtenerDatos (){
    return new Promise((resolve, reject) =>{
    setTimeout(()=> {
        resolve (datos)
    }, 3000)
})
}

console.log(obtenerDatos());

obtenerDatos().then((datos)=> {
    console.log(datos);
}); //una vez que la promesa se cumpla 

async function obtenerDatosAsync (){
    const datosObtenidos = await obtenerDatos()
    console.log(datosObtenidos);
}
obtenerDatosAsync()