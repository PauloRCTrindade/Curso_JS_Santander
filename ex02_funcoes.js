// Vamos criar uma função perimetro que nos diga o perímetro de um círculo quando damos a ele o raio como parâmetro.Também a função area que nos dá a área de um círculo quando recebe o raio como parâmetro. Lembre-se de usar o valor de 3.14 no lugar do π .Aqui estão as fórmulas necessárias para as funções, além disso, para este exercício iremos considerar que o valor de π é 3.14. perimetro = π * raio * 2; area = π * raio * raio;


function perimetro(raio){
    return 3.14 * raio * 2
    
}

var resultado = perimetro(50)
console.log(resultado)


function area(raio){
    return 3.14 * raio * raio
}

var resultado = area(2)
console.log(resultado)