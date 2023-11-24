let formulario = document.querySelector("form");

const validarCampos = (nome, tel, email, renda, residencia, opcao) => {
  let control = true;
  if (nome.value.trim() == "") {
    nome.classList.add("erro");
    control = false;
  }
  if (tel.value.trim() == "") {
    tel.classList.add("erro");
    control = false;
  }
  if (email.value.trim() == "") {
    email.classList.add("erro");
    control = false;
  }

  if (renda == null) {
    document.querySelector("#erro-renda").classList.add("msgm-erro--active");
    control = false;
  }

  return control;
};

let nome = document.querySelector("#nome");
nome.addEventListener("blur", () => {
  nome.style.backgroundColor = "pink";
  console.log("entrou");
});

formulario.addEventListener("submit", (event) => {
  let nome = document.querySelector("#nome");
  let tel = document.querySelector("#telefone");
  let email = document.querySelector("#email");
  let renda = document.querySelector("input[name='renda']:checked");
  let residencia = document.querySelector("#residencia");
  let opcao = residencia.options[residencia.selectedIndex];
  console.log(renda);

  if (validarCampos(nome, tel, email, renda, residencia, opcao)) {
    let adotante = {
      nome: nome.value,
      tel: telefone.value,
      email: email.value,
      renda: renda.value,
      residencia: opcao.value,
    };

    console.log(adotante);
  } else event.preventDefault();
});
