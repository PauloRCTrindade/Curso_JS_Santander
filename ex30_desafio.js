var numero = 5
function fat(numero){
    var multiplica = 1

    for(var i = numero; numero > 0;i--){
        multiplica = i * i -1
    }
    return multiplica
}

console.log(fat(numero))