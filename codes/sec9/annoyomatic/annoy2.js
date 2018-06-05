var answer = prompt("Are we there yet?");

// ou while(answer.indexOf("yes") === -1) // retorna o índice de onde começa a palavra, -1 se não tiver
while(!answer.includes("yes") && !answer.includes("yeah")) {
    answer = prompt("Are we there yet?");
}

alert("YAY, WE MADE IT!");