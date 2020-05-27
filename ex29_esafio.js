var array = [1,4,7]

function produto(array){
    var multiplica = 1
    for(var pos = 0; pos < array.length;pos++){
        multiplica = multiplica * array[pos]
    }
    return multiplica
}

console.log(produto(array))