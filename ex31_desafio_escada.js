var degraus = 5
function escada(degraus){
    var lista = []

    for(i = 1; i <= degraus; i++){
        var espaco = degraus - i
        lista.push(" ".repeat(espaco) + "#".repeat(i))
    }
    return lista
}

console.log(escada(degraus))