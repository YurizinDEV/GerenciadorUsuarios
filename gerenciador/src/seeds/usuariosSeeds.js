"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarUsuariosIniciais = criarUsuariosIniciais;
const uuid_1 = require("uuid");
const bcrypt_1 = __importDefault(require("bcrypt"));
const papeis_1 = require("../models/papeis");
const usuarioService_1 = require("../services/usuarioService");
function criarUsuariosIniciais() {
    const usuariosIniciais = [
        {
            id: (0, uuid_1.v4)(),
            nome: 'Admin',
            email: 'admin@example.com',
            senha: bcrypt_1.default.hashSync('Admin@123', 10),
            papel: papeis_1.Papel.Administrador,
            dataCadastro: new Date(),
            dataUltimaAlteracao: new Date(),
            status: true,
        },
        {
            id: (0, uuid_1.v4)(),
            nome: 'João Silva',
            email: 'joao.silva@example.com',
            senha: 'senha123',
            papel: papeis_1.Papel.Convidado,
            dataCadastro: new Date(),
            dataUltimaAlteracao: new Date(),
            status: true,
        },
        {
            id: (0, uuid_1.v4)(),
            nome: 'Maria Souza',
            email: 'maria.souza@example.com',
            senha: 'senha456',
            papel: papeis_1.Papel.Convidado,
            dataCadastro: new Date(),
            dataUltimaAlteracao: new Date(),
            status: true,
        },
        {
            id: (0, uuid_1.v4)(),
            nome: 'Pedro Oliveira',
            email: 'pedro.oliveira@example.com',
            senha: 'senha789',
            papel: papeis_1.Papel.Professor,
            dataCadastro: new Date(),
            dataUltimaAlteracao: new Date(),
            status: false,
        },
        // Adicione outros usuários se necessário  
    ];
    usuariosIniciais.forEach(usuario => (0, usuarioService_1.adicionarUsuario)(usuario));
}
