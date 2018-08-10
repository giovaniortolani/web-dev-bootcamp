$(document).ready(function() {
    // Marca como feito/não feito um determinado todo 
    $("ul").on("click", "li", function() {
        $(this).toggleClass("mark-as");
        // ou
        // rgb(128, 128, 128) = gray
        // if($(this).css("color") === "rgb(128, 128, 128)") {
        //     $(this).css({textDecoration: "none", color: "black"});
        // }
        // else {
        //     $(this).css({textDecoration: "line-through", color: "gray"});
        // }
    });

    // Deleta um todo ao clicar no lixo
    $("ul").on("click", ".delete", function(event) {
        // stopPropagation() evita que o evento seja propagado para o li (elemento pai) e ative o event listener dele
        event.stopPropagation();
        $(this).parent().fadeOut(300, function() {
            $(this).remove();
        });
    });

    // Listener do campo de texto para adicionar um novo todo
    // ou 
    // $("input[type='text']")
    $("#todo-input").keypress(function(event) {
        if(event.key === "Enter") {
            // extrai o texto do input
            let newItem = $(this).val();
            // não insere como novo item um todo sem texto
            if(newItem !== "") {
                // extrai o texto do input
                let newItem = $(this).val();
                // cria um item e adiciona na lista
                $("ul").append("<li>" + newItem + " <span class='delete'><i class='far fa-times-circle'></i></span></li>");
                // apaga o texto do input
                $(this).val("");
            }
        }
    });

    // Listener do botão "+" que esconde/mostra o campo de texto para adição de todo
    $("button").on("click", function() {
        $("#todo-input").slideToggle(350, function() {
            // retorna o foco ao campo de texto para não precisar clicar novamente quando aparece
            // $(this).focus();
        });
    });
});