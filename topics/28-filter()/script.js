// .filter() = creates a new array by filtering out elements
// element is provided to us by filter method too
// array.filer(callback)

let numbers = [1, 2, 3, 4, 5, 6, 7];

function isEven(element){
    return element%2 === 0; // We are returning even elements, odd wont return so we are filtering basically
}
let evenNums = numbers.filter(isEven);
//console.log(evenNums);


function isOdd(element){
    return element%2 !== 0; // Returning odd elements only
}
let oddNums = numbers.filter(isOdd);
//console.log(oddNums);


const ages = [19, 18, 17, 21, 16, 22, 17, 80];

function isAdults(element){
    return element>=18;
}
const adults = ages.filter(isAdults);
//console.log(adults);

function isChildren(element){
    return element < 18;
}
const children = ages.filter(isChildren);
//console.log(children);



const words = ["apple", "mango", "banana", "watermelon", "papaya", "coconut"];

function lengthSmall(element){
    return element.length <= 6;
}
const smallWords = words.filter(lengthSmall);
console.log(smallWords);

function lengthLong(element){
    return element.length > 6;
}
const longWords = words.filter(lengthLong);
console.log(longWords);
