const result = document.querySelector(".resultado")
const meuPonto = document.querySelector("#meu-ponto")
const maquinaponto = document.querySelector("#maquina-ponto")

let numberHuman = 0
let numberMaquina = 0

const playHumano = (jogadorHumano) => {

    jogandoJogo(jogadorHumano, playMaquina())


}

const playMaquina = () => {
    const opcoes = ['pedra', 'papel', 'tesoura']
    const randomNamber = Math.floor(Math.random() * 3)


    return opcoes[randomNamber]
}

const jogandoJogo = (humano, maquina) => {
    console.log('humano:' + humano + 'maquina:' + maquina);

    if (humano === maquina) {

        result.innerHTML = "Deu empate &#x1F914;"
    } else if ((humano === 'papel' && maquina === 'pedra')
        || (humano === 'pedra' && maquina === 'tesoura')
        || (humano === 'tesoura' && maquina === 'papel')
    ) {
        numberHuman++
        meuPonto.innerHTML = numberHuman
        result.innerHTML = "Você ganhou &#x1F600;"
    } else {
        numberMaquina++
        maquinaponto.innerHTML = numberMaquina
        result.innerHTML = "Você perdeu para maquina &#x1F622;"
    }
}