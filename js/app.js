import { validar } from "./validacao.js";

import { argumentos } from "./objetos/SimpleMaskMoneyArgs.js";

document.querySelectorAll("input").forEach(entrada => {

  if (entrada.dataset.tipo == preco) SimpleMaskMoney.setMask(entrada, argumentos);
    
    entrada.addEventListener("blur", (blur) => {
        
        validar(blur.target);
    });
  }
)