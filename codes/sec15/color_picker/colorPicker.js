// ou document.querySelectorAll(".square");
let squares = document.getElementsByClassName("square"); // retorna uma list com os objetos (não é array)
let rgbDisplay = document.querySelectorAll(".rgb-display");
let titleDisplay = document.querySelector("#title-container");
let feedbackDisplay = document.getElementById("feedback-display");

let newGameBtn = document.getElementById("btn-newgame");
let easyBtn = document.getElementsByClassName("btn-difficulty")[1];
let hardBtn = document.getElementsByClassName("btn-difficulty")[0];
let difficulty = "hard"; // começa no hard

let squaresLength = squares.length;

let colors = [];
let pickedColor = null;

let won = false;

game();

// Event Listener do clique e tratamento de acerto/erro do jogador
for(let i = 0; i < squaresLength; i++) {
    squares[i].addEventListener("click", function() {
        if(!won) {
            // compara a cor do quadrado clicado com a cor correta
            // let squareColor = this.style.backgroundColor;
            if(colors[i] !== colors[pickedColor]){
                feedbackDisplay.textContent = "Try Again!";
                this.style.backgroundColor = document.body.style.backgroundColor;
            }
            else {
                feedbackDisplay.textContent = "Correct!";
                titleDisplay.classList.add("color-transition");
                // muda a cor do header
                titleDisplay.style.backgroundColor = this.style.backgroundColor;
                // muda a cor dos quadrados
                for(let j = 0; j < squaresLength; j++) {
                    squares[j].classList.add("color-transition");
                    squares[j].style.backgroundColor = this.style.backgroundColor;
                }
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
    easyBtn.classList.add("btn-click");
    hardBtn.classList.remove("btn-click");
    difficulty = "easy";
    reset();
    game();
});

//
hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("btn-click");
    easyBtn.classList.remove("btn-click");
    difficulty = "hard";
    reset();
    game();
});

function game() {
    if(difficulty === "hard") {
        squaresLength = squares.length;
        for(let i = 3; i < squares.length; i++) {
            squares[i].style.visibility = "visible";
        }
    }
    else if(difficulty === "easy") {
        squaresLength = 3;
        for(let i = 3; i < squares.length; i++) {
            squares[i].style.visibility = "hidden";
        }
    }

    // Escolhe as cores dos quadrados e atribui-as
    colors = generateRandomColors(squaresLength);
    for(let i = 0; i < squaresLength; i++) {
        // usar backgroundColor e não apenas background (mais compatível entre browsers)
        squares[i].style.backgroundColor = "rgb(" + colors[i][0] + ", " + colors[i][1] + ", " + colors[i][2] + ")";
    }

    // Escolhe uma cor "correta" e altera o título
    pickedColor = pickColor(squaresLength);
    for(let i = 0; i < rgbDisplay.length; i++) {
        rgbDisplay[i].textContent = colors[pickedColor][i]
    }
}

function reset() {
    newGameBtn.textContent = "New Colors";
    feedbackDisplay.textContent = "";
    titleDisplay.style.backgroundColor = "#3A73AA";
    titleDisplay.classList.remove("color-transition");
    for(let i = 0; i < squaresLength; i++) { 
        squares[i].classList.remove("color-transition");
    }
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