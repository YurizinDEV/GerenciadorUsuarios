//import { Usuario } from '../models/usuario';
//import { salvarDadosCSV, carregarDadosCSV } from './csvService';
import { salvarDadosCSV, carregarDadosCSV } from './csvService';  
import { Usuario } from '../models/usuario';  
import { validarNome, validarEmail, validarSenha } from '../utils/validacoes';  
import bcrypt from 'bcrypt';  
import { v4 as uuidv4 } from 'uuid';  
import { Papel } from '../models/papeis';  


let usuarios: Usuario[] = [];

export function carregarUsuarios() {
    usuarios = carregarDadosCSV();
}

export function salvarUsuarios() {
    salvarDadosCSV(usuarios);
}

export function adicionarUsuario(usuario: Usuario) {
    usuarios.push(usuario);
    salvarUsuarios();
}

export function obterUsuarios(): Usuario[] {
    return usuarios;
}

export function obterUsuarioPorId(id: string): Usuario | undefined {
    return usuarios.find(u => u.id === id);
}

export function atualizarUsuario(id: string, dadosAtualizados: Partial<Usuario>): void {
    const index = usuarios.findIndex(u => u.id === id);
    if (index !== -1) {
        usuarios[index] = { ...usuarios[index], ...dadosAtualizados, dataUltimaAlteracao: new Date() };
        salvarUsuarios();
    }
}

export function removerUsuario(id: string): void {
    usuarios = usuarios.filter(u => u.id !== id);
    salvarUsuarios();
}