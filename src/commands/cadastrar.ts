// commands/cadastrar.ts  
import { Command } from 'commander';
import { Usuario } from '../models/usuario';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import { validarNome, validarEmail, validarSenha } from '../utils/validacoes';
import { adicionarUsuario } from '../services/usuarioService';
import { Papel } from '../models/papeis';

export const cadastrar = new Command('cadastrar');

cadastrar
    .description('Cadastrar um novo usuário')
    .requiredOption('-n, --nome <nome>', 'Nome do usuário')
    .requiredOption('-e, --email <email>', 'Email do usuário')
    .requiredOption('-s, --senha <senha>', 'Senha do usuário')
    .requiredOption('-p, --papel <papel>', 'Papel do usuário')
    .action((options) => {
        const { nome, email, senha, papel } = options;

        if (!validarNome(nome)) {
            console.error('Nome inválido. Deve ter entre 3 e 25 caracteres.');
            return;
        }

        if (!validarEmail(email)) {
            console.error('Email inválido.');
            return;
        }

        if (!validarSenha(senha)) {
            console.error('Senha inválida. Deve ter no mínimo 8 caracteres, letras maiúsculas, minúsculas, números e caracteres especiais.');
            return;
        }

        if (!Object.values(Papel).includes(papel)) {
            console.error(`Papel inválido. Os papéis disponíveis são: ${Object.values(Papel).join(', ')}`);
            return;
        }

        const novoUsuario: Usuario = {
            id: uuidv4(),
            nome,
            email,
            senha: bcrypt.hashSync(senha, 10),
            papel: papel as Papel,
            dataCadastro: new Date(),
            dataUltimaAlteracao: new Date(),
            status: true,
        };

        adicionarUsuario(novoUsuario);
        console.log('Usuário cadastrado com sucesso!');
    });
