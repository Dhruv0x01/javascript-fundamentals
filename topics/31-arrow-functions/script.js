// arrow functions = a concise way to write function expressions
//                   good for simple functions that you only use once

//                   if some code is one line only else
//                   (parameters) => some code 

//                   (parameters) => {
//                                    multi
//                                    line
//                                    code   };

//Function Declaration
function hello(){
    console.log(`Hello`);
}
hello();


//Function Expression
const greetings = function(){
    console.log(`Greetings ladies and gentlemen`);
}
greetings();


//Arrow Function
//const greeting = (name) => console.log(`Hello ${name}!!`); //Or more simpler way down
const greeting = name => console.log(`Hello ${name}!!`);
greeting(`Dhruv`);

// if you need more than one statement in code side then enclose them in {}
const intro = (name, age, course, college) => {
    console.log(`Hello everyone, my name is ${name}.`);
    console.log(`I am ${age} years old.`);
    console.log(`I am doing ${course} from ${college}.`);
};
intro(`Dhruv`, 20, `Computer Science`, `IILM University`);


// Example 2


setTimeout(hello, 2000); //Used function that is declared(function declaration) in callback
setTimeout(greetings, 2000); // Used function expression we made earlier 

//Function expression with code being here
setTimeout(function(){
    console.log(`Hello function expression`);
}, 2000); 

//Arrow function with code here
setTimeout(()=>console.log(`Hi everyoneee, its arrow function!!`), 2000);




// Example 3

//Using arrow functions instead of callback
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//For the code written after => you can just write without the return keyword
const squaredNums = numbers.map( element => Math.pow(element, 2));
console.log(squaredNums);

// Since its a single line code after => we dont need return or {} 
// it will automatically return
// Since parameter is one we dont need ()
// But with zero parameter the () is required

const cubedNums = numbers.map( element => Math.pow(element, 3) );
console.log(cubedNums);




// Filter method
// Filter out any element that are odd

const evenNums = cubedNums.filter(element => element%2===0);
console.log(evenNums);


// Filter out any element that are even

const oddNums = squaredNums.filter(element => element%2 !== 0);
console.log(oddNums);



// Reduce
// Sum of all element 
// Max and min

const total = cubedNums.reduce((accumulator, element) => accumulator+element);
console.log(`Total in cubed numbers = ${total}`);

const max = squaredNums.reduce((accumulator, element) => Math.max(accumulator, element));
console.log(`Maximum element in squared numbers: ${max}`);

const min = numbers.reduce((accumulator, element) => Math.min(accumulator, element));
console.log(`Minimum element in number: ${min}`);

