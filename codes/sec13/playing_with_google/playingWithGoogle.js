// LOGO

// seleciona a tag img com o atributo "Dia dos Namorados 2018"
var logo = document.querySelector("img[alt='Dia dos Namorados 2018']");
// como não tinha id ...
var logo = document.querySelector("img[width='500']");

// coloca a foto do blue heeler no lugar do logo
logo.setAttribute("src", "http://www.petguide.com/wp-content/uploads/2013/02/australian-cattle-dog.jpg");

// acessa a propriedade style (que é um obj) e acessa a propriedade width
logo.style.width = "120px";

// acessa a propriedade style (que é um obj) e acessa a propriedade height
logo.style.height = "44px";

// acessa a propriedade style (que é um obj) e acessa a propriedade border
logo.style.border = "3px solid red";



// LINKS (<a>)

// seleciona todos os <a> da página, retorna uma list com todos os elementos (não é um array)
var links = document.getElementsByTagName("a");

// para poder alterar o href de cada um não dá usar forEach, pois não é um array e não tem esse método
// devemos iterar com um for
for(let i = 0; i < links.length; i++) {
    //console.log(links[i].textContent); // printa o texto entre as tags
    links[i].style.background = "pink"; // todos os links ficam com background pink
    links[i].style.border = "1px dashed red"; // todos os links ficam com bordas
    links[i].style.color = "orange"; // todos os links ficam com cor laranja
   
    console.log(links[i].getAttribute("href")); // printa para onde os links redirecionam
    links[i].setAttribute("href", "http://www.bing.com"); // muda todos os href para bing.com
}