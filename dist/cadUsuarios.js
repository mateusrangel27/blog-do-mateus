const formCadUsuario = document.getElementById("formCadUsuario");
const txtNome = document.getElementById("txtNome");
const txtEmail = document.getElementById("txtEmail");
const txtSenha = document.getElementById("txtSenha");
const txtConfSenha = document.getElementById("txtConfSenha");
const divMensagem = document.getElementById("divMensagem");
function exibirMensagem(color, msg) {
    divMensagem.style.color = color;
    divMensagem.textContent = msg;
}
function validarSenha(senha, confSenha) {
    if (senha !== confSenha) {
        exibirMensagem("red", "As senhas informadas precisam ser iguais!");
        return false;
    }
    if (senha.length < 6) {
        exibirMensagem("red", "A senha deve ter no mínimo 6 caracteres.");
        return false;
    }
    if (senha.length > 8) {
        exibirMensagem("red", "A senha deve ter no máximo 8 caracteres.");
        return false;
    }
    return true;
}
formCadUsuario.addEventListener("submit", (event) => {
    event.preventDefault();
    const nome = txtNome.value;
    const email = txtEmail.value;
    const senha = txtSenha.value;
    const confSenha = txtConfSenha.value;
    if (!nome) {
        exibirMensagem("red", "Preencha seu nome, campo obrigatório.");
        return;
    }
    else if (!email) {
        exibirMensagem("red", "Preencha seu e-mail, campo obrigatório.");
        return;
    }
    else if (!senha) {
        exibirMensagem("red", "Preencha a senha, campo obrigatório.");
        return;
    }
    else if (!confSenha) {
        exibirMensagem("red", "Confirme a senha, campo obrigatório.");
        return;
    }
    else if (!validarSenha(senha, confSenha)) {
        return;
    }
    else {
        exibirMensagem("green", "Cadastro realizado com sucesso!");
    }
});
export {};
//# sourceMappingURL=cadUsuarios.js.map