// ou document.querySelectorAll(".square");
let squares = document.getElementsByClassName("square"); // retorna uma list com os objetos (não é array)
let rgbDisplay = document.querySelectorAll(".rgb-display");
let titleDisplay = document.querySelector("#title-container");
let feedbackDisplay = document.getElementById("feedback-display");
let newGameBtn = document.getElementById("btn-newgame");
let easyBtn = document.getElementsByClassName("btn-difficulty")[1];
let hardBtn = document.getElementsByClassName("btn-difficulty")[0];

let difficulty = "hard"; // começa no hard
let numOfSquares = squares.length;
let colors = [];
let pickedColor = null;
let won = false;

game();

// Event Listener do clique e tratamento de acerto/erro do jogador
for(let i = 0; i < numOfSquares; i++) {
    squares[i].addEventListener("click", function() {
        // won é usada para impedir qualquer ação nos quadrados após ganhar o jogo
        if(!won) {
            // compara a cor do quadrado clicado com a cor correta
            // let squareColor = this.style.backgroundColor;
            if(colors[i] !== colors[pickedColor]){
                feedbackDisplay.textContent = "Try Again!";
                // esconde o quadrado
                this.style.backgroundColor = document.body.style.backgroundColor;
            }
            else {
                feedbackDisplay.textContent = "Correct!";
                // muda a cor do header
                changeHeaderColor(this.style.backgroundColor);
                // muda a cor dos quadrados
                changeSquaresColor(this.style.backgroundColor);
                // muda o texto em newGameBtn 
                newGameBtn.textContent = "Play Again?";
                won = true;
            }
        }
    }); 
}

//
newGameBtn.addEventListener("click", function() {
    reset();
    game();
});

//
easyBtn.addEventListener("click", function() {
    hardBtn.classList.remove("btn-click");
    easyBtn.classList.add("btn-click");
    numOfSquares = 3;  // 3 quadrados
    difficulty = "easy";
    reset();
    game();
});

//
hardBtn.addEventListener("click", function() {
    easyBtn.classList.remove("btn-click");
    hardBtn.classList.add("btn-click");
    numOfSquares = squares.length; // 6 quadrados
    difficulty = "hard";
    reset();
    game();
});

function game() {
    if(difficulty === "hard") {
        // numOfSquares = squares.length; // 6 quadrados
        setSquaresVisibility("visible", numOfSquares);
    }
    else if(difficulty === "easy") {
        // numOfSquares = 3;  // 3 quadrados
        setSquaresVisibility("hidden", numOfSquares);
    }

    // Escolhe as cores dos quadrados e atribui-as
    colors = generateRandomColors(numOfSquares);
    for(let i = 0; i < numOfSquares; i++) {
        // usar backgroundColor e não apenas background (mais compatível entre browsers)
        squares[i].style.backgroundColor = "rgb(" + colors[i][0] + ", " + colors[i][1] + ", " + colors[i][2] + ")";
    }

    // Escolhe uma cor "correta" e altera o título
    pickedColor = pickColor(numOfSquares);
    for(let i = 0; i < rgbDisplay.length; i++) {
        rgbDisplay[i].textContent = colors[pickedColor][i]
    }
}

function reset() {
    newGameBtn.textContent = "New Colors";
    feedbackDisplay.textContent = "";
    // titleDisplay.classList.remove("color-transition");
    titleDisplay.style.backgroundColor = "#3A73AA";
    // for(let i = 0; i < numOfSquares; i++) { 
    //     // squares[i].classList.remove("color-transition");
    // }
    colors = [];
    pickedColor = null;
    won = false;
}

function generateRandomColors(numOfColors) {
    let colors = [];
    for(let i = 0; i < numOfColors; i++) {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        colors.push([red, green, blue]);
    }

    return(colors);
}

function pickColor(numOfColors) {
    return(Math.floor(Math.random() * numOfColors));
}

// Começa pelo fim do array de squares e muda a visibilidade de (n = numOfSquares) quadrados
function setSquaresVisibility(mode, numOfSquares) {
    for(let i = squares.length - 1; i >= squares.length - numOfSquares; i--) {
        squares[i].style.visibility = mode;
    }
}

function changeHeaderColor(color) {
    // titleDisplay.classList.add("color-transition");
    titleDisplay.style.backgroundColor = color;
}

function changeSquaresColor(color) {
    for(let i = 0; i < numOfSquares; i++) {
        // squares[i].classList.add("color-transition");
        squares[i].style.backgroundColor = color;
    }  
}
