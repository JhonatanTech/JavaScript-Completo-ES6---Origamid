//seleciona pelo id
const animais = document.getElementById('animais')

//retornar as imagens que começam com o nome 'imagem'
const imagens = document.querySelectorAll('img[href^="img/imagem"]')

/**
 * forEach
 * parametros(item, index, array)
 */
const img = document.querySelectorAll('img')

//arrow-function
img.forEach((e) => {
    console.log(e)
});

//com somente uma linha não é necessario o '{}'
img.forEach((e) => console.log(e));

/**
 * classList
 * retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém
 */
const menu = document.querySelector('.menu')

menu.className //string
menu.classList //lista de classes
menu.classList.add('ativo')
menu.classList.add('ativo', 'mobile') //add duas classes
menu.classList.remove('ativo')
menu.classList.toggle('ativo') // add/remove a classe
menu.classList.contains('ativo') //true ou false
menu.classList.replace('ativo', 'inativo') //substitui a classe

/**
 * attributes
 * retorna um array-like com os atributod do elemento
 */

const atributo = document.querySelector('.animais')

atributo.attributes //retorna todos os atributos
atributo.attributes[0] //retorna o primeiro atributo
atributo.attributes['data-text'] //tras o data

/**
 * getAttribute e setAttribute
 * métodos que retornam ou definem de acordo com o atributo selecionado
 */

const atributo2 = document.querySelector('img')

img.getAttribute('src') //valor do src
img.setAttribute('alt', 'texto alternativo') //mudar alt
img.hasAttribute('id') //true/false
img.removeAttribute('alt') //remove o alt
img.hasAttributes() //true/false se tem algum atributo

/**
 * Read Only vs Writable
 * existem propriedades que não permitem a mudança de seus valores, essas são considerados Read Only, ou seja, apenas leitura
 */
const read = document.querySelector('.animais')

read.className //string com o nome das classes
read.className = 'azul' //substitui completamente a string
read.className += ' vermelho' //adiciona vermelho a string
read.attributes = 'class="ativo"' //não funciona, read-only

/**
 * Height e Width
 * estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria dela são Read Only
 */
const section = document.querySelector('.animais')

section.clientHeight //height + padding
section.offsetHeight //height + padding + border
section.scrollHeight //height total, se tiver scroll, ele contará

/**
 * offsetTop e offsetleft
 */
const section = document.querySelector('.animais')

section.offsetTop //distancia entre o topo do elemento e o topo da página

section.offsetLeft //distancia entre o canto esquerdo do elemento e o canto esquerdo da página

/**
 * getBoundingClientRect
 * método que retorna um objeto com valores de height, distanciados do elemento e mais
 */
const section = document.querySelector('.animais')

const rect = section.getBoundingClientRect()
rect.height //height do elemento
rect.width //width do elemento
rect.top //distancia entre o topo do elemento e o scroll

/**
 * window
 */
window.innerWidth //width da janela
window.outerWidth //soma dev tools também
window.innerHeight //height da janela
window.outerWidth //soma a barra de endereço

window.pageYOffset //distancia total do scroll horizontal
window.pageXOffset //distancia total do scroll vertical

if (window.innerWidth < 600) {
    console.log('Tela menos que 600px')
}

/**
 * matchMedia()
 * utilizando um media-querie como no CSS para verificar a largura do browser
 */
const small = window.matchMedia('(max-width: 600px)')

//matches retorna true/false
if (small.matches) {
    console.log('tela menor que 600px')
} else {
    console.log('tela maior que 600px')
}

/**
 * addEventListener
 * adiciona uma função ao elemento, esta chamada de callback, que será ativada assim que certo evento ocorrer neste elemento
 */
const img = document.querySelector('img');

//elemento.addEventListener(event, callback, options)
//o terceiro parametro é opcional
img.addEventListener('click', () => {
    console.log('clicou')
})

/**
 * Callback
 * é boa prática separar a função de callback do addEventListener
 * ou seja, declarar uma função ao invés de passar diretamente uma função anonima
 */
const img = document.querySelect('img')
function callback() {
    console.log('clicou')
}

img.addEventListener('click', () => { callback })
img.addEventListener('click', callback()) //undefined
img.addEventListener('click', function () {
    console.log('clicou')
})
img.addEventListener('click', () => {
    console.log('clicou')
})

/**
 * event
 * o primeiro parametro do callback é referente ao evento que ocorreu
 */
const img = document.querySelect('img')

function callback(event) {
    console.log(event)
}

