// index.ts  
import { Command } from 'commander';
import {cadastrar} from './commands/cadastrar';
import {listar} from './commands/listar';
import {alterar} from './commands/alterar';
import {deletar} from './commands/deletar';
import { carregarUsuarios } from './services/usuarioService';

const program = new Command();

program.version('1.0.0').description('Sistema de Gerenciamento de Usuários');

carregarUsuarios();

program.addCommand(cadastrar);
program.addCommand(listar);
program.addCommand(alterar);
program.addCommand(deletar);

program.parse(process.argv);