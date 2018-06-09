// usamos essa função para rodar no chrome e fazer aparecer o html antes de rodar o script
// em outros browsers pode ser retirada
window.setTimeout(function() {
    var todos = ["buy turtle"]; // lista vazia

    var input = prompt("What would you like to do?");

    while(input !== "quit") {
        if(input === "list") {
            console.log(todos);
        }
        else if(input === "new") {
            // no console js
            // com let não consegue ver de fora desse bloco
            // com var é visto globalmente
            let newTodo = prompt("Enter new todo:");
            todos.push(newTodo);
        }

        input = prompt("What would you like to do?");
    }

    console.log("Ok, you quit the app");
}, 500);
