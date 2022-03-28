const sections = document.querySelectorAll('.js-scroll') //seleciona todos elementos com a seguinte classe
const windowMetade = window.innerHeight * 0.7 //pega 70% da tela do usuário

if (sections.length) { //faz a verificação da existencia destes elementos
    function animaScroll() { //criação da função
        sections.forEach((section) => { //percorre por todos os elementos
            const sectionTop = section.getBoundingClientRect().top - windowMetade //subtrai o tamanho da tela em 70% com a distancia do topo
            sectionTop < 0 ? section.classList.add('ativo') : section.classList.remove('ativo'); //faz a verificação da distancia do topo
        })
    }
    animaScroll() //é chamada assim que carrega o documento
    window.addEventListener('scroll', animaScroll) // é ativada assim que o usuario ativa  o scroll
}