function verificarPalindromo(palavra) {
    palavra = palavra.toLowerCase();
    let invertida = '';
    for (let i = palavra.length - 1; i >= 0; i--) {
        invertida += palavra[i];
    }
    if (palavra === invertida) {
        return "É um palíndromo!";
    } else {
        return "Não é um palíndromo.";
    }
}
console.log(verificarPalindromo("radar")); 
console.log(verificarPalindromo("arara"));  
console.log(verificarPalindromo("palavra")); 
