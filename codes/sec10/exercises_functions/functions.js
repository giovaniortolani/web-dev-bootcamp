// ou 
// return num % 2 === 0;
function isEven(num) {
    if(num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

function factorial(num) {
    let fact = 1;

    for(let i = 1; i <= num; i++) {
        fact *= i;
    }

    return fact;
}

function kebabToSnake(str) {
    //  /regex/g, g = substituir todas as ocorrências (global)
    return str.replace(/-/g, "_");
}