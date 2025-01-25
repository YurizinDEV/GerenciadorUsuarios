"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletar = void 0;
// commands/deletar.ts  
const commander_1 = require("commander");
const usuarioService_1 = require("../services/usuarioService");
exports.deletar = new commander_1.Command('deletar');
exports.deletar
    .description('Deletar um usuário')
    .requiredOption('-i, --id <id>', 'ID do usuário')
    .action((options) => {
    (0, usuarioService_1.removerUsuario)(options.id);
    console.log('Usuário deletado com sucesso!');
});
