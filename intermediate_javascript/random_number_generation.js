// creating a random number using the Math.random() function
// to create a random number between 1 and 6 * the random number by 6 and then +1 because it is not inclusive

var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;
console.log(n);
