const braco = document.querySelector("#braco")
const soma = document.querySelector("#somar")
const subtracao = document.querySelector("#subtrair")

const controle = document.querySelectorAll(".controle-ajuste")

console.log(controle);

function alteraValor (operacao) {

    if (operacao === 'subtrair') {
            braco.value = parseInt(braco.value) - 1
    } else {
            braco.value = parseInt(braco.value)+ 1 
    }

}

soma.addEventListener('click', () => { alteraValor("somar") })

subtracao.addEventListener('click', () => { alteraValor("subtrair") })


