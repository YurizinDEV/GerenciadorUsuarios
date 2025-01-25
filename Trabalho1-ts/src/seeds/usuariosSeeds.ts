import { Usuario } from '../models/usuario';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import { Papel } from '../models/papeis';
import { adicionarUsuario } from '../services/usuarioService';

export function criarUsuariosIniciais(): void {
    const usuariosIniciais: Usuario[] = [
        {
            id: uuidv4(),
            nome: 'Admin',
            email: 'admin@example.com',
            senha: bcrypt.hashSync('Admin@123', 10),
            papel: Papel.Administrador,
            dataCadastro: new Date(),
            dataUltimaAlteracao: new Date(),
            status: true,
        },
        {
            id: uuidv4(),
            nome: 'João Silva',
            email: 'joao.silva@example.com',
            senha: 'senha123',
            papel: Papel.Convidado,
            dataCadastro: new Date(),
            dataUltimaAlteracao: new Date(),
            status: true,
        },
        {
            id: uuidv4(),
            nome: 'Maria Souza',
            email: 'maria.souza@example.com',
            senha: 'senha456',
            papel: Papel.Convidado,
            dataCadastro: new Date(),
            dataUltimaAlteracao: new Date(),
            status: true,
        },
        {
            id: uuidv4(),
            nome: 'Pedro Oliveira',
            email: 'pedro.oliveira@example.com',
            senha: 'senha789',
            papel: Papel.Professor,
            dataCadastro: new Date(),
            dataUltimaAlteracao: new Date(),
            status: false,
        },
        // Adicione outros usuários se necessário  
    ];

    usuariosIniciais.forEach(usuario => adicionarUsuario(usuario));
}