let aluno = {
    nome: "Neto",
    notas: [8, 7, 9],
    media: function() {
        let soma = 0;
        
        for (let i = 0; i < 3; i++) {
            soma += this.notas[i];
        }
        
        return soma / 3;
    }
};

console.log("Aluno: " + aluno.nome);
console.log("Média: " + aluno.media());
