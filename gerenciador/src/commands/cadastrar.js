"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastrar = void 0;
const commander_1 = require("commander");
const uuid_1 = require("uuid");
const bcrypt_1 = __importDefault(require("bcrypt"));
const validacoes_1 = require("../utils/validacoes");
const usuarioService_1 = require("../services/usuarioService");
const papeis_1 = require("../models/papeis");
exports.cadastrar = new commander_1.Command('cadastrar');
exports.cadastrar
    .description('Cadastrar um novo usuário')
    .requiredOption('-n, --nome <nome>', 'Nome do usuário')
    .requiredOption('-e, --email <email>', 'Email do usuário')
    .requiredOption('-s, --senha <senha>', 'Senha do usuário')
    .requiredOption('-p, --papel <papel>', 'Papel do usuário')
    .action((options) => {
    const { nome, email, senha, papel } = options;
    if (!(0, validacoes_1.validarNome)(nome)) {
        console.error('Nome inválido. Deve ter entre 3 e 25 caracteres.');
        return;
    }
    if (!(0, validacoes_1.validarEmail)(email)) {
        console.error('Email inválido.');
        return;
    }
    if (!(0, validacoes_1.validarSenha)(senha)) {
        console.error('Senha inválida. Deve ter no mínimo 8 caracteres, letras maiúsculas, minúsculas, números e caracteres especiais.');
        return;
    }
    if (!Object.values(papeis_1.Papel).includes(papel)) {
        console.error(`Papel inválido. Os papéis disponíveis são: ${Object.values(papeis_1.Papel).join(', ')}`);
        return;
    }
    const novoUsuario = {
        id: (0, uuid_1.v4)(),
        nome,
        email,
        senha: bcrypt_1.default.hashSync(senha, 10),
        papel: papel,
        dataCadastro: new Date(),
        dataUltimaAlteracao: new Date(),
        status: true,
    };
    (0, usuarioService_1.adicionarUsuario)(novoUsuario);
    console.log('Usuário cadastrado com sucesso!');
});
