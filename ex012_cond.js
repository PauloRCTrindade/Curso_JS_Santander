function podeSeAposentar(idade,sexo,anos){
    return ((idade >= 60 && sexo == "F" ) || (idade >=65 && sexo == "M")) && anos >= 30
}

var resul = podeSeAposentar(60,"F",28)
console.log(resul)