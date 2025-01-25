"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.alterar = void 0;
// commands/alterar.ts  
const commander_1 = require("commander");
const usuarioService_1 = require("../services/usuarioService");
const validacoes_1 = require("../utils/validacoes");
const bcrypt_1 = __importDefault(require("bcrypt"));
const papeis_1 = require("../models/papeis");
exports.alterar = new commander_1.Command('alterar');
exports.alterar
    .description('Alterar dados de um usuário')
    .requiredOption('-i, --id <id>', 'ID do usuário')
    .option('-n, --nome <nome>', 'Novo nome')
    .option('-e, --email <email>', 'Novo email')
    .option('-s, --senha <senha>', 'Nova senha')
    .option('-p, --papel <papel>', 'Novo papel')
    .option('-st, --status <status>', 'Novo status (true ou false)')
    .action((options) => {
    const usuario = (0, usuarioService_1.obterUsuarioPorId)(options.id);
    if (!usuario) {
        console.error('Usuário não encontrado.');
        return;
    }
    const atualizacoes = {};
    if (options.nome) {
        if (!(0, validacoes_1.validarNome)(options.nome)) {
            console.error('Nome inválido. Deve ter entre 3 e 25 caracteres.');
            return;
        }
        atualizacoes.nome = options.nome;
    }
    if (options.email) {
        if (!(0, validacoes_1.validarEmail)(options.email)) {
            console.error('Email inválido.');
            return;
        }
        atualizacoes.email = options.email;
    }
    if (options.senha) {
        if (!(0, validacoes_1.validarSenha)(options.senha)) {
            console.error('Senha inválida. Deve ter no mínimo 8 caracteres, letras maiúsculas, minúsculas, números e caracteres especiais.');
            return;
        }
        atualizacoes.senha = bcrypt_1.default.hashSync(options.senha, 10);
    }
    if (options.papel) {
        if (!Object.values(papeis_1.Papel).includes(options.papel)) {
            console.error(`Papel inválido. Os papéis disponíveis são: ${Object.values(papeis_1.Papel).join(', ')}`);
            return;
        }
        atualizacoes.papel = options.papel;
    }
    if (options.status) {
        atualizacoes.status = options.status === 'true';
    }
    (0, usuarioService_1.atualizarUsuario)(options.id, atualizacoes);
    console.log('Usuário atualizado com sucesso!');
});
