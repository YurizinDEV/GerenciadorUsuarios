// commands/deletar.ts  
import { Command } from 'commander';
import { obterUsuarioPorId, removerUsuario } from '../services/usuarioService';

export const deletar = new Command('deletar');

deletar
.description('Deletar um usuário')
.requiredOption('-i, --id <id>', 'ID do usuário')
.action((options) => {
const usuario = obterUsuarioPorId(options.id);
if (!usuario) {
console.error('Usuário não encontrado.');
return;
}

removerUsuario(options.id);  
console.log('Usuário deletado com sucesso!');  
});