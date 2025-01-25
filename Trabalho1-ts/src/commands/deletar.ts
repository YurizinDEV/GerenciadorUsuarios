// commands/deletar.ts  
import { Command } from 'commander';
import { removerUsuario } from '../services/usuarioService';

export const deletar = new Command('deletar');

deletar
    .description('Deletar um usuário')
    .requiredOption('-i, --id <id>', 'ID do usuário')
    .action((options) => {
        removerUsuario(options.id);
        console.log('Usuário deletado com sucesso!');
    });

