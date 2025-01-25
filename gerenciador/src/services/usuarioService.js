"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carregarUsuarios = carregarUsuarios;
exports.salvarUsuarios = salvarUsuarios;
exports.adicionarUsuario = adicionarUsuario;
exports.obterUsuarios = obterUsuarios;
exports.obterUsuarioPorId = obterUsuarioPorId;
exports.atualizarUsuario = atualizarUsuario;
exports.removerUsuario = removerUsuario;
//import { Usuario } from '../models/usuario';
//import { salvarDadosCSV, carregarDadosCSV } from './csvService';
const csvService_1 = require("./csvService");
let usuarios = [];
function carregarUsuarios() {
    usuarios = (0, csvService_1.carregarDadosCSV)();
}
function salvarUsuarios() {
    (0, csvService_1.salvarDadosCSV)(usuarios);
}
function adicionarUsuario(usuario) {
    usuarios.push(usuario);
    salvarUsuarios();
}
function obterUsuarios() {
    return usuarios;
}
function obterUsuarioPorId(id) {
    return usuarios.find(u => u.id === id);
}
function atualizarUsuario(id, dadosAtualizados) {
    const index = usuarios.findIndex(u => u.id === id);
    if (index !== -1) {
        usuarios[index] = Object.assign(Object.assign(Object.assign({}, usuarios[index]), dadosAtualizados), { dataUltimaAlteracao: new Date() });
        salvarUsuarios();
    }
}
function removerUsuario(id) {
    usuarios = usuarios.filter(u => u.id !== id);
    salvarUsuarios();
}
