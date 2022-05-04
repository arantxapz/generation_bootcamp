const url = "https://jsonplaceholder.typicode.com/albums/1/photos"
const card = document.getElementById("cards")



fetch(url).then (respuesta => respuesta.json())
.then(datos=>datos.forEach(color => {
    cards.innerHTML += `
        <div class="col mb-4">
            <div class="card">
                <img src="${color.url}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${color.id}</h5>
                        <p class="card-text">${color.title}</p>
                    </div>
                </div>
            </div>
        </div>`;
    }))
    