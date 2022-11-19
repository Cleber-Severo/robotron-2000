const robotron = document.querySelector("#robotron")

robotron.addEventListener('click', (evento) => {
    console.log(evento)
})

function saudação (nome) {

    console.log("Olá" + nome)
    console.log('It is a plasure!!!')
}

saudação("dev")