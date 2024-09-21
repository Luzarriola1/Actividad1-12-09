let url = "https://pokeapi.co/api/v2/pokemon/";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    let datos = data.results
    crearCard(datos)
  });

const container = document.getElementById("container")

function crearCard(data) {
  let cardsHTML = ""

  for (let i = 0; i < data.length; i++) {
    let user = data[i]

    cardsHTML += `
    <div class="caja">
        <p>Nombre: ${user.name}</p>
        <p>Url: <a href="${user.url}" target="_blank">${user.url}</a></p>
        </div>

  `
  }

  container.innerHTML = cardsHTML
}
