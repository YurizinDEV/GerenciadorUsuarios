"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissoesPorPapel = exports.Papel = void 0;
var Papel;
(function (Papel) {
    Papel["Administrador"] = "Administrador";
    Papel["Convidado"] = "Convidado";
    Papel["Professor"] = "Professor";
})(Papel || (exports.Papel = Papel = {}));
exports.permissoesPorPapel = {
    [Papel.Convidado]: ['listarProdutos', 'listarProdutoPorId'],
    [Papel.Administrador]: ['listarProdutos', 'listarProdutoPorId', 'cadastrarProdutos', 'alterarProdutos', 'deletarProdutos'],
    [Papel.Professor]: ['listarProdutos', 'listarProdutoPorId', 'cadastrarProdutos'],
};
