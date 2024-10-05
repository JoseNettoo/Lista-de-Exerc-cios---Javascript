let produtos = [
    { nome: "Produto A", preco: 10, quantidade: 5 },
    { nome: "Produto B", preco: 15, quantidade: 3 },
    { nome: "Produto C", preco: 20, quantidade: 2 }
];

function calcularValorTotalEstoque(produtos) {
    let total = 0;

    for (let i = 0; i < produtos.length; i++) {
        total += produtos[i].preco * produtos[i].quantidade;
    }

    return total;
}

let valorTotal = calcularValorTotalEstoque(produtos);
console.log("Valor total do estoque: R$ " + valorTotal);
