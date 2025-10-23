import { Produto } from "./classes/produto.js";

const formCadProduto = document.getElementById("formCadProduto") as HTMLFormElement;
const txtNome = document.getElementById("txtNome") as HTMLInputElement;
const txtValor = document.getElementById("txtValor") as HTMLInputElement;
const btnSubmit = document.getElementById("btnSubmit") as HTMLButtonElement;
const divMensagem = document.getElementById("divMensagem") as HTMLDivElement;

let params = new URLSearchParams(window.location.search);
let id = params.get("id");

window.onload = () => {
  if (id) {
    btnSubmit.textContent = "Alterar";
    carregarDados(id);
  }
};

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

  if (!id) {
    const produto = new Produto(nome, valor);
    produto.cadastrar();
    exibirMensagem("green", "Produto cadastrado com sucesso!");
    formCadProduto.reset();
  } else {
    let produtoAlterado = new Produto(nome, valor);
    produtoAlterado.id = id;
    Produto.alterar(produtoAlterado);
    exibirMensagem("green", "Alteração realizada com sucesso!");
  }
});

function carregarDados(id: string) {
  let produto = Produto.buscarProduto(id);

  if (produto) {
    txtNome.value = produto.nome;
    txtValor.value = produto.valor.toString();
  }
}