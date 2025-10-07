import { Administrador } from "./classes/administrador.js";
const formCadAdm = document.getElementById("formCadAdm");
const txtNome = document.getElementById("txtNome");
const txtEmail = document.getElementById("txtEmail");
const txtSenha = document.getElementById("txtSenha");
const btnSubmit = document.getElementById("btnSubmit");
let params = new URLSearchParams(window.location.search);
let id = params.get("id");
window.onload = () => {
    if (id) {
        btnSubmit.textContent = "Alterar";
        carregarDados(id);
    }
};
const divMensagem = document.getElementById("divMensagem");
function exibirMensagem(color, msg) {
    divMensagem.style.color = color;
    divMensagem.textContent = msg;
}
formCadAdm.addEventListener("submit", (event) => {
    event.preventDefault();
    const nome = txtNome.value;
    const email = txtEmail.value;
    const senha = txtSenha.value;
    if (!id) {
        const adm = new Administrador(nome, email, senha);
        adm.cadastrar();
        exibirMensagem("green", "Cadastro realizado com sucesso!");
    }
    else {
        let admAlterado = new Administrador(nome, email, senha);
        admAlterado.id = id;
        Administrador.alterar(admAlterado);
        exibirMensagem("green", "Alteração realizada com sucesso!");
    }
});
function carregarDados(id) {
    let adm = Administrador.buscarAdm(id);
    if (adm) {
        txtNome.value = adm.nome;
        txtEmail.value = adm.email;
        txtSenha.value = adm.senha;
    }
}
//# sourceMappingURL=cadAdmSimplificado.js.map