const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach((elemento) => {

    elemento.addEventListener('click', (evento) => {

        alteraValor(evento.target.dataset.controle, evento.target.parentNode)

    })

})

function alteraValor (operacao, controle) {

    const peca = controle.querySelector("[data-contador]")


    if (operacao === '-') {
            peca.value = parseInt(peca.value) - 1
    } else {
            peca.value = parseInt(peca.value)+ 1 
    }

}
