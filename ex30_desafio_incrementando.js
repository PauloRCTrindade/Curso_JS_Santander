var numero = 3
function fatorial(numero){
    var multiplica = 1
    for(var i = 1; i <= numero;i++){
       var multiplica = multiplica * i
    }
    return multiplica
}

console.log(fatorial(numero))