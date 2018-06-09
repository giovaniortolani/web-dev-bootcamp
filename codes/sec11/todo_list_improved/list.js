// usamos essa função para rodar no chrome e fazer aparecer o html antes de rodar o script
// em outros browsers pode ser retirada
window.setTimeout(function() {
    var todos = ["Buy Turtle"]; 

    var input = prompt("What would you like to do?");

    while(input !== "quit") {
        if(input === "list") {
            listTodos();
        }
        else if(input === "new") {
            addTodo();
        }
        else if(input === "delete") {
            deleteTodo();
        }

        input = prompt("What would you like to do?");
    }

    console.log("Ok, you quit the app");

function listTodos() {
    console.log("**********");
    // pega o elemento (todo) e o seu índice (i)
    todos.forEach(function(todo, i) {
        console.log(i + ": " + todo);
    });
    console.log("**********");
}

function addTodo() {
    // no console js
    // com let não consegue ver de fora desse bloco
    // com var é visto globalmente
    let newTodo = prompt("Enter new todo:");
    todos.push(newTodo);
    console.log("Added todo");
}

function deleteTodo() {
    // deve fornecer o índice do elemento a ser removido
    let index = prompt("Enter index of todo to delete:");
    todos.splice(index, 1);
    console.log("Deleted todo");
}

}, 500);

