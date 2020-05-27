var numero = 5
function fatorial(numero){
    var multiplica = 0
    for(var i = numero; numero > 0; i++){
        multiplica = i * i -1
    }
    return multiplica
}

console.log(fatorial(numero))