// ou document.querySelectorAll(".square");
let squares = document.getElementsByClassName("square"); // retorna uma list com os objetos (não é array)
let rgbDisplay = document.querySelectorAll(".rgb-display");

// Escolhe as cores dos quadrados
let colors = [];
for(let i = 0; i < squares.length; i++) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    colors.push([red, green, blue]);
    // usar backgroundColor e não apenas background (mais compatível entre browsers)
    squares[i].style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
}

// Escolhe uma cor "correta" e altera o título
let pickedColor = Math.floor(Math.random() * 7);
for(let i = 0; i < rgbDisplay.length; i++) {
    rgbDisplay[i].textContent = colors[pickedColor][i]
}

for(let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function() {
        // comparar a cor do quadrado clicado com a cor correta
        // let squareColor = this.style.backgroundColor;
        if(colors[i] !== colors[pickedColor]){
            this.style.backgroundColor = document.body.style.backgroundColor;
        }
        else {
            console.log("You are right!!");
        }
    }); 
}