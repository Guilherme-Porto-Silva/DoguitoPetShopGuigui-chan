import { mostarMensagemErro } from "./mostarMensagemErro.js";

export function maior18 (nascimentoDataInput) {

    const dataRecebida = new Date(nascimentoDataInput.value);

    const hoje = new Date();

    const nascimentoDataMais18 = new Date(dataRecebida.getUTCFullYear() + 18, dataRecebida.getUTCMonth(), dataRecebida.getUTCDate());

    // if (nascimentoDataMais18 < hoje) nascimentoDataInput.setCustomValidity(`Putz, man... Tem que ser maior de idade para se cadastrar...
            
    //     É que a gente leva a culpa por tudo que menor de idade faz no nosso site, sabe? Tá na lei, e tals... Aí... Seria difícil para nós, sabe?
        
    //     Mas você pode voltar daqui há ${hoje.getUTCFullYear() - nascimentoDataMais18.getUTCFullYear()} anos!`);

    if (nascimentoDataMais18 < hoje) mostarMensagemErro(nascimentoDataInput);

    else nascimentoDataInput.setCustomValidity("");
}