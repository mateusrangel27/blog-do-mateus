export declare class Administrador {
    nome: string;
    email: string;
    senha: string;
    id: string;
    constructor(nome: string, email: string, senha: string);
    cadastrar(): void;
    static listar(): Administrador[];
    static excluir(id: string): void;
    static alterar(admAlterado: Administrador): void;
    static buscarAdm(id: string): Administrador | undefined;
}
//# sourceMappingURL=administrador.d.ts.map