import { Produto } from "./classes/produto.js";

window.onload = () => {
  carregarTabela();
};

function carregarTabela() {
  const listaProduto = Produto.listar();
  const tabela = document.getElementById("tabela-produto") as HTMLTableElement;

  tabela.innerHTML = `
    <tr>
      <th>Nome</th>
      <th>Valor</th>
      <th colspan="2">Ações</th>
    </tr>
  `;

  listaProduto.forEach(produto => {
    const linha = tabela.insertRow();
    linha.insertCell().textContent = produto.nome;
    linha.insertCell().textContent = String(produto.valor);

    // Botão Excluir
    let btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.addEventListener("click", () => {
      excluirProduto(produto.id);
    });
    linha.insertCell().appendChild(btnExcluir);

    // Botão Alterar
    let btnAlterar = document.createElement("button");
    btnAlterar.textContent = "Alterar";
    btnAlterar.addEventListener("click", () => {
      alterarProduto(produto.id);
    });
    linha.insertCell().appendChild(btnAlterar);
  });
}

function excluirProduto(id: string) {
  if (confirm("Deseja realmente excluir este produto?")) {
    Produto.excluir(id);
    carregarTabela();
  }
}

function alterarProduto(id: string) {
  // Redireciona para o formulário de cadastro com o ID na URL
  window.location.href = `cadProduto.html?id=${id}`;
}