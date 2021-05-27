'use strict';
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
 Fucntions are pieces of code at you can use over and over.
unction logge {
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
// Arrow functions do not get a so-called this keyword.

const calcAge3 = birthYear => 2037 - birthYear; //birthYear is parameter
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement
    return `${firstName} retires in ${retirement} years.`;
}

console.log (yearsUntilRetirement(1991, 'Nikki'));
console.log (yearsUntilRetirement(1980, 'Susan'));

///////////////////////////////////////////////////////// FUNCTIONS CALLING OTHER FUNCTIONS 36

function cutFruitPieces (fruit) {
    return fruit * 4;
};

function fruitProcessor(apples, oranges) {
const applePieces = cutFruitPieces(apples);
const orangePieces = cutFruitPieces(oranges);
const juice = `Jucie with ${applePieces} apples and ${orangePieces} oranges.`;
return juice;
}

console.log(fruitProcessor(2, 3));

///////////////////////////////////////////////////////// REVIEWING FUCTIONS 37

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
 const age = calcAge(birthYear);
 const retirement = 65 - age;
        
if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
} else {
    console.log(`${firstName} has already retired.`);
        return -1;
}
}
console.log(yearsUntilRetirement(1980, 'Nikki'));
console.log(yearsUntilRetirement(1950, 'Mike'));

///////////////////////////////////////////////////////// INTRODUCTION TO ARRAYS 39

//--------------------------------------**NOTES FROM JOHN**----------------------------

// All arrays are members of Array class. The Array class provides a lot of built in methods. A few of the most useful methods are: 

    // - map: 
            const sampleArray = [1, 2, 3, 4, 5];
            const sampleArrayTwo = [222, 545, 978];

            const addTwo = sampleArray.map((number) => {
                return number + 2;
            });

            const addTwoFuntion = (numberArray) => {
                return numberArray.map((number, numberIndex) => {
                    return number + 2;
                })
            }

            const chainedMap = addTwoFuntion(sampleArray).map((element, index, oArray) => {
                return {
                    element, index, oArray
                }
            });


            const addTwoAgain = addTwoFuntion(sampleArray);
            const addTwoAgainAgain = addTwoFuntion(sampleArrayTwo);

        console.log({addTwoAgain});
        console.log({addTwoAgainAgain});
        console.log({chainedMap})

    // - Filter
    // - Sort*
    // - Reduce
    
    /////////////////////////////////////////////////////////

    const friend1 = 'Nikki';
    const friend2 = 'John';
    const friend3 = 'Bryan';

    const friends = ['Nikki', 'John', 'Bryan']
    console.log(friends);

    const yearsArray = new Array(1991, 1984, 2008, 2020);

    console.log(friends[0]);
    console.log(friends[2]);
                    //--^^ In these brackets [] - Can be used to add elements to an Array.
    console.log(friends.length);
    console.log(friends[friends.length - 1]); //-- retrieves the last element in the Array. 
                        //--^^ In these brackets [] you can put any expression; A expression is something that produces a value!!!!


//----Changing elements to an Array
friends[2] = 'Josh';
console.log(friends);

// Arrays can be mutated becuase they are not a primitive value (I.E. const). You cannot change the whole Array. 

// Arrays can hold values of different types all at the same time.
const firstName = 'Nikki';
const nikki = [firstName, 'Grostefon', 2037-1980,'Programmer', friends];
console.log(nikki);
console.log(nikki.length);

// Exercise - complete a operation outside of Array
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

// Arrays covert numbers to strings, so you can do operations with them by themselves.
// ^ console.log(years + 10)


const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

// Arrays can hold funtion calls
const ages = [calcAge(years[0]), calcAge(years[1]),calcAge(years[years.length - 1])];
console.log(ages);

///////////////////////////////////////////////////////// Basic Array Operations (Methods) 40
// ARRAY'S ARE OBJECTS

// - PUSH METHOD: adds elemets to the end of the an Array
// const friends = ['Nikki', 'John', 'Bryan'];
// friends.push('Jay'); // - Jay is the argument
// console.log(friends);

// - ALTERNATE WAY & displays length - ^^^^^
const friends = ['Nikki', 'John', 'Bryan'];
const newLength = friends.push('Levi');  //<-----displays length
console.log(friends);
console.log(newLength);                 //<-----displays length

