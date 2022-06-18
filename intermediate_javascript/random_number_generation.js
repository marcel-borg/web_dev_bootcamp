// creating a random number using the Math.random() function
// because we need to use the floor function, it is going to generate a number betwen 0 and 5
// so we then + 1 at the end to make it between 1 and 6

var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;
console.log(n);
