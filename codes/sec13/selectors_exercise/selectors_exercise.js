var p0 = document.getElementById("first");
var p1 = document.getElementsByClassName("special")[0];
var p2 = document.getElementsByTagName("p")[0];
var p3 = document.querySelector("p#first"); // ou #first
var p4 = document.querySelector(".special"); // sempre retorna o primeiro que der match
var p5 = document.querySelector("p");
var p6 = document.querySelectorAll("p.special")[0];
var p7 = document.querySelector("h1 + p"); // o p que vem imediatamente após um h1