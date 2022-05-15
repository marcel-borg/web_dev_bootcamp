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

// FUNCTIONS

//var bottles = prompt("How many bottles of milk do you need?")
var money = prompt("How many cash do you have to spend? ");
var cost = 1.5;
var bottles = money / cost;

function getMilk(bottles) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("You can buy " + Math.floor(bottles) + " bottles of milk")
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
}

getMilk(bottles);

// v2 with a change return
var money = prompt("How many cash do you have to spend? ");
var cost = 1.5;
var bottles = money / cost;

function getMilk(bottles) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("You can buy " + Math.floor(bottles) + " bottles of milk")
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    return money % cost // remainder of the division
}

getMilk(bottles);


// time left until 90 years old calculator

function lifeInWeeks(age) {
    var age = prompt("How old are you? ");
    var yearsRemaining = 90 - age;
    var days = yearsRemaining * 365;
    var weeks = yearsRemaining * 52;
    var months = yearsRemaining * 12;
    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
}

lifeInWeeks();


// BMI Calculator

//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

var weight = prompt("Enter your weight (in kg) ")
var height = prompt("Enter your height (in m) ")

function bmiCalculator(weight,height) {
    var bmi = weight / Math.pow(height,2);
    return bmi;
}

bmiCalculator(weight, height);


/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/