// este es un nodo de comentario

const $titulo= document.querySelector("h1");
const $parr= document.querySelector("p");
const $card= document.querySelector(".card");

//nodeName
console.log($parr.nodeName);
console.log($titulo.nodeName);


//textContent
console.log($parr.textContent);
$parr.textContent+="Hola Mundo!";

$titulo.textContent="Modificando elementos con JavaScript"

//innerText - no se recomienda usar

//innerHTML- agrega elementos de html dentro de un elemento que estemos especificando
console.log($parr.innerHTML);

//$parr.innerHTML = '<a href="#">Este es un enlace</a>';

//outerHTML- reemplaza todo, incluido el elemento que seleccionamos
$parr.outerHTML = '<a href="#">Este es un enlace</a>'; //comillas diferentes para declarar el elemento

//Crear elementos de html

console.log(document);

function crearElemento(){
    const img = document.createElement("img");
    img.src = "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Que_debes_saber_antes_de_adoptar_un_gatito.jpg?itok=guFplHEU"
    //appendChild permite anexar un elemento a otro como elemento hijo
    $card.appendChild(img);
}

crearElemento();


