export declare class Produto {
    nome: string;
    valor: number;
    id: string;
    constructor(nome: string, valor: number);
    cadastrar(): void;
    static listar(): Produto[];
    static excluir(id: string): void;
    static alterar(produtoAlterado: Produto): void;
    static buscarProduto(id: string): Produto | undefined;
}
//# sourceMappingURL=produto.d.ts.map