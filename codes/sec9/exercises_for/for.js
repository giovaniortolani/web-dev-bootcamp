// print all numbers beetwen -10 and 19
console.log("Print all numbers beetwen -10 and 19");
for(let i = -10; i < 20; i++) {
    console.log(i);
}

// print all even numbers between 10 and 40
console.log("Print all even numbers between 10 and 40");
for(let i = 40; i >= 10; i--) {
    if(i % 2 === 0) {
        console.log(i);
    }
}

// print all odd numbers between 300 and 333
console.log("Print all odd numbers between 300 and 333");
for(let i = 300; i <= 333; i++) {
    if(i % 2 !== 0) {
        console.log(i);
    }
}

// print all numbers divisible by 5 AND 3 between 5 and 50
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
for(let i = 5; i <= 50; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}
