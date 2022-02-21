/*Peça ao usuário digitar algum texto no pelo prompt
e depois mostre esse texto com todas as letras maiúsculas, 
com todas as letras minúsculas e depois escreva no console letra 
por letra do texto que o usuário digitou. (Utilize o método split 
para fazer esse último)*/

var text = prompt ('Digite o texto que quiser: ')
document.write(`<h2>${text.toUpperCase()}</h2>`)
document.write('<br>')

document.write(`<h2>${text.toLowerCase()}</h2>`)
document.write('<br>')

var splits = text.split('')
console.log(splits)
document.write(`<h2>${splits}</h2>`)
document.write('<br>')