// - UNSHIFT METHOD: adds elements to the beginning of an Array.
friends.unshift('Josh');
console.log(friends);

// POP METHOD: removes elements from Arrays.
friends.pop();
console.log(friends);

const popped = friends.pop(); //----- shows removed name
console.log(popped);
console.log(friends);

// SHIFT METHOD: removed the first element of an Array.
friends.shift();
console.log(friends);

// INDEXOF: tells us what position the element is in the Array.
console.log(friends.indexOf('John'));
console.log(friends.indexOf('Ben')); // <--- not in array will return -1.

// INCLUDESl: will return a boolean answer if the element is in the Array or Not in the Array.
friends.push(23);
console.log(friends.includes('John'));
console.log(friends.includes('Ben'));
console.log(friends.includes(23));

// We can you the INCLUDES method to write conditionals.
if (friends.includes('John')) {
    console.log('You have a friend called John');
}

///////////////////////////////////////////////////////// INDRODUCTION TO OBJECTS 42
const jonas = {
    firstName: 'Nikki',
    lastName: 'Grostefon',
    age: 2037-1980,
    job: 'Programmer',
    friends: ['Bryan', 'John', 'Levi']
};

// ^^^^^ the order of valuses/properties is not important. Objects are for more unstructured data. Arrays are for structure.

///////////////////////////////////////////////////////// Dot vs. Bracket Notation
const nikki = {
    firstName: 'Nikki',
    lastName: 'Grostefon',
    age: 2037-1980,
    job: 'Programmer',
    friends: ['Bryan', 'John', 'Levi', 'Josh']
};
console.log(nikki);

// ------DOT NOTATION
console.log(nikki.lastName); //-- returns "Grostefon"
console.log(nikki['lastName']); //-- Also returns "Grostefon"

//-----BRACKET NOTATION
const nameKey = 'Name';
console.log(nikki['first' + nameKey]) //-- Return's "Nikki" - MUST USE CRULIES
console.log(nikki['last' + nameKey]) //-- Return's "Grostefon" - MUST USE CRULIES

//-------

const interestedIn = prompt ('What do you want to know about Nikki? Choose between firstName, lastName, age, job, and friends.');

if (nikki[interestedIn]) {
    console.log(nikki[interestedIn]);
} else {
    console.log('Wrong Anser! Please choose beteween firstName, lastName, age, job, and friends.');
}

nikki.location = 'United States of America';
nikki['twitter'] = '@thenikkinichole';
console.log(nikki);

console.log(`${nikki.firstName} has ${nikki.friends.length} friends, and her grumpiest friend is ${nikki.friends[2]}.`);
*/
///////////////////////////////////////////////////////// OBJECT METHODS 44

        //---object
const nikki = {
    firstName: 'Nikki',
    lastName: 'Grostefon',
    birthYear: 1980,
    job: 'Programmer',
    friends: ['Bryan', 'John', 'Levi', 'Josh'],
    hasDriversLicense: false,

//**********************BELOW - any EXPRESSION within a OBJECT is a METHOD*********

// KEY: "calcAge" is now property that holds a function value of the nikki object defined by the ":"
    // calcAge: function(birthYear) {           // <----- ONE WAY 
    //     return 2037 - birthYear;
    // }

    // calcAge: function() {            //<----- ANOTHER WAY ---- ****USING THIS****
    //     console.log(this); // <--- Calling "this" inside the object will present all properties for that object.
    //     return 2037 - this.birthYear;
    // }

    //----- ANOTHER WAY ---- ****USING THIS****
    calcAge: function() {             
        this.age = 2037 - this.birthYear;
        return this.age;
    }, // <---- using multiple methods you will need this comma!!!

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${nikki.job}, and she ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }                    //^^^^^^^^^^^^ using the turnery operator we can assign values for the string.
};

// console.log(nikki.calcAge(1980)); // ---- CALL FUNCTION 

// console.log(nikki['calcAge'](1980)); //---- ANOTHER WAY TO CALL A FUNCTION; SAME RESULT

console.log(nikki.calcAge()); //---- ANOTHER CALL ---- ****USING THIS****

console.log(nikki.age);       //---- ANOTHER CALL ---- ****USING THIS****
console.log(nikki.age);
console.log(nikki.age);

console.log(nikki.getSummary());

///////////////////////////////////////////////////////// ITERATION: THE FOR LOOP 46