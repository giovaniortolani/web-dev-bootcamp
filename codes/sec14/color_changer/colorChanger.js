let body = document.querySelector("body"); // ou usar direto no código: document.body.style.background
let button = document.querySelector("button");

// button.addEventListener("click", function() {
//     if(body.style.background !== "purple") {
//         body.style.background = "purple";
//     }
//     else {
//         body.style.background = "white";
//     }
// });

// let isNotPurple = true;
// button.addEventListener("click", function() {
//     if(isNotPurple) {
//         body.style.background = "purple";
//     }
//     else {
//         body.style.background = "white";
//     }
//     isNotPurple = !isNotPurple;
// });

button.addEventListener("click", function() {
    body.classList.toggle("body-color");
});