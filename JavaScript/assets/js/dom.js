/* Alguna cosas que podemos hacer con DOM */
console.log(window.document);
console.log(document); 
console.log(document.head); /* regresa el head del documento */
console.log(document.body); /* regresa el body */
console.log(document.documentElement); /* regresa todo el html */
console.log(document.doctype);
console.log(document.charset);
console.log(document.links); /* regresa links en el documento */
console.log(document.images); /* regresa las imàgenes */
console.log(document.stylesheets); /* regresa documentos CSS */
console.log(document.scripts ); /* regresa etiquetas script */

setTimeout(()=> {
    console.log(document.getSelection().toString());
}, 3000);

document.write("Hola mundo desde document write"); /* mala práctica */
