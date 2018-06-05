// Number() converte a string para a representação numérica
var age = Number(prompt("Whats is your age?"));
while(isNaN(age)) {
    age = Number(prompt("Whats is your age? (Numbers only)"));
}

if(age < 0) {
    console.log("ERROR: age is negative.");
}
else {
    if(age % 2 !== 0) {
        console.log("Your age is odd!");
    }

    // poderia fazer
    // if(!String(Math.sqrt(age)).includes('.'))
    // transforma em uma string e depois verifica se contém um ponto
    if(Math.sqrt(age) % 1 === 0) {
        console.log("Perfect square!");
    }

    if(age < 18) {
        console.log("You can't enter.");
    }
    else if(age < 21) {
        console.log("You can enter but you can't drink.");
    }
    else {
        console.log("You can enter!");
        if(age === 21) {
            console.log("Happy 21st birhtday!");
        }
    }
}