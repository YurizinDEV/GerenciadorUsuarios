// commands/alterar.ts  
import { Command } from 'commander';
import { obterUsuarioPorId, atualizarUsuario } from '../services/usuarioService';
import { validarNome, validarEmail, validarSenha } from '../utils/validacoes';
import bcrypt from 'bcrypt';
import { Papel } from '../models/papeis';

export const alterar = new Command('alterar');

alterar
    .description('Alterar dados de um usuário')
    .requiredOption('-i, --id <id>', 'ID do usuário')
    .option('-n, --nome <nome>', 'Novo nome')
    .option('-e, --email <email>', 'Novo email')
    .option('-s, --senha <senha>', 'Nova senha')
    .option('-p, --papel <papel>', 'Novo papel')
    .option('-st, --status <status>', 'Novo status (true ou false)')
    .action((options) => {
        const usuario = obterUsuarioPorId(options.id);
        if (!usuario) {
            console.error('Usuário não encontrado.');
            return;
        }

        const atualizacoes: any = {};

        if (options.nome) {
            if (!validarNome(options.nome)) {
                console.error('Nome inválido. Deve ter entre 3 e 25 caracteres.');
                return;
            }
            atualizacoes.nome = options.nome;
        }

        if (options.email) {
            if (!validarEmail(options.email)) {
                console.error('Email inválido.');
                return;
            }
            atualizacoes.email = options.email;
        }

        if (options.senha) {
            if (!validarSenha(options.senha)) {
                console.error('Senha inválida. Deve ter no mínimo 8 caracteres, letras maiúsculas, minúsculas, números e caracteres especiais.');
                return;
            }
            atualizacoes.senha = bcrypt.hashSync(options.senha, 10);
        }

        if (options.papel) {
            if (!Object.values(Papel).includes(options.papel)) {
                console.error(`Papel inválido. Os papéis disponíveis são: ${Object.values(Papel).join(', ')}`);
                return;
            }
            atualizacoes.papel = options.papel as Papel;
        }

        if (options.status) {
            atualizacoes.status = options.status === 'true';
        }

        atualizarUsuario(options.id, atualizacoes);
        console.log('Usuário atualizado com sucesso!');
    });
