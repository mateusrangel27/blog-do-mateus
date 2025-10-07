import {Administrador} from "./classes/administrador.js";

const formCadAdm = document.getElementById("formCadAdm") as HTMLFormElement;
const txtNome = document.getElementById("txtNome") as HTMLInputElement;
const txtEmail = document.getElementById("txtEmail") as HTMLInputElement;
const txtSenha = document.getElementById("txtSenha") as HTMLInputElement;
const btnSubmit = document.getElementById("btnSubmit") as HTMLButtonElement;
let params = new URLSearchParams(window.location.search);
let id = params.get("id");

window.onload = () => {
if(id){
btnSubmit.textContent = "Alterar";
carregarDados(id);
}

}
const divMensagem = document.getElementById("divMensagem") as HTMLDivElement;

function exibirMensagem(color: string, msg: string){
    divMensagem.style.color = color;
    divMensagem.textContent = msg;
}

formCadAdm.addEventListener("submit", (event) => {
event.preventDefault();

const nome = txtNome.value;
const email = txtEmail.value;
const senha = txtSenha.value;

if(!id){
const adm = new Administrador(nome, email, senha);
adm.cadastrar();
exibirMensagem("green", "Cadastro realizado com sucesso!");
}else{
let admAlterado = new Administrador(nome, email, senha);
admAlterado.id = id;
Administrador.alterar(admAlterado);
exibirMensagem("green", "Alteração realizada com sucesso!");
}

});

function carregarDados(id: string){
let adm = Administrador.buscarAdm(id);

if(adm){
txtNome.value = adm.nome;
txtEmail.value = adm.email;
txtSenha.value = adm.senha;
}
}