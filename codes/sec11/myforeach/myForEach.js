function myForEach(arr, func) {
    for(let i = 0; i < arr.length; i++) {
        func(arr.[i]);
    }
}

// Chamando myForEach sem precisar passar o array
// Devemos adicionar essa função ao Array.prototype (aí tem as fuñções pop, push etc)
Array.prototype.myForEach = function(func) {
    for(let i = 0; i < this.length; i++) {
        func(this[i]);
    }
}