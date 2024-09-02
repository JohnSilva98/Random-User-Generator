document.addEventListener("DOMContentLoaded", function () {
  const userTitle = document.querySelector("#userTitle");
  const userName = document.querySelector(".userName");
  const userPhoto = document.querySelector("#usrPhoto");

  const URL = "https://randomuser.me/api/?nat=BR,US,CH";

  async function callAPI() {
    try {
      const res = await fetch(URL);
      if (res.status === 200) {
        const data = await res.json();
        const user = data.results[0]; // Os dados da API estão em 'results'
        userName.innerHTML = ` <p>${user.name.first} ${user.name.last}</p>`;
        // Cria um elemento de imagem e define o seu src
        const img = document.createElement("img");
        img.src = user.picture.large;
        // Limpa o conteúdo da div e adiciona a imagem
        userPhoto.innerHTML = ""; // Limpa qualquer conteúdo existente
        userPhoto.appendChild(img);
      } else {
        console.error("Erro na requisição:", res.status);
      }
    } catch (error) {
      console.error("Erro ao chamar a API:", error);
    }
  }

  callAPI();
});
