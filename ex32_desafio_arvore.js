var ciclo = 1

function alturaArvoreUtopica(ciclo){
    var arvore = 1
    for(var i = 0; i < ciclo; i++){
      if(i % 2){
        arvore = arvore + 1;
      }else{
        arvore = arvore * 2;
      }
    }
    return arvore
  }

console.log(alturaArvoreUtopica(ciclo))