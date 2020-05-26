var quantidadeDeMoedas = 10

function somarMoedasDe25(quantidadeDeMoedas){
    var soma = 0
    
    for( var i = 0; i < quantidadeDeMoedas; i++){
        soma = soma + 0.25
    }
    return soma
}


console.log(somarMoedasDe25(quantidadeDeMoedas))