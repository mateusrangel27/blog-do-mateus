export class Produto {
  public id: string;

  constructor(
    public nome: string,
    public valor: number
  ) {
    this.id = crypto.randomUUID();
    this.nome = nome;
    this.valor = valor;
  }

  cadastrar(): void {
    // Recupera a lista de produtos armazenada no localStorage
    const listaProduto: Produto[] = JSON.parse(localStorage.getItem("listaProduto") || "[]");

    // Adiciona o produto atual à lista
    listaProduto.push(this);

    // Salva a lista atualizada no localStorage
    localStorage.setItem("listaProduto", JSON.stringify(listaProduto));
  }

  static listar(): Produto[] {
    const listaProduto: Produto[] = JSON.parse(localStorage.getItem("listaProduto") || "[]");
    return listaProduto;
  }

  static excluir(id: string): void {
    let listaProduto: Produto[] = JSON.parse(localStorage.getItem("listaProduto") || "[]");
    listaProduto = listaProduto.filter((produto: Produto) => produto.id !== id);
    localStorage.setItem("listaProduto", JSON.stringify(listaProduto));
  }

  static alterar(produtoAlterado: Produto): void {
    let listaProduto: Produto[] = JSON.parse(localStorage.getItem("listaProduto") || "[]");

    listaProduto = listaProduto.map((produto: Produto) => {
      if (produto.id === produtoAlterado.id) {
        return produtoAlterado;
      }
      return produto;
    });

    localStorage.setItem("listaProduto", JSON.stringify(listaProduto));
  }

  static buscarProduto(id: string): Produto | undefined {
    const listaProduto: Produto[] = this.listar();
    const produto = listaProduto.find((produto) => produto.id === id);
    return produto;
  }
}