var hipotenusa = ''
var catetoB = ''
var catetoC = ''
var resolucao = ''
var resultado = ''
var incognita = ''

function pitagoras(){
    hipotenusa = Number(document.querySelector('#hipotenusaPitagoras').value)
    catetoB = Number(document.querySelector('#catetoB').value)
    catetoC = Number(document.querySelector('#catetoC').value)
    resolucao = document.querySelector('.resolucaoPitagoras')
    resultado = document.querySelector('.resultadoPitagoras')

    var hipotenusaR
    var catetoBR
    var catetoCR

    if(catetoC == '') {
        incognita = 'C'
    } else if(catetoB == '') {
        incognita = 'B'
    } else {
        incognita = 'H'
    }

    switch(incognita) {
        case 'C':
            //c²=a²-b²
            catetoCR = hipotenusa**2 - catetoB**2
            catetoCR = catetoCR**0.5

            resolucao.innerText = `A fórmula de pitágoras é a²=b²+c², porém, como queremos o valor do cateto ${incognita}, podemos escreve-lá assim:"${incognita.toLowerCase()}² = a² - b²" sabendo disso, substituindo os valores, temos c² = ${hipotenusa}² - ${catetoB}². Calculando as potências temos c² = ${hipotenusa**2} - ${catetoB**2}. Depois disso, sabemos que c²= ${hipotenusa**2 - catetoB**2}. Então para encontrar o valor de "c", é só tirar a raiz desse valor. E a raiz de ${hipotenusa**2 - catetoB**2} é ${catetoCR}`
            resultado.innerText = `Resultado = ${catetoCR}`
            break
        case 'B':
            //b²=a²-c²
            catetoBR = hipotenusa**2 - catetoC**2
            catetoBR = catetoBR**0.5
            
            resolucao.innerText = `A fórmula de pitágoras é a²=b²+c², porém, como queremos o valor do cateto ${incognita}, podemos escreve-lá assim:"${incognita.toLowerCase()}² = a² - c²" sabendo disso, substituindo os valores, temos b = ${hipotenusa}² - ${catetoC}². Calculando as potências temos b² = ${hipotenusa**2} - ${catetoC**2}. Depois disso, sabemos que b²= ${hipotenusa**2 - catetoC**2}. Então para encontrar o valor de "b", é só tirar a raiz desse valor. E a raiz de ${hipotenusa**2 - catetoC**2} é ${catetoBR}`
            resultado.innerText = `Resultado = ${catetoBR}`
            break
        case 'H':
            //a²=b²+c²
            hipotenusaR = catetoB**2 + catetoC**2
            hipotenusaR = hipotenusaR**0.5

            resolucao.innerText = `A fórmula de pitágoras é a²=b²+c², sabendo disso, substituindo os valores, temos a² = ${catetoB}² + ${catetoC}². Calculando as potências temos a² = ${catetoB**2} + ${catetoC**2}. Depois disso, sabemos que a²= ${catetoB**2+catetoC**2}. Então para encontrar o valor de "a", é só tirar a raiz desse valor. E a raiz de ${catetoB**2+catetoC**2} é ${hipotenusaR}`
            resultado.innerText = `Resultado = ${hipotenusaR}`
            break
    }
    
}