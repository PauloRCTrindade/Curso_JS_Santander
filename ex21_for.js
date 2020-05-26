var num = 4
function somatoria(num){
    var soma = 0

    for(var i = 0; i< num; i++){
        soma = soma + i
    }
    return soma
}

console.log(somatoria(num))