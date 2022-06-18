// && = AND
// || = OR
// ! = NOT

prompt("What is your name? ");
prompt("What is your love's name? ");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
console.log(loveScore);

if (loveScore > 70) {
    alert("Your love score is " + loveScore + "%. " + "You love each other like Kanye loves Kanye.");
}

if (loveScore > 30 && loveScore <= 70) {
  alert("Your love score is " + loveScore + "%. " + "You will make a decent couple.");
}

if (loveScore <= 30) {
    alert("Your love score is " + loveScore + "%. " + "You are not very compatible");
}
