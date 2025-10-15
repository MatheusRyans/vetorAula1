function imprimirVetor() {

    let vetor = [];
    let tamanho = document.getElementById("inputVetor").value;
    document.getElementById("resultado").innerHTML = "";


    for (let index = 1; index <= tamanho; index++) {
        if (index % 2 == 0) {
            vetor.push(index);
        }
    }

    document.getElementById("resultado").innerHTML += vetor;

}

function imprimirVetor2() {

    let vetorPar = [71, 55, 30, 11, 22, 10, 35, 63, 7, 5];
    let tamanho = vetorPar.length;

    for (let index = 0; index < vetorPar.length; index++) {
        if (vetorPar[index] % 2 == 0) {
            document.getElementById("resultado").innerHTML += vetorPar[index] + '<br>';
        }
    }

}