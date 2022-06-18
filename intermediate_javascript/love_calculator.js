//  not like the python class where they use the letters and some maths to get a %
//  this is just using total random number generation
//  but we will create a scale to say if your score is < x then abc etc

prompt("What is your name? ");
prompt("What is your love's name? ");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
console.log(loveScore);

alert("Your love score is " + loveScore + "%");
