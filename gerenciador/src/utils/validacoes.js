"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarNome = validarNome;
exports.validarEmail = validarEmail;
exports.validarSenha = validarSenha;
function validarNome(nome) {
    return nome.length >= 3 && nome.length <= 25;
}
function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}
function validarSenha(senha) {
    const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regexSenha.test(senha);
}
