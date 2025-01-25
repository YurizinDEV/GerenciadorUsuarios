"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts  
const commander_1 = require("commander");
const cadastrar_1 = require("./commands/cadastrar");
const listar_1 = require("./commands/listar");
const alterar_1 = require("./commands/alterar");
const deletar_1 = require("./commands/deletar");
const program = new commander_1.Command();
program.version('1.0.0').description('Sistema de Gerenciamento de Usuários');
// Carregar usuários existentes ou criar sementes iniciais  
//carregarUsuarios();
//criarUsuariosIniciais(); // Descomente se quiser criar usuários iniciais  
program.addCommand(cadastrar_1.cadastrar);
program.addCommand(listar_1.listar);
program.addCommand(alterar_1.alterar);
program.addCommand(deletar_1.deletar);
program.parse(process.argv);
