import { Administrador } from "./classes/administrador.js";

window.onload = () => {
carregarTabela();
}

function carregarTabela(){
    const listaAdm = Administrador.listar();
const tabela = document.getElementById("tabela-adm") as HTMLTableElement;
tabela.innerHTML = `
<tr>
<th>Nome</th>
<th>E-mail</th>
<th colspan = "2">ações</th>
</tr>
`;
listaAdm.forEach(adm => {
const linha = tabela.insertRow();
linha.insertCell().textContent = adm.nome;
linha.insertCell().textContent = adm.email;
let btnExcluir = document.createElement("button");
btnExcluir.textContent = "Excluir";
btnExcluir.addEventListener("click", () => {
    excluirAdm(adm.id);
});
linha.insertCell().appendChild(btnExcluir);
let btnAlterar = document.createElement("button");
btnAlterar.textContent = "Alterar";
btnAlterar.addEventListener("click", () => {
alterarAdm(adm.id);
});
linha.insertCell().appendChild(btnAlterar);
});
}

function excluirAdm(id: string){

    if(confirm("Deseja realmente excluir este registro?")){
Administrador.excluir(id);
carregarTabela();
    }

}

function alterarAdm(id: string){
window.location.href = `cadAdmSimplificado.html?id=${id}`;

}