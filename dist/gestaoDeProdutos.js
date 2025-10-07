import { Produto } from "./classes/produto.js";
window.onload = () => {
    carregarTabela();
};
function carregarTabela() {
    const listaProduto = Produto.listar();
    const tabela = document.getElementById("tabela-produto");
    tabela.innerHTML = `
<tr>
<th>Nome</th>
<th>Valor</th>
<th>ações</th>
</tr>
`;
    listaProduto.forEach(produto => {
        const linha = tabela.insertRow();
        linha.insertCell().textContent = produto.nome;
        linha.insertCell().textContent = String(produto.valor);
        let btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
        btnExcluir.addEventListener("click", () => {
            excluirProduto(produto.id);
        });
        linha.insertCell().appendChild(btnExcluir);
    });
}
function excluirProduto(id) {
    Produto.excluir(id);
    carregarTabela();
}
//# sourceMappingURL=gestaoDeProdutos.js.map