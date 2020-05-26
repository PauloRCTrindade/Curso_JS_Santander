function tamanhoNomeCompleto(nome,sobrenome){
    var nomeSobrenome = (nome + " " + sobrenome)
    return nomeSobrenome
}

var resultado = tamanhoNomeCompleto()
console.log(resultado.length)