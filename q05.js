function gerarTabuada(numero) {
    if (numero > 0) {
        for (let i = 1; i <= 10; i++) {
            console.log(numero + " x " + i + " = " + (numero * i));
        }
    } else {
        console.log("Número inválido. Digite um número positivo.");
    }
}

gerarTabuada(5);
