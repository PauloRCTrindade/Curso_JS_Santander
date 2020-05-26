 function eNumeroDasorte(num){
    return num > 0 && num %2 ==0 || num %3 == 0 && num != 15
}



function eNumeroDaSorte(num){
    return num > 0 && num != 15 && num % 2 || num % 3
}

var resul = eNumeroDaSorte(50)
console.log(resul)