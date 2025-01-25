"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listar = void 0;
// commands/listar.ts  
const commander_1 = require("commander");
const usuarioService_1 = require("../services/usuarioService");
exports.listar = new commander_1.Command('listar');
exports.listar
    .description('Listar usuários')
    .option('-i, --id <id>', 'Listar usuário por ID')
    .action((options) => {
    if (options.id) {
        const usuario = (0, usuarioService_1.obterUsuarioPorId)(options.id);
        if (usuario) {
            console.log(usuario);
        }
        else {
            console.error('Usuário não encontrado.');
        }
    }
    else {
        const usuarios = (0, usuarioService_1.obterUsuarios)();
        const usuariosFormatados = [];
        usuarios.forEach((u, index) => {
            console.log(`${index} - ${JSON.stringify(u)}`);
            usuariosFormatados.push({
                id: u.id,
                nome: u.nome,
                email: u.email,
                papel: u.papel,
                status: u.status ? 'Ativo' : 'Inativo',
                dataCadastro: u.dataCadastro.toLocaleString(),
                dataUltimaAlteracao: u.dataUltimaAlteracao.toLocaleString(),
            });
        });
        console.table(usuariosFormatados);
    }
});
