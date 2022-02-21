/*Crie um programa que pergunta quantos números o usuário deseja digitar
(tanto inteiro quanto decimal) e rebeca os números e armazene esses números
em um array e depois mostre a soma total deles, a média deles, mostre cada valor
em uma potência de 2 e faça a raíz quadrada e cúbica de um.*/


let qtd=parseFloat(prompt('Digite quantos numeros você desejar!!!'))

let numArray=[]

for (let i=0; i<qtd; i++){

    numArray[i]=parseFloat(prompt(`Digite o ${i+1}º numero`))
    console.log(numArray[i])

}

var somar = numArray.reduce(function(soma, i) {
    return soma + i;
});
document.write(`<h2>A Soma dos Numeros digitados é ${somar} </h2>`)
document.write('<br>')
console.log(somar)

media = somar/numArray.length
document.write(`<h2>A Media dos numeros digitados é ${media} </h2>`)
document.write('<br>')
console.log(media)

let raizCubica = Math.cbrt(numArray[0])
document.write(` <br>`)
document.write(` <h2> A raiz cúbica de ${numArray[0]} é: ${raizCubica.toFixed(2)} <h2>`)
document.write(` <br>`)

for (var j = 0; j < numArray.length; j++) {
    numArray[j] **= 2;
    
    document.write(` <h2> O Numero digitado elevado a potencia de 2 é ${numArray[j]} </h2>`)
}

/*let raizCubica = Math.cbrt(numArray[0])
document.write(` <br>`)
document.write(` <h2> A raiz cúbica de ${numArray[0]} é: ${raizCubica.toFixed(4)} <h2>`)
document.write(` <br>`)*/