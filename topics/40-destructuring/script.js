// destructuring = extract values from arrays and objects and then assign them to variables in a convenient way
//                 [] = to perform array destructuring
//                 {} = to perform object destructuring


// Example 1
// Swap the value of two variables

let a = 1;
let b = 2;

// On the left hand side we are using destructuring
// On the right hand side we are creating an array
[a, b] = [b, a];

console.log(a);
console.log(b);



// Example 2
// Swap two elements in an array
/*

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);
*/

// Example 3
// Assign array elements to variables
// Array me jo elements hai unhe store kro to newly created variables


const colors = ["red", "green", "blue", "orange", "black"];

// Assigning first three colors to individual variables
// Assigning rest colors to a new array using rest parameters(...)
const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);

console.log(extraColors);



// Example 4
// Extract values from objects



const person1 = {
    firstName: "Dhruv",
    lastName: "Darad",
    age: 21
}

const person2 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 31,
    job: "chef"
}

// You can set default values when using destructuring, it is default value only, it will get overridden if the object has some value for that property
const {firstName, lastName, age, job="Unemployed"} = person1;

//const {firstName, lastName, age, job} = person2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job); 



// Example 5
// Destructure in function parameters

// When we receive object as argument we are going to destructure it
// We added default value for job as unemployed -> but if someone has something written in there then it will override default value
function displayPerson({firstName, lastName, age, job="unemployed"}){
    console.log(`Hello everyone! This is ${firstName} ${lastName}.`);
    console.log(`I am a ${age} years old ${job}.`);
}

const person11 = {
    firstName: "Dhruv",
    lastName: "Darad",
    age: 21
}

const person22 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 32,
    job: "chef"
}

displayPerson(person11);
// We will be sending object as parameters






