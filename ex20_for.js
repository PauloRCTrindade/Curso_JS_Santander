var num = 10

function somaDosPares(num){
soma = 0

for( var i = 0; i <= num; i++){
    if( i%2 == 0){
        soma = soma + num
    } 
}
return soma
}

console.log(somaDosPares(num))