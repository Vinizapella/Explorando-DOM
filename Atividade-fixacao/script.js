const cabecalho = document.getElementById('cabecalho')

console.log(cabecalho)

const gridSection = document.getElementsByClassName('grid-section')

console.log(gridSection)

console.log(gridSection[0])

const imagens = document.querySelectorAll('img')

console.log(imagens)

console.log(imagens.length)

const primeiroParagrafo = document.querySelector('.grid-section p')

console.log(primeiroParagrafo)

const linkContato = document.querySelector('#contato a')

console.log(linkContato)

const todosOsH2 = document.querySelectorAll('h2')

console.log(todosOsH2)

const paragrafosFilhos = document.querySelectorAll('main > p, footer > p')

console.log(paragrafosFilhos)

console.log('--- Textos dos Títulos H2 ---')

todosOsH2.forEach((titulo) => {

  console.log(titulo.innerText)

})