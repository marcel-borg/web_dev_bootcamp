// same as the love calc but here we've added in some conditionals. IF ELSE.
// if your love score is over 70 you apparently love each other as much as Kanye loves himself

prompt("What is your name? ");
prompt("What is your love's name? ");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
console.log(loveScore);

if (loveScore > 70) {
    alert("Your love score is " + loveScore + "%. " + "You love each other like Kanye loves Kanye.");
} else {
    alert("Your love score is " + loveScore + "%");
}
