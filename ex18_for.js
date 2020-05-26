var soma = 0
function somar5MoedasDe25Centavos(){
    for(i = 0; i < 5; i++){
        soma = soma + 0.25
    }
    return soma
}
console.log(somar5MoedasDe25Centavos())