// spread = expands an array into separate elements
// rest = bundles separate elements into an array

// rest parameters = (...rest) allow a function work with a variable number of arguments by bundling them into an array
// syntax = ...arrayName

const food1 = "pizza";
const food2 = "burger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

// we can accept any number of arguments using rest parameters
function openFridge(...foods){
    console.log(foods);
    console.log(...foods); // made the array get separated into each element
}
openFridge(food1, food2, food3, food4, food5);


// to stick all elements within an array using rest parameters
function getFood(...foods){
    return foods;
}
const foods = getFood(food1, food2, food3, food4, food5);
console.log(foods);

// to find sum of any amount of numbers
function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}
const total = sum(10, 20, 11, 100);
console.log(`Your total is $${total}`);


function getAvg(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result/numbers.length;
}

const average = getAvg(10, 20, 25, 30, 15, 25);
console.log(average);


// Using rest parameters to combine string together

function combineString(...strings){
    return strings.join(` `);
}

const fullName = combineString(`Dhruv`, `Darad`);
console.log(fullName);

function combineLetters(...strings){
    let a = '';
    for(let string of strings){
        a += string;
    }
    return a;
}
const x = combineLetters(`D`, `h`, `ru`, `v `, `D`, `ara`, `d`);
console.log(x);