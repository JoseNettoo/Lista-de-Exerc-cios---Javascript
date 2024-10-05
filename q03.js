let tarefas = [];
for (let i = 0; i < 5; i++) {
    let tarefa = prompt("Digite uma tarefa:");
    tarefas.push(tarefa);
}
console.log("Suas tarefas:");
console.log(tarefas);

let tarefaConcluida = parseInt(prompt("Digite o número da tarefa concluída (1 a 5):"));

tarefas.splice(tarefaConcluida - 1, 1);

console.log("Tarefas restantes:");
console.log(tarefas);
