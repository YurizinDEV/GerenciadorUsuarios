export enum Papel {
    Administrador   = 'Administrador',
    Convidado       = 'Convidado',
    Professor       = 'Professor',
}

export const permissoesPorPapel = {
    [Papel.Convidado]:      ['listarProdutos', 'listarProdutoPorId'],
    [Papel.Administrador]:  ['listarProdutos', 'listarProdutoPorId', 'cadastrarProdutos', 'alterarProdutos', 'deletarProdutos'],
    [Papel.Professor]:      ['listarProdutos', 'listarProdutoPorId', 'cadastrarProdutos'],
};