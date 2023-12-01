let listaAnimais = [
  {
    idAnimal: 1,
    nome: "Barão",
    descricao:
      "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam     nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctustristique est, a faucibus elit. Vivamus et dapibus mi, id facilisisnunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper",
    img: "./img/img1.webp",
  },
  {
    idAnimal: 2,
    nome: "Barão",
    descricao:
      "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam     nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctustristique est, a faucibus elit. Vivamus et dapibus mi, id facilisisnunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper",
    img: "./img/img2.jpg",
  },
  {
    idAnimal: 3,
    nome: "Barão",
    descricao:
      "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam     nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctustristique est, a faucibus elit. Vivamus et dapibus mi, id facilisisnunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper",
    img: "./img/img3.webp",
  },
  {
    idAnimal: 4,
    nome: "Barão",
    descricao:
      "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam     nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctustristique est, a faucibus elit. Vivamus et dapibus mi, id facilisisnunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper",
    img: "./img/img4.jpg",
  },
  {
    idAnimal: 5,
    nome: "Barão",
    descricao:
      "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam     nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctustristique est, a faucibus elit. Vivamus et dapibus mi, id facilisisnunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper",
    img: "./img/img5.webp",
  },
];

const criarCards = () => {
  let container = document.querySelector(".container");

  listaAnimais.forEach((elemento) => {
    let card = `
        <div class="card">
            <img class="card-img" src="${elemento.img}" />
            <h2 class="card-titulo">${elemento.nome}</h2>
            <p class="card-descricao"> ${elemento.descricao}</p>
            <a class="card-botao" idAnimal="${elemento.idAnimal}"> ADOTAR </a>
        </div>
    `;
    container.innerHTML += card;
  });
};

window.addEventListener("load", () => {
  criarCards();

  let cards = document.querySelectorAll(".card");
  cards.forEach((elemento) => {
    elemento.addEventListener("mouseover", () => {
      elemento.classList.add("change-scale");
    });

    elemento.addEventListener("mouseout", () => {
      elemento.classList.remove("change-scale");
    });

    elemento.lastElementChild.addEventListener("click", (event) => {
      event.preventDefault();

      let animalSelecionado =
        elemento.lastElementChild.getAttribute("idAnimal");
      sessionStorage.setItem("idAnimal", animalSelecionado);
      document.cookie = `idAnimal=${animalSelecionado}`;
      window.location.href = "./adotar.html";
    });
  });
});
