// commands/listar.ts  
import { Command } from 'commander';
import { obterUsuarios, obterUsuarioPorId } from '../services/usuarioService';

interface UsuarioFormatado {
    id: string;
    nome: string;
    email: string;
    papel: string;
    status: string;
    dataCadastro: string;
    dataUltimaAlteracao: string;
}

export const listar = new Command('listar');

listar
    .description('Listar usuários')
    .option('-i, --id <id>', 'Listar usuário por ID')
    .action((options) => {
        if (options.id) {
            const usuario = obterUsuarioPorId(options.id);
            if (usuario) {
                console.table(usuario);
            } else {
                console.error('Usuário não encontrado.');
            }
        } else {
            const usuarios = obterUsuarios();
            const usuariosFormatados: UsuarioFormatado[] = [];

            usuarios.forEach((u, index) => {
              //  console.log(`${index} - ${JSON.stringify(u)}`);
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