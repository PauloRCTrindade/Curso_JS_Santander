function podeSubir(alturaPessoa,vemComCompania,temProblemaCardiaco){
    return ((alturaPessoa >= 1.5 && temProblemaCardiaco == false) || alturaPessoa >= 1.2 && vemComCompania == true && temProblemaCardiaco == false)
}

var resul = podeSubir(1.5,false,false)
console.log(resul) 
