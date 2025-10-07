export class Produto {
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
        this.id = crypto.randomUUID();
        this.nome = nome;
        this.valor = valor;
    }
    cadastrar() {
        //Recupera a lista de produtos armazenada no localstorage
        const listaProduto = JSON.parse(localStorage.getItem("listaProduto") || "[]");
        //Adiciona o Produto atual a lista
        listaProduto.push(this);
        //Salva a lista atualizada no localstorage
        localStorage.setItem("listaProduto", JSON.stringify(listaProduto));
    }
    static listar() {
        const listaProduto = JSON.parse(localStorage.getItem("listaProduto") || "[]");
        return listaProduto;
    }
    static excluir(id) {
        let listaProduto = JSON.parse(localStorage.getItem("listaProduto") || "[]");
        listaProduto = listaProduto.filter((produto) => produto.id !== id);
        localStorage.setItem("listaProduto", JSON.stringify(listaProduto));
    }
}
//# sourceMappingURL=produto.js.map