import { Produto } from "./classes/produto.js";
const formCadProduto = document.getElementById("formCadProduto");
const txtNome = document.getElementById("txtNome");
const txtValor = document.getElementById("txtValor");
const divMensagem = document.getElementById("divMensagem");
// lista de produtos cadastrados (poderia ser substituída por uma classe AdmProduto)
const produtos = [];
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
    const produto = new Produto(nome, valor);
    produto.cadastrar(); // simulando o cadastro
    exibirMensagem("green", "Cadastro realizado com sucesso!");
    formCadProduto.reset(); // limpa os campos
});
//# sourceMappingURL=cadProduto.js.map