export class Produto {
    public id: string;
constructor(
public nome: string,
public valor: number,
){
this.id = crypto.randomUUID();
this.nome = nome;
this.valor = valor;
}

cadastrar(): void{
//Recupera a lista de produtos armazenada no localstorage
const listaProduto: Produto[] = JSON.parse(localStorage.getItem("listaProduto") || "[]");
//Adiciona o Produto atual a lista
listaProduto.push(this);
//Salva a lista atualizada no localstorage
localStorage.setItem("listaProduto", JSON.stringify(listaProduto));
}

static listar(): Produto[]{
const listaProduto: Produto[] = JSON.parse(localStorage.getItem("listaProduto") || "[]");
return listaProduto;
}

static excluir(id: string): void{
let listaProduto: Produto[] = JSON.parse(localStorage.getItem("listaProduto") || "[]");
listaProduto = listaProduto.filter((produto: Produto) => produto.id !== id);
localStorage.setItem("listaProduto", JSON.stringify(listaProduto));
}
}