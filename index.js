//CAÇA BUGS - CONDICIONAIS

let iniciar = prompt("Deseja iniciar o programa? s/n")

if (iniciar == "s") {
    alert("Programa iniciado!")
} else {
    alert("Programa encerrado!")
    let opcao = prompt("Escolha uma ação a ser feita -> 1 - Mensagem motivacional; 2 - Mensagem desmotivacional; 3 - nada")
    switch (opcao) {
        case 1:
            alert("Continue tentando, você VAI conseguir!")
            break;
        case 2:
            alert("Desista, você NÃO VAI conseguir!")
            break;
        default:
            alert("nada")
            break;
    }
}
