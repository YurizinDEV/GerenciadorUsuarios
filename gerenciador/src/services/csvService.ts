import { Usuario } from '../models/usuario';
import fs from 'fs';
import path from 'path';

const caminhoCSV = path.join('data/usuarios.csv');

//Salvar Usuarios
export function salvarDadosCSV(usuarios: Usuario[]) {
    let csvData = 'id;nome;email;senha;papel;dataCadastro;dataUltimaAlteracao;status\n';

    for (const usuario of usuarios) {
        const linha = `${usuario.id};${usuario.nome};${usuario.email};${usuario.senha};${usuario.papel};${usuario.dataCadastro.toISOString()};${usuario.dataUltimaAlteracao.toISOString()};${usuario.status}`;
        csvData += linha + '\n';
    }

    fs.writeFileSync(caminhoCSV, csvData);
}

//Carregar Usuarios
export function carregarDadosCSV(): Usuario[] {
    const usuarios: Usuario[] = [];

    if (!fs.existsSync(caminhoCSV)) {
        return usuarios;
    }

    const csvData = fs.readFileSync(caminhoCSV, 'utf-8');
    const linhas = csvData.trim().split('\n');

    // Remover o cabeçalho  
    linhas.shift();

    linhas.forEach((linha, index) => console.log(`${index} - ${linha}`)); 

    return usuarios;
}  