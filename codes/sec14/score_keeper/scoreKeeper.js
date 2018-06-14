let p1Button = document.getElementById("p1btn");
let p2Button = document.querySelector("#p2btn");
let resetButton = document.getElementById("resetbtn"); // ou getElementsByTagName("button")[2]
let p1Display = document.getElementById("p1Display");
let p2Display = document.querySelector("#p2Display");
let numInput = document.querySelector("input[type='number']");
let winningScoreDisplay = document.getElementById("winScore"); // ou querySelector("p span"); // span dentro de p

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;

let gameOver = false; // vai controlar o estado do jogo 

// *** Eventos ***

// https://stackoverflow.com/questions/17047497/what-is-the-difference-between-change-and-input-event-for-an-input-element/17047607#17047607
// é ruim colocar "click" aqui pois pode entrar com os dados pelo teclado e não vai capturar o evento
// "change" é melhor nesse caso, vai ser acionado toda vez que o valor mudar (seja pelo mouse ou teclado), porém será acionado apenas quando perder o foco do elemento
// "input" é melhor ainda, pois muda quando o conteúdo é mudado (e não quando perde o foco)
numInput.addEventListener("input", function() {
    // value = pega o valor que está dentro do input
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);  // value retorna o valor como STRING, converter pra NUMBER
    reset();
});

p1Button.addEventListener("click", function() {
    // enquanto não acabar o jogo, pode jogar e incrementar a variável
    if(!gameOver) {
        p1Score++;
        p1Display.textContent = p1Score;
        // caso o score seja igual ao score vencedor, então game over
        if(p1Score === winningScore) {
            p1Display.classList.add("winner-color");
            gameOver = true;
        }
    }
});

p2Button.addEventListener("click", function() {
    // enquanto não acabar o jogo, pode jogar e incrementar a variável
    if(!gameOver) {
        p2Score++;
        p2Display.textContent = p2Score;
        // caso o score seja igual ao score vencedor, então game over
        if(p2Score === winningScore) {
            p2Display.classList.add("winner-color");
            gameOver = true;
        }
    }
});

// // refatorando
// // playerScore é por valor, por isso retorna
// // playerDisplay é por referencia, pois está mexendo em uma propriedade do objeto
// function changeScore(playerScore, playerDisplay) {
//     if(!gameOver) {
//         playerScore++;
//         playerDisplay.textContent = playerScore;
//         // caso o score seja igual ao score vencedor, então game over
//         if(playerScore === winningScore) {
//             playerDisplay.classList.add("winner-color");
//             gameOver = true;
//         }
//     }

//     return playerScore;
// }

// // bastaria fazer isso nos Event Listener de p1Button e p2Button
// p1Button.addEventListener("click", function() {
//     p1Score = changeScore(p1Score, p1Display);
// }


resetButton.addEventListener("click", function() {

    reset();

// Refatoramos o código, tudo o que estava aqui virou a função reset()
// Fizemos isso pois vamos utilizar em mais de um lugar

//     // jeito díficil de remover
//     // if(p1Score > p2Score) {
//     //     p1Display.classList.remove("winner-color");
//     // }
//     // else {
//     //     p2Display.classList.remove("winner-color");
//     // }

//     // podemos remover das duas, caso a classe não exista o método remove não gera erro
//     p1Display.classList.remove("winner-color");
//     p2Display.classList.remove("winner-color");
//     p1Score = 0;
//     p2Score = 0;
//     p1Display.textContent = p1Score;
//     p2Display.textContent = p2Score;
//     gameOver = false;
});

function reset() {
    // jeito díficil de remover a classe winner-color
    // if(p1Score > p2Score) {
    //     p1Display.classList.remove("winner-color");
    // }
    // else {
    //     p2Display.classList.remove("winner-color");
    // }

    // podemos remover das duas, caso a classe não exista o método remove não gera erro
    p1Display.classList.remove("winner-color");
    p2Display.classList.remove("winner-color");
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    gameOver = false;
}