// validações.ts  
export function validarNome(nome: string): boolean {
    return nome.length >= 3 && nome.length <= 25;
}

export function validarEmail(email: string): boolean {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

export function validarSenha(senha: string): boolean {
    const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regexSenha.test(senha);
}