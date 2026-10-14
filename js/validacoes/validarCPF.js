import { mostarMensagemErro } from "./mostarMensagemErro.js";

function cpfTemNumerosRepetidos (cpf) { return /^(\d)\1{10}$/.test(cpf); }



function contaNaoBate (cpf, começo, fim, digitoVerificador) {

    let soma = 0;

    let posicao = 0;

    for (let i = começo; i > fim; i--) {

        soma = soma + (Number(cpf.charAt(posicao)) * i);

        posicao++;
    }

    return (digitoVerificador != (11 - (soma % 11)));
}



function validarMatematicamente (cpf) {

    const primeiroDigitoVerificador = Number(cpf.charAt(9));

    const segundoDigitoVerificador = Number(cpf.charAt(10));

    if (contaNaoBate(cpf, 10, 2, primeiroDigitoVerificador)) return true;

    if (contaNaoBate(cpf, 11, 1, segundoDigitoVerificador)) return true;

    return false;
}



export function validar (entrada) {

    const cpfDigitado = entrada.value;

    const cpfSemFrescura = cpfDigitado.replace(/\D/g, "");

    if (cpfTemNumerosRepetidos(cpfSemFrescura)) mostarMensagemErro(entrada);

    else if (validarMatematicamente(cpfSemFrescura)) mostarMensagemErro(entrada);
}