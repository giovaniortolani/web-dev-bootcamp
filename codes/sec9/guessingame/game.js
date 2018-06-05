// create a secret number (hardcoded)
var secretNumber = 4;

// ask user for guess
var guess = Number(prompt("Guess a number"));
// var guess = Number(stringGuess); // fica mais explícito assim

// check if guess right
if(guess === secretNumber) {
    alert("You got it right!");
}
// otherwise, check if higher 
else if(guess > secretNumber) {
    alert("Too high. Guess again.");   
}
// otherwise, check if lower
else {
    alert("Too low. Guess again.");
}