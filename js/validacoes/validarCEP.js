import { mostarMensagemErro } from "./mostarMensagemErro.js";

const cepEntrada = document.querySelector('[data-tipo="cep"]');

const logradouroEntrada = document.querySelector('[data-tipo="logradouro"]');

const cidadeEntrada = document.querySelector('[data-tipo="cidade"]');

const estadoEntrada = document.querySelector('[data-tipo="estado"]');

export function getCEP () {

    if (cepEntrada.validity.valueMissing) return false;

    if (cepEntrada.validity.patternMismatch) return false;

    const CEP = cepEntrada.value.replace(/\D/g, "");

    const viaCEP = `https://viacep.com.br/ws/${CEP}/json/`;

    const options = {

        method: "GET",

        mode: "cors",

        Headers: {

            "content-type": "application/json;charset=utf-8"
        }
    }

    fetch(viaCEP, options).then(resposta => resposta.json()).then(dados => {
        
        if (dados.erro) {

            mostarMensagemErro(cepEntrada);

            return false;
        }

        logradouroEntrada.value = dados.logradouro;
        
        cidadeEntrada.value = dados.localidade;
        
        estadoEntrada.value = dados.uf;
      }
    );
}