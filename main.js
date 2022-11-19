const braco = document.querySelector("#braco")
const soma = document.querySelector("#somar")
const subtracao = document.querySelector("#subtrair")

const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach((elemento) => {

    elemento.addEventListener('click', (evento) => {

        alteraValor(evento.target.textContent)

    })

})

function alteraValor (operacao) {

    if (operacao === '-') {
            braco.value = parseInt(braco.value) - 1
    } else {
            braco.value = parseInt(braco.value)+ 1 
    }

}
