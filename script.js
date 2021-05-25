'use strick';
///////////////////////////////////////////////////////// ACTIVATE STRICT MODE 32
/*
// Strick mode - is a speacial mode to write secure JavaScript.
//  help aviod errors - forbids developers to do certain things and creates visable errors.

//'use strick';

let hasDriversLicense = false;
const passedTest = true;

if (passedTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive.')

///////////////////////////////////////////////////////// FUNCTIONS 33
// Fucntions are pieces of code at you can use over and over.

function logger() {
    console.log('My name is Nikki.');
}

// calling / running / invoking fuction
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Jucie with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice); // one way 

console.log(fruitProcessor(5,0)); // another way

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice); // another way

const num = Number('23'); // built in functions exist 
console.log(num);
*/

///////////////////////////////////////////////////////// FUNCTION DECLARATIONS VS EXPRESSIONS 34

// function calcAge1(birthYear) {
//     const age = 2037 - birthYear;
//     return age;
// }

// FUCTION DECLARATION - can call functions before they are defined or after.
const age1 = calcAge1(1980); //<----^^

function calcAge1(birthYear) {  
    return 2037 - birthYear;
}
console.log(age1);

// FUCTION EXPRESSION - expressions produce values! // Cannot call expressions before they are defined.
const calcAge2 = function(birthYear) { // a function without a name is a annoynomous function
    return 2037 - birthYear;
}
const age2 = calcAge2(1980);

console.log(age1, age2);

///////////////////////////////////////////////////////// ARROW FUNCTION 35


