// let firstLi = document.querySelector("li"); // pega o primeiro li que encontrar
let lis = document.querySelectorAll("li"); // lista com os 3 lis

// firstLi.addEventListener("mouseover", function() {
//     firstLi.style.color = "green";
// });

// firstLi.addEventListener("mouseout", function() {
//     firstLi.style.color = "black";
// });

for(let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("mouseover", function() {
        this.classList.add("selected");
    });

    lis[i].addEventListener("mouseout", function() {
        this.classList.remove("selected");
    });

    lis[i].addEventListener("click", function() {
        this.classList.toggle("done");
    });
}