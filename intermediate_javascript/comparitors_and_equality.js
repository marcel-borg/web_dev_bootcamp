// === equal to - using the triple = also checks to make sure the datatype matches
// !== not equal to
// > greather than
// < less than
// >= greater than or equal to
// <= less than or equal to

var a = 1;
var b = "1";

if (a === b) {
  console.log("yes");
} else {
    console.log("no");
}

//  here you will get "no" as the answer because we are using === which also looks at datatype

var a = 1;
var b = "1";

if (a == b) {
  console.log("yes");
} else {
    console.log("no");
}
//  here you will get "yes" as the answer because we are using == which does not look at datatype
