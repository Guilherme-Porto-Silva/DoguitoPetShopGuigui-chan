import { maior18 } from "./validacoes/maior18.js";

import { validarCPF } from "./validacoes/validarCPF.js";

import { validarCEP } from "./validacoes/validarCEP.js";

const validadores = {

    dataNascimento:entrada => maior18(entrada),

    cpf:entrada => validarCPF(entrada),

    cep:entrada => validarCEP(entrada)
}

export function validar (input) {

    const inputType = input.dataset.tipo;

    if (validadores[inputType]) validadores[inputType](input);

    if (!input.validity.valid) input.parentElement.classList.add("input-conteiner-invalido");

    else {
        
        input.parentElement.classList.remove("input-conteiner--invalido");
        
        input.querySelector(".input-mensagem-erro").innerHTML = "";
    }
}