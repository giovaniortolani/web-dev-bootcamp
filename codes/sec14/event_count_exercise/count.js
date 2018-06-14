// cada um dos eventos são os primeiros td dentro de tr dentro de table
// selecionamos com "table tr td:first-child"

// também temos eventos que são <a> dentro de <code> dentro de <p>
// selecionamos com "p code a"

var count = document.querySelectorAll("p code a").length 
            + document.querySelectorAll("table tr td:first-child").length;