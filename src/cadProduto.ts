import {Produto} from "./classes/produto.js";

const formCadProduto = document.getElementById("formCadProduto") as HTMLFormElement;
const txtNome = document.getElementById("txtNome") as HTMLInputElement;
const txtValor = document.getElementById("txtValor") as HTMLInputElement;
const divMensagem = document.getElementById("divMensagem") as HTMLDivElement;

    // lista de produtos cadastrados (poderia ser substituída por uma classe AdmProduto)
const produtos: Produto[] = [];

function exibirMensagem(color: string, msg: string) {
  divMensagem.style.color = color;
  divMensagem.textContent = msg;
}

formCadProduto.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = txtNome.value;
  const valor = parseFloat(txtValor.value);

  if (!nome || isNaN(valor)) {
    exibirMensagem("red", "Preencha todos os campos corretamente!");
    return;
  }

  const produto = new Produto(nome, valor);
  produto.cadastrar(); // simulando o cadastro

  exibirMensagem("green", "Cadastro realizado com sucesso!");
  formCadProduto.reset(); // limpa os campos
}); 