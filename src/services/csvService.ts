// csvService.ts  
import { Usuario } from '../models/usuario';
import { Papel } from '../models/papeis';
import fs from 'fs';
import path from 'path';

const caminhoCSV = path.join('data/usuarios.csv');

// Salvar Usuarios  
export function salvarDadosCSV(usuarios: Usuario[]) {
    let csvData = 'id;nome;email;senha;papel;dataCadastro;dataUltimaAlteracao;status\n';

    for (const usuario of usuarios) {
        const linha = `${usuario.id};${usuario.nome};${usuario.email};${usuario.senha};${usuario.papel};${usuario.dataCadastro.toISOString()};${usuario.dataUltimaAlteracao.toISOString()};${usuario.status}`;
        csvData += linha + '\n';
    }

    fs.writeFileSync(caminhoCSV, csvData);
}

// Carregar Usuarios  
export function carregarDadosCSV(): Usuario[] {
    const usuarios: Usuario[] = [];

    if (!fs.existsSync(caminhoCSV)) {
        return usuarios;
    }

    const csvData = fs.readFileSync(caminhoCSV, 'utf-8');
    const linhas = csvData.trim().split('\n');
 
    linhas.shift();

    for (const linha of linhas) {
        const [id, nome, email, senha, papelString, dataCad, dataAlt, status] = linha.split(';');

        let papel: Papel;

        switch (papelString) {
            case 'Administrador':
                papel = Papel.Administrador;
                break;
            case 'Convidado':
                papel = Papel.Convidado;
                break;
            case 'Professor':
                papel = Papel.Professor;
                break;
            default:
                papel = Papel.Convidado;
        }

        const usuario: Usuario = {
            id,
            nome,
            email,
            senha,
            papel,
            dataCadastro: new Date(dataCad),
            dataUltimaAlteracao: new Date(dataAlt),
            status: status === 'true',
        };

        usuarios.push(usuario);
    }

    return usuarios;
}  