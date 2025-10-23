import { Produto } from "./classes/produto.js";
const formCadProduto = document.getElementById("formCadProduto");
const txtNome = document.getElementById("txtNome");
const txtValor = document.getElementById("txtValor");
const btnSubmit = document.getElementById("btnSubmit");
const divMensagem = document.getElementById("divMensagem");
let params = new URLSearchParams(window.location.search);
let id = params.get("id");
window.onload = () => {
    if (id) {
        btnSubmit.textContent = "Alterar";
        carregarDados(id);
    }
};
function exibirMensagem(color, msg) {
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
    }
    else {
        let produtoAlterado = new Produto(nome, valor);
        produtoAlterado.id = id;
        Produto.alterar(produtoAlterado);
        exibirMensagem("green", "Alteração realizada com sucesso!");
    }
});
function carregarDados(id) {
    let produto = Produto.buscarProduto(id);
    if (produto) {
        txtNome.value = produto.nome;
        txtValor.value = produto.valor.toString();
    }
}
//# sourceMappingURL=cadProduto.js.map