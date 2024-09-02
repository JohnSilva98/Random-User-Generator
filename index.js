document.addEventListener("DOMContentLoaded", function () {
  const userTitle = document.querySelector("#userTitle");
  const userName = document.querySelector(".userName");
  const userPhoto = document.querySelector("#usrPhoto");
  const icon = document.querySelectorAll(".icon");
  const URL = "https://randomuser.me/api/?nat=BR,US,CH";

  icon.forEach(function (item) {
    item.addEventListener("mouseover", function () {
      let titleData = item.getAttribute("data-title");
      let dataValue = item.getAttribute("data-value");
      userTitle.innerHTML = titleData;
      userName.innerHTML = dataValue;

      let activeClass = document.querySelectorAll(".active");
      activeClass.forEach(function (active_) {
        active_.className = active_.className.replace("active", "");
      });
      item.className += "active";
    });
  });

  async function callAPI() {
    try {
      const res = await fetch(URL);
      if (res.status === 200) {
        const data = await res.json();
        const user = data.results[0]; // Os dados da API estão em 'results'
        userName.innerHTML = `${user.name.first} ${user.name.last}`;
        // Cria um elemento de imagem e define o seu src
        const img = document.createElement("img");
        img.src = user.picture.large;
        // Limpa o conteúdo da div e adiciona a imagem
        userPhoto.innerHTML = ""; // Limpa qualquer conteúdo existente
        userPhoto.appendChild(img);
        let content = `<ul class="info">
            <li data-title="My name is" data-value=" ${user.name.first} ${user.name.last}" class="icon">
              <img src="icons/circle-user.svg" alt="" />
            </li>
            <li data-title="My email is" data-value=" ${user.email}" class="icon">
              <img src="icons/mail.svg" alt="" />
            </li>
            <li data-title="My age is" data-value="${user.age}" class="icon">
              <img src="icons/calendar.svg" alt="" />
            </li>
            <li data-title="My adress is" data-value="${user.location}" class="icon">
              <img src="icons/map-pin-house.svg" alt="" />
            </li>
            <li data-title="My phone is" data-value="123345678" class="icon">
              <img src="icons/phone.svg" alt="" />
            </li>
            <li data-title="My my password is" data-value="pass123" class="icon">
              <img src="icons/lock-keyhole.svg" alt="" />
            </li>
            </ul>`;
      } else {
        console.error("Erro na requisição:", res.status);
      }
    } catch (error) {
      console.error("Erro ao chamar a API:", error);
    }
  }

  callAPI();
});
