var numero = 6
function fatorial(numero){
    var multiplica = 1
    for(var i = numero; i > 1;i--){
       var multiplica = multiplica * i
    }
    return multiplica
}

console.log(fatorial(numero))