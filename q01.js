function calculadora(num1, num2, operacao) {
    if (operacao === 'soma') {
        return num1 + num2;
    } else if (operacao === 'subtracao') {
        return num1 - num2;
    } else if (operacao === 'multiplicacao') {
        return num1 * num2;
    } else if (operacao === 'divisao') {
        return num2 !== 0 ? num1 / num2 : 'Erro: Divisão por zero';
    } else {
        return 'Operação inválida';
    }
}

console.log(calculadora(10, 5, 'soma'));          
console.log(calculadora(10, 5, 'subtracao'));     
console.log(calculadora(10, 5, 'multiplicacao')); 
console.log(calculadora(10, 5, 'divisao'));       
console.log(calculadora(10, 0, 'divisao'));
console.log(calculadora(10, 5, 'modulo'));  
