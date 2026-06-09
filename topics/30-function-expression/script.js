// Function declaration = define a reusable block of code that performs a specific task

function hello1(){
    console.log(`hello`);
}


// Function expressions = a way to define functions as values or variables

const hello = function(){
    console.log(`Hello`);
}
hello(); // Prints Hello automatically

/* Like we added function inside the .map(), this is called function expression, with arrow function the syntax get even shorter
numbers.map(function(element){
    return Math.pow(element, 2);
}
*/ 



setTimeout(hello, 3000); // Added a callback, it will perform that callback after 3 sec

setTimeout(function(){
    console.log(`Hello after 5 sec`);
}, 5000);


const numbers = [1, 2, 3, 4, 5, 6];


// This works
/*
const square = function(element){
    return Math.pow(element, 2);
}
const squared = numbers.map(square);
*/

// This works too
// Here we only used function once, so no need to declare it, just use it inside callback
const squared = numbers.map(function(element){
    return Math.pow(element, 2);
})
console.log(squared);


const cubed = numbers.map(function(element){
    return Math.pow(element, 3);
})
console.log(cubed);




// To filter out any odd numbers
const evenNums = numbers.filter(function(element){
    return element%2===0;
})
console.log(evenNums);

// To filter out any even numbers
const oddNums = numbers.filter(function(element){
    return element%2 !== 0;
})
console.log(oddNums);

// Reduce by summing all the elements of the array
const totals = numbers.reduce(function(accumulator, element){
    return accumulator + element;
})
console.log(totals);


// Instead of using function declaration and passing it as callback inside .map(), .filter(), .reduce()
// We passed in entire function expression inside it, in this way we didn't have to declare those functions
// as we are only using them once 

// arrow functions will shorten the syntax even further