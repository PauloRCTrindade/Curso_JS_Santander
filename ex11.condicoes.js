function possoIrAoBanco(dia,hora){
    return dia == "segunda" || dia == "terca" || dia == "quarta" || dia == "quinta" || dia == "sexta" != dia =="sabado" != dia == "domingo" && hora >=9 && hora <=15
}


resul = possoIrAoBanco('segunda',8)
console.log(resul)