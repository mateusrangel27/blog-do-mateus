export class Produto {
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
        this.id = crypto.randomUUID();
        this.nome = nome;
        this.valor = valor;
    }
    cadastrar() {
        // Recupera a lista de produtos armazenada no localStorage
        const listaProduto = JSON.parse(localStorage.getItem("listaProduto") || "[]");
        // Adiciona o produto atual à lista
        listaProduto.push(this);
        // Salva a lista atualizada no localStorage
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
    static alterar(produtoAlterado) {
        let listaProduto = JSON.parse(localStorage.getItem("listaProduto") || "[]");
        listaProduto = listaProduto.map((produto) => {
            if (produto.id === produtoAlterado.id) {
                return produtoAlterado;
            }
            return produto;
        });
        localStorage.setItem("listaProduto", JSON.stringify(listaProduto));
    }
    static buscarProduto(id) {
        const listaProduto = this.listar();
        const produto = listaProduto.find((produto) => produto.id === id);
        return produto;
    }
}
//# sourceMappingURL=produto.js.map