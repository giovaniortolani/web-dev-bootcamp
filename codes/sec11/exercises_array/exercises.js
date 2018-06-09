// array como argumento e printa os elemntos na ordem reversa
function printReverse(arr) {
    for(let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

// array como argumento e retorna true se todos os elementos no array são identicos
// se usasse um forEach aqui, a callback iria retorna false para a isUniform apenas, e ela iria retornar true
function isUniform(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] !== arr[i + 1]) {
            return false;
        } 
    }
    return true;
}

// array de números como argument e retorna a soma de todos os números no array
function sumArray(arr) {
    let result = 0;

    arr.forEach(function(num) {
        result += num;
    });

    return result;
}

// array de números como argumento e retorna o maior número desse array
function max(arr) {
    let maxNum = arr[0];

    arr.forEach(function(num) {
        if(num > maxNum) {
            maxNum = num;
        }
    });

    return maxNum;
}