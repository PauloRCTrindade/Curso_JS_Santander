var quantidadeMinima = 3
var alunosDaSegunda = [10, -5, 3, 0]
var alunosDaTerca = [7, -2, 4, 0,5,7]
var alunosDaQuarta = [-8, -5, -3, 0,-5,-7]
var alunosDaQuinta = [6, -7, 3, 0,5,7]
var alunosDaSexta = [11, -3, 5, 0,5,7]
var dias = [alunosDaSegunda,alunosDaTerca,alunosDaQuarta,alunosDaQuinta,alunosDaSexta]


function acontece(alunosDaSegunda,quantidadeMinima){
    var lista = []

    for (var pos =0; pos < alunosDaSegunda.length; pos++){
        if (alunosDaSegunda[pos] <= 0){
            var alunos = alunosDaSegunda[pos]
            lista.push(alunos)
        }
    }
    return lista.length >= quantidadeMinima
}


function aberturas(dias,quantidadeMinima){
    var lista = []

    for(var pos = 0; pos < dias.length; pos++){
        lista.push(acontece(dias[pos],quantidadeMinima))
    }
    return lista 
}

console.log(acontece(alunosDaSegunda,quantidadeMinima))