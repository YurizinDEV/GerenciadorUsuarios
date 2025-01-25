"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.salvarDadosCSV = salvarDadosCSV;
exports.carregarDadosCSV = carregarDadosCSV;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const caminhoCSV = path_1.default.join('data/usuarios.csv');
//Salvar Usuarios
function salvarDadosCSV(usuarios) {
    let csvData = 'id;nome;email;senha;papel;dataCadastro;dataUltimaAlteracao;status\n';
    for (const usuario of usuarios) {
        const linha = `${usuario.id};${usuario.nome};${usuario.email};${usuario.senha};${usuario.papel};${usuario.dataCadastro.toISOString()};${usuario.dataUltimaAlteracao.toISOString()};${usuario.status}`;
        csvData += linha + '\n';
    }
    fs_1.default.writeFileSync(caminhoCSV, csvData);
}
//Carregar Usuarios
function carregarDadosCSV() {
    const usuarios = [];
    if (!fs_1.default.existsSync(caminhoCSV)) {
        return usuarios;
    }
    const csvData = fs_1.default.readFileSync(caminhoCSV, 'utf-8');
    const linhas = csvData.trim().split('\n');
    // Remover o cabeçalho  
    linhas.shift();
    linhas.forEach((linha, index) => console.log(`${index} - ${linha}`));
    return usuarios;
}
