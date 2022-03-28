const accordionList = document.querySelectorAll('.js-accordion dt') //seleciona todo os elementos
const ativoClass = 'ativo' //string para definir o nome da classe

if (accordionList.length) { //verifica se existe algum elemento
    accordionList[0].classList.add(ativoClass) //adiciona a classe para o seguinte elemento
    accordionList[0].nextElementSibling.classList.add(ativoClass) //adiciona a classe para o seguinte elemento
        
    function activeAccordion() {
        this.classList.toggle(ativoClass) //caso exista o elemento ele adiciona, caso não ele remove
        this.nextElementSibling.classList.toggle(ativoClass) //caso exista o elemento ele adiciona, caso não ele remove
    }

    accordionList.forEach((item) => { //percorre por todos os elementos 
        item.addEventListener('click',activeAccordion) //executa a função ao clicar no elemento
    })
}