var movies = [
    {
        title: "Memento",
        rating: 8.5,
        hasWatched: true
    },
    {
        title: "As Branquelas",
        rating: 8,
        hasWatched: true
    },
    {
        title: "Extraordinário",
        rating: 8,
        hasWatched: false
    },
    {
        title: "Avengers: Infinity War",
        rating: 8.8,
        hasWatched: false
    }
];

movies.forEach(function(movie) {
    if(movie.hasWatched) {
        console.log("You have seen " + "\"" + movie.title + "\"" + " - " + movie.rating + " stars");
    }
    else { // has NOT watched
        console.log("You have not seen " + "\"" + movie.title + "\"" + " - " + movie.rating + " stars");
    }
});

// OU

// movies.forEach(function(movie) {
//     console.log(buildString(movie));
// });

// function buildString(movie) {
//     let result = "You have ";

//     if(movie.hasWatched) {
//         result += "seen ";
//     }
//     else {
//         result += "not seen ";
//     }
//     result += "\"" + movie.title + "\" - " + movie.rating + " stars";

//     return result;
// }