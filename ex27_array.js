var naipe = "espadas"
function naipeDeTruco(naipe){
var lista = []
for(var i = 1; i <= 12;i++){
    if (i != 8 && i != 9){
        lista.push(i + " " + "de" + " " + naipe)
    }
}
return lista

}

console.log(naipeDeTruco(naipe))