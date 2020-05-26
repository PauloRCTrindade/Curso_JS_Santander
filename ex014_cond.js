function medalhaSegundoOPosto(colocacao){
    if (colocacao == 1){
        return "Ouro"
    }
    else if (colocacao == 2){
        return "prata"
    }
    else if (colocacao == 3){
        return "bronze"
    }
    else{
        return "continue tentando"
    }
}

var resul = medalhaSegundoOPosto(4)
    console.log(resul)