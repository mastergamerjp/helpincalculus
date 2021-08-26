var a = ''
var b = ''
var c = ''
var delta = ''

var resolucaoV
var resultadoV
var resolucaoR
var resultadoR

var conclusao

function funcaoquadratica() {
    a = Number(document.querySelector('#aFQ').value)
    b = Number(document.querySelector('#bFQ').value)
    c = Number(document.querySelector('#cFQ').value)

    resolucaoV = document.querySelector('.resolucaoVertice')
    resultadoV = document.querySelector('.resultadoVertice')
    resolucaoR = document.querySelector('.resolucaoRaiz')
    resultadoR = document.querySelector('.resultadoRaiz')

    conclusao = document.querySelector('.analiseParabola')

    delta = b**2 - 4*a*c

    var movel

    var raizDelta = delta**0.5
    
    movel = b*-1
    var movelSoma = movel + raizDelta
    var movelSub = movel - raizDelta

    //valores das raizes
    movelSoma = movelSoma / (2*a)
    movelSub = movelSub / (2*a)

    //-----------------------------------//

    

    //vertice
    var xv = (delta / (4*a))*-1
    var yv = (b / (2*a))*-1

    resultadoV.innerText = `Coordenadas do vértice: O valor do eixo x do vértice é ${xv.toFixed(2)}, e o valor do eixo y é ${yv.toFixed(2)}. Coordenadas do vértice: (${xv}, ${yv})`

    resultadoR.innerText = `As duas raizes dessa função quadrática são ${movelSoma.toFixed(2)} e ${movelSub.toFixed(2)}`

    resolucaoR.innerText = `Para solucionar as raízes, é necessário utilizar a fórmula de bhaskara. Para resolver sua conta, primeiro vamos inserir seus valores na fórmula. ${b*-1} +- √∆ / 2 . ${a}. Primeiro vamos resolver o "-b +- √∆". Nesse caso, a raiz de delta seria ${(delta**0.5).toFixed(2)}. Como a fórmula de bhaskara trás 2 resultados, primeiro vamos somar ${-b} + ${(delta**0.5).toFixed(2)}, e agora dividir o resultado por ${(2*a).toFixed(2)}. ${(-b + delta**0.5).toFixed(2)} / ${(2*a).toFixed(2)} = ${((-b + delta**0.5) / (2*a)).toFixed(2)}. Com isso, temos o primeiro resultado, que é utilizando da soma. Para encontrar o segundo resultado, repita o processo, porém ao invés de somar "-b + √∆", você deve subtrair(-b - √∆). Fazendo isso, o nosso segundo resultado é ${movelSub.toFixed(2)}`

    resolucaoV.innerText = `Para encontrar as coordenadas do vértice da parábola, utiliza-se duas fórmulas, para o x do vértice, se usa -∆/4a, e para o y, -b/2a. Primeiro vamos calcular o delta para a primeira fórmula. Sabendo que ∆ = b²-4ac, ∆ = ${b}²-4.${a}.${c}, ∆ = ${delta}, com o valor de delta, agora é só dividí-lo por ${(4*a).toFixed(2)} (4a), e depois dessa divisão, temos a coordenada do vértice no eixo x, ${xv}. Agora para calcular a coordenada do vértice no eixo y, vamos usar a segunda fórmula, -b/2a. Substituindo os valores, temos ${b*-1} / ${(2*a).toFixed(2)}, ou seja, a coordenada do eixo y do vértice é ${yv}`

    //Conslusões

    var eixoY
    var concavidade
    var eixoX

    if (a < 0) {
        concavidade = 'A parábola tem a concavidade voltada para baixo. Função triste :('
    } else if (a > 0) {
        concavidade = 'A parábola tem a concavidade voltada para cima. Função feliz :)'
    }

    if (b > 0) {
        eixoY = 'A parábola cruza o eixo Y enquanto a função está subindo.'
    } else if (b < 0) {
        eixoY = 'A parábola cruza o eixo Y enquanto a função está descendo.'
    } 


    if (delta < 0) {
        eixoX = 'A parábola não cruza o eixo X, não possuí raízes.'
    } else if(delta == 0) {
        eixoX = 'A parábola cruza o eixo X em apenas um ponto, ou seja, tem apenas uma raiz.'
    } else if(delta > 0) {
        eixoX = `A parábola cruza o eixo X em dois pontos, em ${movelSoma.toFixed(2)} e ${movelSub.toFixed(2)}.`
    }

    conclusao.innerHTML = `${concavidade} <br> ${eixoY} <br> ${eixoX}`
}