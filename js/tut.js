for ( var i = 0; i < 10; i ++){
    console.log(i);
}

var studentName = "Clement";
var haveEnroledInCourse = "true";
var haveCompletedTheCourse = "false";

if (haveEnroledInCourse) {
    console.log("Welcome to " + studentName + " to Udacity")
}

var a = 10;
var b = 20;
// a comparison - we will study this in detail in upcoming lesson
if (a>b) // The outcome of a>b will be a boolean
    console.log("Variable `a` has higher value"); // if a>b is true
else 
    console.log("Variable `b` has higher value"); // if a>b is false


    if(1){
        console.log("This statement will always execute because conditional is set to 1 i.e., true");
    }
    
    if(0){
            console.log("This statement will NEVER execute because conditional is set to 0 i.e., false");
    }

var firstName = "Clement";
var interest = "Dogs";
var hobby = "play video games";
var awesomeMessage = "Hi, my name is " + firstName + ". I love " + interest + ". In my spare time, I like to " + hobby;
console.log(awesomeMessage);

var price = 20.00; //cost of product
var money = 50.00; //cash at hand

if (money >= price ){
    console.log ("buy hammer");
}else {
    console.log("do not buy hammer")
}

var weather = "sunny";

if (weather === "snow") {
    console.log("Bring a coat.");
} else if (weather === "rain") {
    console.log("Bring a rain jacket.");
} else {
    console.log("Wear what you have on.");
}


let total = 0, count = 1;
while (count <= 10) {
    total += count;
    count += 1;
} 
console.log(total);

console.log("con" + "ca" + "te" + "nate")

console.log (`half of 100 is ${100 / 2}`)

console.log(null == undefined);

let ten = 10;
console.log( ten * ten );

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log (luigisDebt);

let one = 1, two = 2;
console.log ( one + two );

var name = "iRaph";
const greeting = "Hello ";
console.log( greeting + name );

// A function is a piece of program wrapped in a value.
// max and min in javascript
console.log(Math.max(4, 10));
console.log(Math.min(2, 5) + 100);
console.log(Math.max(10, 4) + 100);