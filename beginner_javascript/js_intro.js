var tweetMax = 140;
var tweet = prompt("Compose your tweet: ");
alert("You have written " + tweet.length + " characters." + "You have " + (tweetMax - tweet.length) + " characters left.");

var name = "Marcel";
name.slice(0, 1);
//when slicing you first give the index (starting with 0) of what you want and then add a comma and then up to where (not including)
// so above it giving you only the first character
name.slice(3,6);
name.slice(-1,7);

var tweetMax = 140;
var tweet = prompt("Compose your tweet: ");
alert("You have written " + tweet.length + " characters." + "You have " + (tweetMax - tweet.length) + " characters left." + "Your tweet will read: " + tweet.slice(0,140));

// change string to upper case
tweet = tweet.toUpperCase();
tweet;

// change string to lower case
tweet = tweet.toLowerCase();
tweet;


// create an alert with a prompt to correct the casing to proper. Eg: Marcel, not marcel, MARCEL, mArCEL

var name = prompt("What is your name? ");
var firstLetter = name.slice(0,1);
firstLetter = firstLetter.toUpperCase();
var restOfName = name.slice(1,);
restOfName = restOfName.toLowerCase();
var nameProper = firstLetter+restOfName;
alert("Hello, " + nameProper);


// dog age to human age calculator
// humanAge = (dogAge - 2) * 4 + 21

var dogAge = prompt("What is your Dog's age? ");
var humanAge = ((dogAge - 2) * 4) + 21;
alert("Your Dog's human age is " + humanAge);

// increment and decrement expressions

age = 100;
age --; // takes 1 away
age;
age ++; // adds 1
age;
age += 10; // adds 10
age;