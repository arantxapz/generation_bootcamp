const url = "https://api.thecatapi.com/v1/images/search";
const imagen = document.getElementById('imgGatito');
const boton = document.getElementById('botonGato');

boton.addEventListener('click', gato);

async function gato(){
    const infoGatitos = await fetch(url);
    const gatito = await infoGatitos.json();
    imagen.src = gatito[0].url;
}


