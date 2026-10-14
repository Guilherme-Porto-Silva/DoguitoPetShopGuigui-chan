const tiposErro = ["valueMissing", "typeMismatch", "patternMismatch", "customError"];

const mensagensErro = {

    nome: {

        valueMissing: "Digite seu nome."
    },

    email: {

        valueMissing: "Digite seu endereço de email, para podermos nos comunicar contigo no futuro.",

        typeMismatch: "Endereços de email precisam ter um nome, um @ e um serviço. (exemplo@gmail.com)"
    },

    senha: {

        valueMissing: "Crie uma nova senha para ser requisitada quando fores entrar neste site, para que invasores não consigam se passar por você.",

        patternMismatch: "A senha precisa ter, pelo menos, uma letra maiúscula, uma letra minúscula e um número. Ela não pode conter espaços, nem símbolos."
    },

    dataNascimento: {

        valueMissing: "Digite a data do seu nascimento.",

        customError: "Putz, man... Tem que ser maior de idade para se cadastrar... É que a gente leva a culpa por tudo que menor de idade faz no nosso site, sabe? Tá na lei, e tals... Aí... Seria difícil para nós, sabe?"
    },

    cpf: {

        valueMissing: "Digite seu comprovante de pessoa física.",

        customError: "Comprovantes de pessoa física não podem ter números repetidos."
    },

    cep: {

        valueMissing: "Digite seu CEP, para sabermos qual será o novo lar dos bichinhos adotados.",

        patternMismatch: "Digite 5 números, facultativamente um ífen, e mais 3 números.",

        customError: "Não dei conta de pegar o CEP lá na ViaCEP."
    },

    logradouro: {

        valueMissing: "Digite seu logradouro."
    },

    cidade: {

        valueMissing: "Digite sua cidade de moradia."
    },

    estado: {

        valueMissing: "Digite seu estado de moradia."
    },

    preco: {

        valueMissing: "Quanto cada instância do produto custará?"
    }
}

export function mostarMensagemErro (entrada) {

    const tipoEntrada = entrada.dataset.tipo;

    tiposErro.forEach(erro => {

        if (entrada.validity[erro]) {// se o erro no dicionário da entrada tiver verdadeiro

            const mensagem = mensagensErro[tipoEntrada][erro];

            entrada.setCustomValidity(mensagem);
        }
    })
}