img.addEventListener('click', callback)

/**
 * propiredades do event
 */
const animaisLista = document.querySelector('.animais-lista')

function executarCallback(event) {
    const currentTarget = event.currentTarget //item que selecionei o evento
    const target = event.target //onde o click ocorreu
    const type = event.type //tipo de evento
    const path = event.path 
    console.log(currentTarget, target, type, path)
}

animaisLista.addEventListener('click', executarCallback)

/**
 * event.preventDefault()
 * previne o comportamento padrão do evento no browser. No caso de um link externo, por exemplo, irá previnir que o link seja ativado
 */
const linkExterno = document.querySelector('a[href^="http"]')

function clickNoLink(event) {
    event.preventDefault()
    console.log(event.currentTarget.href)
}

linkExterno.addEventListener('click', clickNoLink)

/**
 * this functiona palavra chave é uma palavra especial de Javascript, que pode fazer referencias a diferentes objetos dependendo do contexto.
 * No caso de eventos, ela fará referencia ao elemento em que addEventListener foi adicionado
 */
const img = document.createElement('img')

function callback(event) {
    console.log(this)
    console.log(this.getAttribute('src'))
}

img.addEventListener('click', callback)

/**
 * diferentes eventos
 * existem diversos eventos como click, scroll, resize, keydown, keyup, mouseenter e mais.
 * eventos podem ser adicionados a diferentes elementos, como o window e docuemnt também
 */
const h1 = document.createElement('h1')

function callback(event) {
    console.log(event.type, event)
}

h1.addEventListener('click', callback)
h1.addEventListener('mouseenter', callback)
window.addEventListener('keydown', callback)
window.addEventListener('scroll', callback)
window.addEventListener('resize', callback)

/**
 * keyboard
 * você pode adicionar atalhos para facilitar a navegação no seu site, através de eventos do keyboard
 */
function handleKeyboard(event) {
    if (event.key === 'a') {
        document.body.classList.toggle('azul')
    } else if (event.key === 'v') {
        document.body.classList.toggle('vermelho')
    }
}

window.addEventListener('keydown', handleKeyboard)

/**
 * forEach e eventos
 * o método addEventListener é adicionado a um unico elemento, então é necessario um loop
 * entre elementos de uma lista, para adicionarmos a cada um deles
 */
const imgs = document.querySelectorAll('img');

function imgSrc(event) {
    const src = event.currentTarget.getAttribute('src')
    console.log(src)
}

imgs.forEach((img) => {
    img.addEventListener('click', imgSrc)
})

/**
 * outerHTML, innerHTML e innerHTML
 * propriedades que retornam uma string contendo o html ou texto. é possivel atribuir um novo valor para as mesmas
 * element.innerHTML = 'Novo Texto
 */
const menu = document.querySelector('.menu')

menu.outerHTML //todo o html do elemento
menu.innerHTML //html interno
menu.innerText //texto sem tag

menu.innerTextL = '<p>Texto</p>' //a tag vai como texto, incluindo ele msm
menu.innerHTML = '<p>Texto</p>' //a tag é renderizada

/**
 * Transversing
 * como navegar pelo DOM, utilizando suas propriedades e métodos
 */
const lista = document.querySelector('.animais-lista')

lista.parentElement //pai
lista.parentElement.parentElement
lista.previousElementSibling //elemento acima
lista.nextElementSibling //elemento abaixo

lista.children //HTMLCollection com os filhos
lista.children[0] //primeiro filho
lista.children[--lista.children.length] //ultimo elemento

lista.querySelectorAll('li') //todas as LI's
lista.querySelector('li:last-child') //ultimo filho

/**
 * element vs node
 * elements representam um elemento html, ou seja, uma tag. 
 * Node representa um nó, e pode se um elemento(element), texto, comentario, quebra de linha e manifest
 */
const lista = document.querySelector('.animais-lista')

lista.previousElementSibling //elemento acima
lista.previousSibling //node acima

lista.firstChild //primeiro node child 
lista.childNodes // todos os nodes child

/**
 * Manipulando elementos
 * é possivel mover elementos no dom com métodos de Node
 */
const lista = document.querySelector('.animais-lista')
const contato = document.querySelector('.contato')
const titulo = document.querySelector('.titulo')

contato.appendChild(lista) //move lista para o final de Contato
contato.insertBefore(lista, titulo) //insere a lista antes de titulo
contato.removeChild(titulo) //remove titulo de Contato
contato.replaceChild(lista, titulo) //substitui titulo por lista
