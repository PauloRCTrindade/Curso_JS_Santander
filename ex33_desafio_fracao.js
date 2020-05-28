var array = [1, 2, 0, -1,]
function maisMenos(array){
var listaDosPositivos = []
var listaZero = []
var listaDosNegativos = []

for(var pos = 0; pos < array.length; pos++){
    if( array[pos] > 0){
        listaDosPositivos.push(array[pos])
    }
    if(array[pos] == 0){
        listaZero.push(array[pos])
    }
    if(array[pos] < 0){
        listaDosNegativos.push(array[pos])
    }
}

var total = [listaDosPositivos.length/array.length, listaZero.length/array.length,listaDosNegativos.length/array.length]

return total
}

console.log(maisMenos(array))