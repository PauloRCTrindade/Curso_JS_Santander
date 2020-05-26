var umPeriodo = [50,70,80,-30,-25]
function saldoDeMesesComLucro(umPeriodo) {
  var lista = []
  for (var mes=0; mes< umPeriodo.length; mes++) {
    
    if(umPeriodo[mes] > 0){
        var mesLucro = umPeriodo[mes]
        lista.push(mesLucro)
    }
  }
  return lista;
}

resul = console.log(saldoDeMesesComLucro(umPeriodo))