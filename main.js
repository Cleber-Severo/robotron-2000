const braco = document.querySelector("#braco")
const soma = document.querySelector("#somar")
const subtracao = document.querySelector("#subtrair")


soma.addEventListener('click', () => {

    braco.value = parseInt(braco.value)+ 1 

})

subtracao.addEventListener('click', () => {

    braco.value = parseInt(braco.value) - 1

})


