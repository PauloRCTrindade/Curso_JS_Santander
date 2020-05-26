var medalhas = ["nada","ouro","prata","bronze"]

function medalhaDeAcordoComPosto(numero){
    if(numero >= medalhas.length){
        return "nada"
    }
    return medalhas[numero]
}

console.log(medalhaDeAcordoComPosto(10))