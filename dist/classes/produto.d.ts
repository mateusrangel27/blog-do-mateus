export declare class Produto {
    nome: string;
    valor: number;
    id: string;
    constructor(nome: string, valor: number);
    cadastrar(): void;
    static listar(): Produto[];
    static excluir(id: string): void;
}
//# sourceMappingURL=produto.d.ts.map