var num = 2

function caloriasDeTrote(num){
    var soma = 0
    for(var i =0; i<=num; i++){
        soma =i * 5 + soma
    }
    return soma
}

console.log(caloriasDeTrote(num))