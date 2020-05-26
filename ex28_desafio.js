var alunosDasegunda = [10, -5, 3, 0]

function acontece(alunosDasegunda){
    for (pos =0; pos < alunosDasegunda.length; pos++){
        var lista = []
        if (alunosDasegunda[pos] > 0 && alunosDasegunda[pos] != 0){
            var alunos = alunosDasegunda[pos]
            lista.push(alunos)
        }
    }
    return lista
}

console.log(acontece(alunosDasegunda))