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

// let theNumber = Number(prompt("pick a number"));
// console.log("Your number is the square root of " + theNumber * theNumber);

// let theNumber = Number(prompt("Pick A Number"));
// if(!Number.isNaN(theNumber)) {
//     console.log("Your number is the square root of " + theNumber * theNumber)
// }else{
//     console.log("Hey, Why didn't you give me a number?")
// }

// if( (1 + 1) === 2){
//     console.log("It is true")
// } 

// let num = Number(prompt("Enter a Number"));
// if(num < 10) {
//     console.log("This is a small number")
// }else if( num < 50 ){
//     console.log("This is a medium number")
// } else {
//     console.log("This is a larger number")
// }

let number = 0;
while (number <= 12){
    console.log(number);
    number = number + 2;
}

let result = 1;
let counter = 0;
while (counter < 10){
    result = result * 2;
    counter = counter + 1
} console.log(result)


/*
 * Programming Quiz: Ice Cream (3-6)
 *
 * Write a single if statement that logs out the message:
 * 
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 * 
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators. 
 * It's okay if the output string doesn't match exactly.
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `flavor`, `vessel`, and `toppings`
 * 2. Your code should have an `if` statement
 * 3. Your code should use logical expressions
 * 4. Your code should work with 
 *  - `flavor=vanilla`, `vessel=cone`, and `toppings=sprinkles`
 *  - `flavor=vanilla`, `vessel=cone`, and `toppings=peanuts`
 *  - `flavor=vanilla`, `vessel=bowl`, and `toppings=sprinkles`
 *  - `flavor=vanilla`, `vessel=bowl`, and `toppings=peanuts`
 * 
 *  - `flavor=chocolate`, `vessel=cone`, and `toppings=sprinkles`
 *  - `flavor=chocolate`, `vessel=cone`, and `toppings=peanuts`
 *  - `flavor=chocolate`, `vessel=bowl`, and `toppings=sprinkles`
 *  - `flavor=chocolate`, `vessel=bowl`, and `toppings=peanuts`
 *   
 * 5. Your code should NOT log (print) anything when 
 *  - the flavor is something other than "vanilla" or "chocolate"
 *  - the vessel is something other than "cone" or "bowl"
 *  - the toppings is something other than "sprinkles" or "peanuts"
 * 
 * 6. Your code should not be empty
 */
 
// change the values of `flavor`, `vessel`, and `toppings` to test your code
var flavor = "strawberry";
var vessel = "cone";
var toppings = "cookies";

// Add your code here

if ((flavor === 'vanilla' || flavor === 'strawberry')&&(vessel ==='cone' || vessel == 'bowl')&&(toppings == 'sprinkles' || toppings === 'cookies')){
    console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings)
}


// let yourName;
// do {
//     yourName = prompt("who are you?");
// }while(yourName){
//     console.log(yourName)
// }

for(let num = 0; num <= 12; num = num + 2){
    console.log(num);
}

// let result = 1;
// for (let counter = 0; counter < 10; counter = counter + 1)  {
//     result = result * 2;
// } console.log(result);

for (let current = 20; ; current = current + 1 ){
    if(current % 7 === 0) {
        console.log(current);
        break;
    }
}

// switch(prompt("What is the weather like?"))  {
//     case "Rainy":
//         {
//             console.log("Remember to go out with an Umbrella")
//         } break;

//         case "Sunny": {
//             console.log("Dress Lightly")
//         } break;
        
//         case "Dry": {
//             console.log("Go Out")
//         }break;

//         default: {
//             console.log("Unkwown weather type")
//         }
// }



for(let shape = "#"; shape.length < 8; shape += "#") {
    console.log(shape)
}


// FIZZBUZZ

for (let n = 1; n <= 100; n++){
    let result = "";
    if (n % 3 === 0 ) result += "FIZZ";
    if (n % 5 === 0 ) result += "BUZZ";
    {
        console.log( result  || n)
    }
}

// CHESSBOARD

let size = 8;

let board = "";

for (let m = 0; m < size; m++) {
    for (let n = 0; n < size; n++) {
        if ((n + m) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}

console.log(board);


// Defining a function
const square = function (x)  {
    return  x * x;
} ;
console.log(square(12));

const makeNoise = function () {
    console.log("Pling!")
};
makeNoise();

const power = function (base, exponent)  {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}; console.log(power(2, 10))


document.getElementById("myDiv").style.background = "black";
document.getElementById("myDiv").style.color = "#fff"


var world = "World";

function sayHello () {
    var hello = "Hello ";
    console.log(hello + world);
}

sayHello()

var name = "Nnamdi Clement Azubuike.";

function sayName () {
    var sideHustle = " I am an intern at Side Hustle";
    var hello = "Hello"
    console.log(hello + ", My name is " + name + sideHustle)
}

sayName()


// Shadowing a Variable

var myColor = "Blue";
console.log("myColor before myFunc()", myColor);


function myFunc (){
    var myColor = "Yellow"; 
    // this is a shadowed variable
    console.log("myColor inside myFunc()", myColor)
}

myFunc();


var whole = "Hello World!"

var length = whole.indexOf("World");
console.log(length)