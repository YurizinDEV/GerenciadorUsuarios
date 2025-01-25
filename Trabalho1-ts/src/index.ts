// index.ts  
import { Command } from 'commander';
import {cadastrar} from './commands/cadastrar';
import {listar} from './commands/listar';
import {alterar} from './commands/alterar';
import {deletar} from './commands/deletar';
import { carregarUsuarios } from './services/usuarioService';
import { criarUsuariosIniciais } from './seeds/usuariosSeeds';

const program = new Command();

program.version('1.0.0').description('Sistema de Gerenciamento de Usuários');

// Carregar usuários existentes ou criar sementes iniciais  
//carregarUsuarios();
//criarUsuariosIniciais(); // Descomente se quiser criar usuários iniciais  

program.addCommand(cadastrar);
program.addCommand(listar);
program.addCommand(alterar);
program.addCommand(deletar);

program.parse(process.argv);