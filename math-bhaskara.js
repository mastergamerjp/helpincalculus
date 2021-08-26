var a = ''
var b = ''
var c = ''
var delta = ''

var resolucao

var resultado

function bhaskara() {
    a = Number(document.querySelector('#a').value)
    b = Number(document.querySelector('#b').value)
    c = Number(document.querySelector('#c').value)

    resolucao = document.querySelector('.resolucaoBhaskara')
    resultado = document.querySelector('.resultadoBhaskara')

    delta = b**2 - 4*a*c

    var movel

    var raizDelta = delta**0.5
    
    movel = b*-1
    var movelSoma = movel + raizDelta
    var movelSub = movel - raizDelta
    movelSoma = movelSoma / 2*a
    movelSub = movelSub / 2*a

    resolucao.innerText = `A fórmula de bhaskara é utilizada para, por exemplo, encontrar as raíses de uma função quadrática, ou seja, o momento em que a parábola do gráfico cruza o eixo X. Para resolver sua conta, primeiro vamos inserir seus valores na fórmula. ${b*-1} +- √∆ / 2 . ${a}. Primeiro vamos resolver o "-b +- √∆". Nesse caso, a raiz de delta seria ${delta**0.5}. Como a fórmula de bhaskara trás 2 resultados, primeiro vamos somar ${-b} + ${delta**0.5}, e agora dividir o resultado por ${2*a}. ${(-b + delta**0.5)} / ${(2*a)} = ${(-b + delta**0.5) / (2*a)}. Com isso, temos o primeiro resultado, que é utilizando da soma. Para encontrar o segundo resultado, repita o processo, porém ao invés de somar "-b + √∆", você deve subtrair(-b - √∆). Fazendo isso, o nosso segundo resultado é ${movelSub}.`

    resultado.innerText = `Resultado = ${movelSoma} para soma, e ${movelSub} para subtração.`


}